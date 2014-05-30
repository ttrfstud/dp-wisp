var test = require('../fn/test');
var assert = require('assert');

test(function (done) {
  assert(1);
  done();
});

test(function (done) {
  assert(0);
  done();
});

test(function (done) {
  assert(3);
  done();
});