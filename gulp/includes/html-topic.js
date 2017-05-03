
const moment = require('moment');

const Days = {
  '09': 'Day 1',
  '10': 'Day 2'
};

// formatTome parse input time string
// and properly reformat it to display
function formatTime(timeStr, formatStr='YYYY-MM-DD HH:mm zz') {
  return moment(timeStr).format(formatStr)
}

// dayName returns "Day 1" or  "Day 2"
// according to the date of the given timeStr
function dayName(timeStr) {
  let day = formatTime(timeStr, 'DD');
  return day in Days ? Days[day] : null;
}

/**
 * addFilters
 * add functions here as nunjucks filters
 * @param {nunjucks.Environment} env environment object to modify
 */
function addFilters(env) {
  env.addFilter('dayName',  dayName);
  env.addFilter('formatTime', formatTime);
}

module.exports = {
  addFilters,
  dayName,
  formatTime
}
