var test = require('taptap');
var assert = require('assert');
var dpwisp = require('../');

test(function (done) {
  var jobs = [
   { s: 1, f: 4 },
   { s: 3, f: 5 },
   { s: 0, f: 6 },
   { s: 4, f: 7 },
   { s: 3, f: 8 },
   { s: 5, f: 9 },
   { s: 6, f: 10 },
   { s: 8, f: 11 }
  ];

  var weif = function (job) {
    return job.f - job.s;
  };

  var res = dpwisp(jobs, weif);

  assert.deepEqual(res, {
    val: 10,
    schedule: [6, 2]
  });

  done();
});

test(function (done) {
  var jobs = [
   { s: 1, f: 4 },
   { s: 0, f: 6 },
   { s: 3, f: 5 },
   { s: 4, f: 7 },
   { s: 3, f: 8 },
   { s: 5, f: 9 },
   { s: 6, f: 10 },
   { s: 8, f: 11 }
  ];

  var weif = function (job) {
    return job.f - job.s;
  };

  var res = dpwisp(jobs, weif);

  assert.deepEqual(res, {
    val: 10,
    schedule: [6, 2]
  });

  done();
});

test(function (done) {
  var jobs = [
    { s: 0, f: 1 },
    { s: 1, f: 4 },
    { s: 3, f: 5 },
    { s: 5, f: 8 },
    { s: 7, f: 9 },
    { s: 8, f: 12}
  ];

  var weif = function (job) {
    return job.f - job.s;
  };

  var res = dpwisp(jobs, weif);

  assert.deepEqual(res, {
    val: 10,
    schedule: [5, 3, 1, 0]
  });

  done();
});