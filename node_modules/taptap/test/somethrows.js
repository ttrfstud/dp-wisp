var test = require('../fn/test');
var assert = require('assert');

test(function (done) {
  assert(1);
  done();
});

test(function (done) {
  throw new Error();
});

test(function (done) {
  assert(3);
  done();
});