function traceback0(jobs, i, p, opts, weif, res) {
  var job;
  var jobw;
  var prevcompat;
  var prevcompatopt;
  var prevopt;

  job = jobs[i];

  if (i < 0) {
    return;
  }

  jobw = weif(job);
  prevcompat = p[i];
  prevcompatopt = prevcompat < 0 ? 0 : opts[p[i]];
  prevopt = i - 1 < 0 ? 0 : opts[i - 1];

  if (jobw + prevcompatopt < prevopt) {
    traceback0(jobs, i - 1, p, opts, weif, res);
  } else {
    res.push(i);
    traceback0(jobs, p[i], p, opts, weif, res);
  }

  return res;
}

function traceback(jobs, p, weif, opts) {
  var i, len;
  var res;

  len = jobs.length;

  res = [];

  for (i = len - 1; i >= 0; i--) {
    res[i] = [];

    traceback0(jobs, i, p, opts, weif, res[i]);  
  }

  return res;
}

module.exports = traceback;