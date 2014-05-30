/** Can not alter ! **/
var TIMEOUT = 2000;

var c;
var out;

c = 0;

out = process.stdout;

process.on('exit', exit);

function depad(test) {
  return test.toString().replace(/^/gmi, ' ')
}

function exit() {
  out.write('1..');
  out.write(String(c));
  out.write('\n');
}

function ok(pbox) {
  clearTimeout(pbox.notokid);
  if (pbox.ok) {
    out.write('ok');
    if (pbox.todo) {
      out.write(' #TODO :\n');
      out.write(depad(pbox.test));
    }
    out.write('\n');
    c++;
  }
  return;
}

function run(pbox, test) {
  try {
    pbox.test(ok.bind(null, pbox));
  } catch (e) {
    pbox.stack = e.stack.replace(/^\s+/gmi, ' ');
    notok(pbox);
  }
}

function notok(pbox) {
  clearTimeout(pbox.notokid);
  pbox.ok = false;

  out.write('not ok ');

  if (pbox.todo) {
    out.write('#TODO :\n');
    out.write(depad(pbox.test));
  } else if (pbox.stack) {
    out.write(String(pbox.stack));
  } else {
    out.write('hanger:\n');
    out.write(depad(pbox.test));
  }

  out.write('\n');
  c++;

  if (!pbox.todo) {
    process.exit();
  }
}

function test(test, todo) {
  var pbox;

  pbox = {
    ok: 1,
    notokid: 0,
    test: test,
    stack: null,
    todo: todo
  };

  pbox.notokid = setTimeout(notok, TIMEOUT, pbox);
  setTimeout(run, 0, pbox);
}

test.pipe = function (stream) {
  out = stream;
  return out;
};

test.skip = function (test) {
  out.write('ok #SKIP :\n');
  out.write(depad(test));
  out.write('\n')
  c++;
};

test.todo = function (fn) {
  test(fn, true);
};

module.exports = test;