var test = require('../fn/test');
var tstr = require('stream').Transform;

var str;

str = new tstr();
str._transform = function (chunk, enc, done) {
  console.log(chunk.toString().toUpperCase());
  done();
};

test.pipe(str);

test(function (done) {
  done();
});