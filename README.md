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
Qeeper has the following configuration options:  
- defDir  
The directory path which has SQL definition files.  
The default value is process.env.PWD + '/qeeper'.
- defExt  
The directory path which has SQL definition files.  
The default value is 'def'.
- cache  
The flag which indicates whether or not to cache the SQLs which are parsed and executed in the memory.  
The default value is false.

## SQL definition files
You need to make SQL definition files like the following:
```sql
SELECT
      u.id
,     u.name
,     u.email
FROM
      users u
WHERE
      u.id = $1
```

## Usage
You can execute SQL in the SQL definition files by calling Qeeper#sql and passing the SQL definition file's name (without the extension).
```javascript
client.query(qeeper.sql('select_users'), [currentUserId], function(err, users){
```
