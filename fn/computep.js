function computep(jobs) {
  var i, j, len;
  var p;

  len = jobs.length;

  sortjobs(jobs);
  
  p = [];

  for (i = len - 1; i >= 0; i--) {
    p[i] = -1;

    for (j = i - 1; j >= 0; j--) {
      if (jobs[j].f <= jobs[i].s) {
        p[i] = j;
        break;
      }
    }
  }

  return p;
}

module.exports = computep;