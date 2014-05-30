var test = require('taptap');
var assert = require('assert');
var traceback = require('../traceback');

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

  var p = [
    -1,
    -1,
    -1,
    0,
    -1,
    1,
    2,
    4
  ];

  var weif = function (job) {
    return job.f - job.s;
  };

  var opt = [
    3,
    3,
    6,
    6,
    6,
    7,
    10,
    10
  ];

  var res = traceback(jobs, p, weif, opt);

  assert.deepEqual(res, [
    [ 0 ],
    [ 0 ],
    [ 2 ],
    [ 3, 0 ],
    [ 3, 0 ],
    [ 5, 0 ],
    [ 6, 2 ],
    [ 6, 2 ]
  ]);

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

  var p = [
    -1,
    0,
    0,
    2,
    2,
    3
  ];

  var weif = function(job) {
    return job.f - job.s;
  };

  var opt = [
    1,
    4,
    4,
    7,
    7,
    10
  ];

  var res = traceback(jobs, p, weif, opt);

  assert.deepEqual(res, [
    [ 0 ],
    [ 1, 0 ],
    [ 1, 0 ],
    [ 3, 1, 0 ],
    [ 3, 1, 0 ],
    [ 5, 3, 1, 0 ]
  ]);

  done();
});