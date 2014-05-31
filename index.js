var assert = require('assert');

var computep = require('./fn/computep');
var traceback = require('./fn/traceback');

function dpwisp(jobs, weif) {
  var i, len;
  var opt;
  var job;
  var p;
  var res;

  opt = [];

  len = jobs.length;

  assert(len > 0);

  opt[0] = 0;

  p = computep(jobs);

  for (i = 1; i < len; i++) {
    job = jobs[i];
    opt[i] = Math.max(opt[i - 1], weif(job) + (opt[p[i]] || 0));
  }

  res = traceback(jobs, p, weif, opt);

  res = {
    val: opt[opt.length - 1],
    schedule: res[res.length - 1]
  }

  return res;
}

module.exports = dpwisp;