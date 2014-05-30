var test = require('../fn/test');
var assert = require('assert');

test(function (done) {
  assert(1);
  done();
});

test(function (done) {
  assert(2);
  done();
});