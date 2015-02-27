// // key handling
// 'use strict';

var exec = Npm.require('child_process').exec;

function keystrokeCmd(keystroke){
  return 'osascript -e \'tell application "System Events" to keystroke ' + keystroke + "'";
}

var runCommand = function (error, stdout, stderr) {
  if(error !== null) {
    console.log('exec error: ' + error);
  }
}

var presskey = function(key){
  if(key.type === 'ascii'){
    exec(keystrokeCmd("(ASCII character " + key.key + ")"), runCommand);
  }
  else{
    exec(keystrokeCmd('"' + key.key + '"'), runCommand);
  }
};

Meteor.methods({
  keyPressed: function (key) {
    console.log('key', key);
    presskey(keyList.filter(function(k){return k.id === key})[0]);
  }
});