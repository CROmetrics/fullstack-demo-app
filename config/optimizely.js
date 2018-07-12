const optimizely = require('@optimizely/optimizely-sdk');
const request = require('request');

let optimizelyClientInstance;

const DATAFILE_URL = 'https://cdn.optimizely.com/public/2489010562/s/11082312092_11082312092.json';
const REFRESH_RATE = 60 * 1000; // every minute

function refresh() {
  request(DATAFILE_URL, (error, response, body) => {
    optimizelyClientInstance = optimizely.createInstance({ datafile: body });
  });
}

refresh();

setInterval(refresh, REFRESH_RATE);

module.exports = () => {
  return optimizelyClientInstance;
};
