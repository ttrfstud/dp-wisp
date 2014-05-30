function sortjobs(jobs) {
  var i, j, len;

  var tjob;

  len = jobs.length;

  for (i = 1; i < len; i++) {
    j = i;
    
    while (j > 0 && jobs[j].f < jobs[j - 1].f) {


      tjob = jobs[j];
      jobs[j] = jobs[j - 1];
      jobs[j - 1] = tjob;

      --j;
    }
  }
}

module.exports = sortjobs;