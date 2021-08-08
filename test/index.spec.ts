import { expect } from 'chai'

import { beenvo } from '../src'

describe('beenvo', () => {
  it('should export a function', () => {
    expect(typeof beenvo, 'function')
  })

  describe('options', () => {
    it('should throw when pass invalid path option type', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => beenvo({ path: 1000 as any })).to.Throw
    })

    it('should throw when don\'t pass path option and don\'t exist the .env file', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => beenvo(undefined as any)).to.Throw
    })

    it('should throw when pass .env file not exist', () => {
      expect(() => beenvo({ path: '.env.development' }))
        .to.throw(/ENOENT: no such file or directory/)
    })

    it('should throw when pass invalid cleanUp option type', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => beenvo({ cleanUp: 1000 as any })).to.Throw
    })

    it('should throw when .env file haven\'t supported extension', () => {
      // NOTE: ALL FILES START NAME WITH .env AND THERES EXTENSION
      // DON'T SUPPORTED ARE PARSED AS DOT-ENV.
      expect(() => beenvo({ path: './test/.env/config.xyz' }))
        .to.throw(/yaml, yml, toml, xml, ini, properties, json, env/)
    })
  })

  describe('dotEnv parser', () => {
    it('should return void when load the .env file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
    })

    it('should load the .env file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
      expect(process.env.REQUEST_NUMBER).to.be.equal('1000')
    })

    it('should handle the single quotes correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
      expect(process.env.REQUEST_METHOD).to.be.equal('POST')
    })

    it('should handle the double quotes correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
      expect(process.env.REQUEST_ROUTE).to.be.equal('/USER')
    })

    it('should handle the nested quotes correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
      expect(process.env.REQUEST_BODY).to.be.equal("don't do that")
    })

    it('should remove the loaded quotes correctly', () => {
      expect(beenvo({ path: './test/.env/.env.test' })).to.be.undefined
      expect(process.env.REQUEST_NUMBER).to.be.equal('1000')
      expect(beenvo({ path: './test/.env/.env.test', cleanUp: true })).to.be.undefined
      expect(process.env.REQUEST_NUMBER).to.be.undefined
      expect(process.env.REQUEST_METHOD).to.be.undefined
      expect(process.env.REQUEST_ROUTE).to.be.undefined
      expect(process.env.REQUEST_BODY).to.be.undefined
    })

    it('should throw when pass invalid .env file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid' }))
        .to.throw(/should you provide a value for each key./)
    })
  })

  describe('yaml parser', () => {
    it('should return void when load the .env.yaml/.env.yml file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.yml' })).to.be.undefined
      expect(beenvo({ path: './test/.env/.env.yml', cleanUp: true })).to.be.undefined
      expect(beenvo({ path: './test/.env/.env.yaml' })).to.be.undefined
    })

    it('should throw when pass invalid yaml/yml file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid.yaml' })).to.be.Throw
    })
  })

  describe('tomlParser', () => {
    it('should return void when load the .env.toml file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.toml' })).to.be.undefined
    })

    it('should throw when pass invalid toml file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid.toml' })).to.be.Throw
    })
  })

  describe('xml parser', () => {
    it('should return void when load the .env.xml file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.xml' })).to.be.undefined
    })

    it('should throw when pass invalid xml file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid.xml' })).to.be.Throw
    })
  })

  describe('json parser', () => {
    it('should return void when load the .env.json file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.json' })).to.be.undefined
    })

    it('should throw when pass invalid json file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid.json' })).to.be.Throw
    })
  })

  describe('int/properties parser', () => {
    it('should return void when load the .env.properties/.env.ini file correctly', () => {
      expect(beenvo({ path: './test/.env/.env.ini' })).to.be.undefined
      expect(beenvo({ path: './test/.env/.env.ini', cleanUp: true })).to.be.undefined
      expect(beenvo({ path: './test/.env/.env.properties' })).to.be.undefined
    })

    it('should throw when pass invalid properties/ini file', () => {
      expect(() => beenvo({ path: './test/.env/.env-invalid.ini' })).to.be.Throw
    })
  })
})
