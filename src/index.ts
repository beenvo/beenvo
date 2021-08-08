/*!
 * beenvo
 *
 * Copyright(c) 2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */
import fs from 'fs'
import { load as yamlParser } from 'js-yaml'
import { parse as _iniParser } from 'properties'
import { parse as tomlParser } from '@iarna/toml'
import { parseStringPromise as xmlParser } from 'xml2js'
import { resolve as pResolve, extname as pExtname, sep as pSeperator } from 'path'

/**
 * parse ini and properties content files.
 *
 * @api private
 */
function iniParser (iniAndPropertiesContent: string) {
  return _iniParser(iniAndPropertiesContent, {
    sections: true,
    comments: [';', '#'],
    separators: '=',
    strict: true
  })
}

/**
 * parse json content files.
 *
 * @api private
 */
function jsonParser (jsonContent: string) {
  return JSON.parse(jsonContent)
}

/**
 * parse dotenv content files.
 *
 * @api private
 */
function dotEnvParser (dotEnvContent: string) {
  // constants.
  const NEW_LINES = /\r?\n|\r/
  const SINGLE_QUOTES = '\''
  const DOUBLE_QUOTES = '"'

  // each lines of the file.
  const lines = dotEnvContent
    .split(NEW_LINES)
    /* c8 ignore next */
    .filter(line => line.trim().length > 0 && (
      line !== '\n' ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      line !== '\r\n' as any
    ))

  // clean variables.
  const variables = lines.map((line) => {
    // extract the key/value of the line.
    let [key, value] = line.split('=')

    // handle the empty values.
    if (!value) {
      throw new Error('should you provide a value for each key.')
    }

    // remove the extra-space.
    key = key.trim().toUpperCase()
    value = value.trim()

    // remove the 1st and last chars if exist signle or double quotes.
    if (value.startsWith(SINGLE_QUOTES) || value.startsWith(DOUBLE_QUOTES)) {
      value = value.slice(1, -1)
    }

    return { key, value }
  })

  return variables
}

/**
 * helper function to extract the file type.
 *
 * @api private
 */
function getType (filePath: string): string {
  // extract the file name.
  const [fileName] = filePath.split(pSeperator).reverse()

  // extract the extension name.
  let type = pExtname(fileName).slice(1)

  // handle the raw dotenv file.
  if (
    !'yaml yml toml xml ini properties json'.split(' ').includes(type) &&
    fileName.startsWith('.env')
  ) type = 'env'

  // handle unsupported type.
  if (!'yaml yml toml xml ini properties json env'.split(' ').includes(type)) { throw new Error('should pass file with type among [yaml, yml, toml, xml, ini, properties, json, env].') }

  return type
}

/**
 * helper function to return parsers object
 *
 * @api private
 */
function getParser (type) {
  return {
    yaml: yamlParser,
    yml: yamlParser,
    toml: tomlParser,
    xml: xmlParser,
    ini: iniParser,
    properties: iniParser,
    json: jsonParser,
    env: dotEnvParser
  }[type]
}

export type BeenvoConfig = {
  path?: string,
  cleanUp?: boolean
}

/**
 * process files content with environment variables.
 *
 * @api public
 */
export function beenvo ({ path = '.env', cleanUp = false }: BeenvoConfig): void {
  // resolve the dot-env file path.
  const filePath = pResolve(process.cwd(), path)
  
  // extract the file content.
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  // get the type of the passed file.
  const type = getType(filePath)

  // select the right parser.
  const parser = getParser(type)

  // parse file content to json array.
  const parsedResult = parser(fileContent)

  // normalize all the parser behavoir.
  const variables = type === 'env'
    ? parsedResult
    : Object
        .keys(parsedResult)
        .map((key) => ({ key: key.toUpperCase(), value: parsedResult[key] }))

  // process variables with 'process.env'.
  for (const { key, value } of variables) {
    // remove variables from 'process.env'.
    if (cleanUp) {
      delete process.env[key]
      continue
    }

    // load variables to 'process.env'.
    process.env[key] = value
  }
}

/**
 * Expose `beenvo()`.
 */

export { beenvo as default }
