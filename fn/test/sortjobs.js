var test = require('taptap');
var assert = require('assert');
var sortjobs = require('../sortjobs');

test(function (done) {
  var jobs = [];

  sortjobs(jobs);

  assert.deepEqual(jobs, []);

  done();
});

test(function (done) {
  var jobs = [{f: 1}, {f: 2}, {f: 3}, {f: 4}];

  sortjobs(jobs);

  assert.deepEqual(jobs, [{f: 1}, {f: 2}, {f: 3}, {f: 4}]);

  done();
});

test(function (done) {
  var jobs = [{f: 1}, {f: 3}, {f: 2}, {f: 4}];

  sortjobs(jobs);

  assert.deepEqual(jobs, [{f: 1}, {f: 2}, {f: 3}, {f: 4}]);

  done();
});

test(function (done) {
  var jobs = [{f: 4}, {f: 3}, {f: 2}, {f: 1}];

  sortjobs(jobs);

  assert.deepEqual(jobs, [{f: 1}, {f: 2}, {f: 3}, {f: 4}]);

  done();
});

test(function (done) {
  var jobs = [{f: 4}, {f: 4}, {f: 2}, {f: 1}];

  sortjobs(jobs);

  assert.deepEqual(jobs, [{f: 1}, {f: 2}, {f: 4}, {f: 4}]);

  done();
});

test(function (done) {
  var jobs = [{f: 1}, {f: 4}, {f: 3}, {f: 2}, {f: 1}];

  sortjobs(jobs);

  assert.deepEqual(jobs, [{f: 1}, {f: 1}, {f: 2}, {f: 3}, {f: 4}]);

  done();
});