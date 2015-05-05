# bash-args [![Code Climate](https://codeclimate.com/github/ileri/bash-args/badges/gpa.svg)](https://codeclimate.com/github/ileri/bash-args) [![Build Status](https://travis-ci.org/ileri/bash-args.svg)](https://travis-ci.org/ileri/bash-args) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Escape, unescape and stringify bash arguments

Install
--------------
```
$ npm install --save bash-args
```

Usage
--------------
```js
var bashArgs = require('bash-args')

// escape
bashArgs.escape('') // '\'\''
bashArgs.escape('$this') // '\\$this'
bashArgs.escape('test') // 'test'

// unescape
bashArgs.unescape('\'\'') // ''
bashArgs.unescape('\\$this') // '$this'
bashArgs.unescape('test') // 'test'

// stringify
// coming soon
```
