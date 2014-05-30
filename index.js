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
    opt[i] = Math.max(opt[i - 1], weif(job) + opt[p[i]]);
  }

  res = traceback(jobs, weif, opt);

  return res;
}

module.exports = dpwisp;