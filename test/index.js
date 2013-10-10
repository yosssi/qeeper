var assert = require('assert');

describe('Tests for qeeper', function(){
  it('#Confirm that we can get the qeeper instance successfully', function(){
    assert.doesNotThrow(function(){
      var qeeper = require('../lib');
      log('Qeeper', qeeper);
    });
  });

  it('#Confirm that the qeeper instance has a valid default "defDir" value', function(){
    var qeeper = require('../lib');
    log('Qeeper', qeeper);
    var actual = qeeper.defDir;
    var expected = process.env.PWD + '/qeeper';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm that the qeeper instance has a valid default "defExt" value', function(){
    var qeeper = require('../lib');
    log('Qeeper', qeeper);
    var actual = qeeper.defExt;
    var expected = '.def';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm that the configuration of "defDir" succeeds', function(){
    var qeeper = require('../lib').configure({defDir: __dirname + '/qeeper'});
    log('Qeeper', qeeper);
    var actual = qeeper.defDir;
    var expected = __dirname + '/qeeper';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm that the configuration of "defExt" succeeds', function(){
    var qeeper = require('../lib').configure({defExt: '.sql'});
    log('Qeeper', qeeper);
    var actual = qeeper.defExt;
    var expected = '.sql';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm that the configuration of "cache" succeeds', function(){
    var qeeper = require('../lib').configure({cache: true});
    log('Qeeper', qeeper);
    var actual = qeeper.cache;
    var expected = true;
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm that the configuration of "defDir", "defExt" and "cache" succeeds', function(){
    var qeeper = require('../lib').configure({defDir: __dirname + '/qeeper', defExt: '.sql', cache: true});
    log('Qeeper', qeeper);
    var actual = qeeper.defDir;
    var expected = __dirname + '/qeeper';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
    actual = qeeper.defExt;
    expected = '.sql';
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
    actual = qeeper.cache;
    expected = true;
    logActual(actual);
    logExpected(expected);
    assert.equal(actual, expected);
  });

  it('#Confirm sql method when defName is not set', function(){
    var qeeper = require('../lib').configure({defDir: __dirname + '/qeeper', defExt: '.def', cache: false});
    assert.throws(function(){
      log('Qeeper', qeeper);
      qeeper.sql();
    });
  });

  it('#Confirm sql method when not cached', function(){
    assert.doesNotThrow(function(){
      var qeeper = require('../lib').configure({defDir: __dirname + '/qeeper', defExt: '.def', cache: false});
      log('Qeeper', qeeper);
      log('SQL', qeeper.sql('0001'));
      log('Qeeper', qeeper);
    });
  });

  it('#Confirm sql method when cached', function(){
    assert.doesNotThrow(function(){
      var qeeper = require('../lib').configure({defDir: __dirname + '/qeeper', defExt: '.def', cache: true});
      log('Qeeper', qeeper);
      log('SQL', qeeper.sql('0001'));
      log('Qeeper', qeeper);
      log('SQL', qeeper.sql('0001'));
      log('Qeeper', qeeper);
    });
  });

});

function logActual(value){
  log('Actual', value);
}

function logExpected(value){
  log('Expected', value);
}

function log(){
  if(arguments.length === 1){
    console.log(now(), arguments[0]);
  }else if(arguments.length === 2){
    console.log(now(), arguments[0], arguments[1]);
  }
}

function now(){
  var date = new Date();
  var year = date.getYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  if(year < 2000) { year += 1900; }
  if(month < 10) { month = "0" + month; }
  if(day < 10) { day = "0" + day; }
  if(hour < 10) { hour = "0" + hour; }
  if(min < 10) { min = "0" + min; }
  if(sec < 10) { sec = "0" + sec; }
  return String(year) + '-' + String(month) + '-' + String(day) + ' ' + String(hour) + ':' + String(min) + ':' + String(sec);
}