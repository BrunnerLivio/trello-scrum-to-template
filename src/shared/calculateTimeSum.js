const moment = require('moment');
const parseDuration = require('parse-duration');
const momentDurationFormatSetup = require('moment-duration-format');

// @ts-ignore
momentDurationFormatSetup(moment);

function calculateTimeSum(durations) {
    const durationInMs = durations
        .reduce((previous, duration) => previous + parseDuration(duration), 0);
    return moment.duration(durationInMs, 'ms').format('w[w] d[d] h[h] m[m]');
}

module.exports = calculateTimeSum;
