var test = require('../fn/test');

test.skip(function (done) {
});

test.todo(function (done) {
  done();
});

test.todo(function (done) {

});

test(function (done) {
  done();
});