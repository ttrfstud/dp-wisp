taptap
===========
taptap is simple testing function. you give a test function with "done" param. like that:

```javascript
var test = require('taptap');
var assert = require('assert');

test(function (done) {
  assert(1);
  done();
});
```

you should always call "done". taptap will timeout in 2s, you can't alter it.

taptap produces results in tap format (i suppose..).

there may be two reasons when test failed:

 * there were uncaught exceptions in your test functions. like those produced by assertions, for example
 * your test function did not call "done"

in these cases taptap will output stacktrace for the first case and "hanger" test function source code in the second case.

taptap writes to stdout but you could give it another stream to write to if you want. call .pipe on it, like this

```javascript
var test = require('taptap');
var stream = require('stream').Transform;

test.pipe(new stream).pipe(new stream);

[your tests...]
```

you could also .skip and .todo tests. like this:

```javascript
var test = require('taptap');

test.skip(function () {
});

test.todo(function () {
  throw new Error;
});
```

skip tests are always "ok", todo tests may be either "not ok" (if they don't pass) or "ok" if they pass (gives bonus!).

please check that your test functions are indeed functions!