var test = require('taptap');
var assert = require('assert');
var computep = require('../computep');

test(function (done) {
  var jobs = [
    {s: 1, f: 4}, 
    {s: 3, f: 5}, 
    {s: 0, f: 6}, 
    {s: 4, f: 7}, 
    {s: 3, f: 8}, 
    {s: 5, f: 9}, 
    {s: 6, f: 10}, 
    {s: 8, f: 11}
  ];  
 
  var p = computep(jobs);

  assert.deepEqual(p, [-1, -1, -1, 0, -1, 1, 2, 4]);

  done();
});

test(function (done) {
  var jobs = [];

  var p = computep(jobs);

  assert.deepEqual(p, []);

  done();
});

test(function (done) {
  var jobs = [{s: 1, f: 2}, {s: 3, f: 4}, {s: 4, f: 5}];

  var p = computep(jobs);

  assert.deepEqual(p, [-1, 0, 1]);

  done();
});

