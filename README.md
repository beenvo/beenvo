<div align='center'>

<h1> Beenvo </h1>

<hr />

<img src='beenvo.jpg' width='21%' />

<hr />

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverage-img]][coverage-url]
[![NPM version][npm-badge]][npm-url]
![Code Size][code-size-badge]
[![License][license-badge]][license-url]

<hr />

<h3> 
<b>Beenvo</b> let you loads environment variables from files (support many files extensions) for Node.js projects into `process.env` ๐.
</h3>

</div>

## `Features`

- ๐ฆ &nbsp; Inspired from [dotenv].
- ๐ &nbsp; Isomorphic to the moon.
- ๐ฅ &nbsp; Blaze and lightweight.
- ๐ฑโ๐ &nbsp; Support many files extensions (not only `.env*`);

  - โ &nbsp; Toml (`*.toml`) support.
  - โ &nbsp; Yaml (`*.yml` and `*.yaml`) support.
  - โ &nbsp; Properties (`*.ini` and `*.properties`) support.
  - โ &nbsp; Xml (`*.xml`) support.
  - โ &nbsp; Json (`*.json`) support.
  - โ &nbsp; dotEnv (`.env*`) support.

- ๐งผ Support clean up variables loaded inside `process.env`.
- ๐ &nbsp; Support preload <small>(with cli)</small>. [๐ง - welcome to any kind of help ๐๐ป]
- ๐ฑโ๐ค &nbsp; Strong competitor to the rest dotEnv modules.
- ๐ข &nbsp; Node.js support.
- ๐ฆ &nbsp; Deno support. [๐ง - welcome to any kind of help ๐๐ป]
- ๐ &nbsp; TypeScript support.

#### `Notes:` Require Node 12+.

## `Installation`

```bash
# npm
$ npm install beenvo
# yarn
$ yarn add beenvo
```

## `Usage`

This is a practical example of how to use.

```yaml
# create your variables file with name `env.yaml`.
SOME_NUMBER: 1000
SOME_STRING: "don't do that"
```

```javascript
// const beenvo = require("beenvo");
import beenvo from "beenvo";

const options = { path: "env.yaml" };

beenvo(options);

// process.env.SOME_NUMBER // 1000
// process.env.SOME_STRING // "don't do that"
```

if you want more example you can check the test folder or open an issue ๐.

### `OPTIONS`

You can pass options object to beenvo;

- `options.path` &mdash; (String) represent path to the file which contains your variables (`default to '.env'`).
- `options.cleanup` &mdash; (Boolean) to remove all loaded variables (`default to false`).

## `Support`

If you have any problem or suggestion please open an issue.

#### License

---

[MIT](LICENSE) &copy; [Imed Jaberi](https://github.com/3imed-jaberi)

<!-- ***************** -->

[travis-img]: https://travis-ci.com/beenvo/beenvo.svg?branch=master
[travis-url]: https://travis-ci.com/beenvo/beenvo
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/beenvo/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/beenvo?branch=master
[npm-badge]: https://img.shields.io/npm/v/beenvo.svg?style=flat
[npm-url]: https://www.npmjs.com/package/beenvo
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat
[license-url]: https://github.com/3imed-jaberi/beenvo/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/beenvo
[pr-welcoming-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[dotenv]: https://github.com/motdotla/dotenv#readme

<!-- ***************** -->
