const runBash = require('../index.js');
const co = require('co');
const expect = require('chai').expect;

describe('runBash', function() {
  it('instructionList is string', function() {
    var instructionList = 'echo "one"';
    var option = {
      webRoot: '../fake-natoo',
      isAsync: true
    };
    return runBash(instructionList, option).then(function(errCode) {
      expect(errCode).to.be.equal(null);
    });
  });
  it('option is empty', function(done) {

    co(function*(done) {
      console.log("this");
      var instructionList = ['echo "one"', 'echo "two"'];
      var errCode = yield runBash(instructionList);
      expect(errCode).to.be.equal(null);
      done();
    }.call(this, done));
  });
  it('option is Async', function() {
    var instructionList = ['echo "one"', 'echo "two"'];
    var option = {
      webRoot: '../fake-natoo',
      isAsync: true
    };
    return runBash(instructionList, option).then(function(errCode) {
      expect(errCode).to.be.equal(null);
    });
  });
  it('option is Async and have error', function() {
    var instructionList = ['echo "one"', 'lala', 'echo "two"'];
    var option = {
      webRoot: '../fake-natoo',
      isAsync: true
    };
    return runBash(instructionList, option).then(function(errCode) {
      expect(errCode).to.not.equal(null);
    });
  });
  it('option is Sync', function(done) {
    var instructionList = ['echo "one"', 'echo "two"'];
    var option = {
      webRoot: '../fake-natoo'
    };
    co(function*(done) {
      var errCode = yield runBash(instructionList, option);
      expect(errCode).to.be.equal(null);
      done();
    }.call(this, done));
  });
  it('option is Sync and have error', function(done) {
    var instructionList = ['echo "one"', 'lala', 'echo "three"'];
    var option = {
      webRoot: '../fake-natoo'
    };
    co(function*(done) {
      var errCode = yield runBash(instructionList, option);
      expect(errCode).to.not.equal(null);
      done();
    }.call(this, done));
  });
});