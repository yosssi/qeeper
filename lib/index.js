var fs = require('fs');

var Qeeper = function(){
  if(process && process.env && process.env.PWD){
    this.defDir = process.env.PWD + '/qeeper';
  }
  this.defExt = '.def';
  this.cache = false;
  this.caches = {};
};

Qeeper.prototype.configure = function(config){
  if(config){
    if(config.defDir){
      this.defDir = config.defDir;
    }
    if(config.defExt){
      this.defExt = config.defExt;
    }
    this.cache = config.cache || false;
  }
  return this;
};

Qeeper.prototype.sql = function(defName){
  if(!defName){
    throw new Error('the defName parameter is not set.');
  }
  if(this.cache && this.caches[defName]){
    return this.caches[defName];
  }
  var defPath = this.defDir + '/' + defName + this.defExt;
  var defSQL = fs.readFileSync(defPath, 'utf8').replace(/[\n\r]/g, ' ').replace(/^\s+|\s+$/g,'').replace(/ +/g, ' ');
  if(this.cache && !this.caches[defName]){
    this.caches[defName] = defSQL;
  }
  return defSQL;
};

module.exports = new Qeeper();