'use strict';
const Q = require('q');
const exec = require('child_process').exec;

function exeCli(cmds, dfd, option) {
  var taskName = option.taskName;
  var webRoot = option.webRoot;
  var cmd = cmds.shift();
  exec(cmd, { cwd: webRoot }, function(errCode, output) {
    //任务完成或者任务出错
    if (!cmds.length || errCode) {
      dfd.resolve(errCode, output);
    } else {
      exeCli(cmds, dfd, option);
    }
  });
}
/**
  option:{
    webRoot:'../',任务运行地址
    isAsync:false, 是否同步
    showOutput:false, 是否显示output
  }
 */
module.exports = function(cmds, option) {
  option = option || {};
  if (typeof cmds === 'string') {
    cmds = cmds.split();
  }
  //下面不使用arguments的原因是在option缺失的时候，不但要对于arguments要赋值还要修改arguments的length
  if (option.isAsync) {
    return (function(cmds, option) {
      var dfd = Q.defer();
      exeCli(cmds, dfd, option);
      return dfd.promise;
    }).apply(this, [cmds,option]);
  } else {
    return (function*(cmds, option) {
      var dfd = Q.defer();
      exeCli(cmds, dfd, option);
      return dfd.promise;
    }).apply(this, [cmds,option]);

  }
};