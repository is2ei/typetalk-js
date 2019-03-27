typetalk-js
===

## Example Usage

```javascript
const config = require('./config');
const Typetalk = require('typetalk');
const client = new Typetalk.Client({
    config.TYPETALK_TOKEN
});

client.PostMessage();
```
