'use strict';
const runTask = require('./index.js');
const co = require('co');

co(function*() {
  var instructionList = ['git branch', 'git reset --hard origin/master'];
  var option = {
    webRoot: '../fake-natoo'
  };
  console.log("this");
  var errCode = yield runTask(instructionList, option);
  console.log(errCode);
});