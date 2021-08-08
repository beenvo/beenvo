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
<b>Beenvo</b> let you loads environment variables from files (support many files extensions) for Node.js projects into `process.env` 🐝.
</h3>

</div>

## `Features`

- 🦄 &nbsp; Inspired from [dotenv].
- 🚀 &nbsp; Isomorphic to the moon.
- 🔥 &nbsp; Blaze and lightweight.
- 🐱‍🐉 &nbsp; Support many files extensions (not only `.env*`);

  - ✅ &nbsp; Toml (`*.toml`) support.
  - ✅ &nbsp; Yaml (`*.yml` and `*.yaml`) support.
  - ✅ &nbsp; Properties (`*.ini` and `*.properties`) support.
  - ✅ &nbsp; Xml (`*.xml`) support.
  - ✅ &nbsp; Json (`*.json`) support.
  - ✅ &nbsp; dotEnv (`.env*`) support.

- 🧼 Support clean up variables loaded inside `process.env`.
- 📟 &nbsp; Support preload <small>(with cli)</small>. [🚧 - welcome to any kind of help 👋🏻]
- 🐱‍👤 &nbsp; Strong competitor to the rest dotEnv modules.
- 🐢 &nbsp; Node.js support.
- 🦕 &nbsp; Deno support. [🚧 - welcome to any kind of help 👋🏻]
- 🎉 &nbsp; TypeScript support.

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

if you want more example you can check the test folder or open an issue 😉.

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
[npm-badge]: https://img.shields.io/npm/v/3imed-jaberi/beenvo.svg?style=flat
[npm-url]: https://www.npmjs.com/package/3imed-jaberi/beenvo
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat
[license-url]: https://github.com/3imed-jaberi/beenvo/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/beenvo
[pr-welcoming-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[dotenv]: https://github.com/motdotla/dotenv#readme

<!-- ***************** -->
