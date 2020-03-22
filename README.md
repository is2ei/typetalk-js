typetalk-js
===

[![Build Status](https://travis-ci.com/is2ei/typetalk-js.svg?branch=master)][travis]
[![npm version](https://img.shields.io/npm/v/typetalk-js.svg)][npm]

[travis]: https://travis-ci.com/is2ei/typetalk-js
[npm]: https://badge.fury.io/js/typetalk-js

## Install

```
$ npm i typetalk
```

## Example Usage

### Using Bot’s Typetalk Token

```javascript
const Typetalk = require('typetalk');
const bot = new Typetalk.Bot({
    env.process.TYPETALK_TOKEN
});

bot.postMessage({
    message: 'Hello, world!'
});
```
