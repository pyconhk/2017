'use strict';

const moment = require('moment-timezone');

const TIMEZONE = 'Asia/Hong_Kong';

function formatTime(time, format) {
  return moment(time).tz(TIMEZONE).format(format);
}
