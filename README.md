# Qeeper

Qeeper is a SQL query keeper for Node.js.
The main task of Qeeper is to cut SQL out of JavaScript.
You can manage SQL and JavaScript separately by using Qeeper.

## Installation
```bash
npm install qeeper
```

## Load and configuration
```javascript
var qeeper = require('qeeper').configure({defDir: __dirname + '/qeeper', defExt: '.def', cache: true});
```
