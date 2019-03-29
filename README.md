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

```javascript
const config = require('./config');
const Typetalk = require('typetalk');
const client = new Typetalk.Client({
    config.TYPETALK_TOKEN
});

client.PostMessage();
```
