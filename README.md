# bash-args [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Escape, unescape and stringify bash arguments

## Installation

```sh
$ npm install --save bash-args
```

## Usage

```js
const bashArgs = require("bash-args");

// Escape
bashArgs.escape(""); // "''"
bashArgs.escape("$this"); // "\\$this"
bashArgs.escape("test"); // "test"

// Unescape
bashArgs.unescape("''"); // "
bashArgs.unescape("\\$this"); // "$this"
bashArgs.unescape("test"); // "test"

// Stringify
// Coming soon
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/bash-args.svg
[npm-url]: https://npmjs.org/package/bash-args
[travis-image]: https://travis-ci.org/Myhlamaeus/bash-args.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/bash-args
[daviddm-image]: https://david-dm.org/Myhlamaeus/bash-args.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/bash-args
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/bash-args/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/bash-args
