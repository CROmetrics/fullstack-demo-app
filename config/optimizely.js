const optimizely = require('@optimizely/optimizely-sdk');
const request = require('request');

let optimizelyClientInstance;

const DATAFIE_URL = 'https://cdn.optimizely.com/public/2489010562/s/11082312092_11082312092.json';
const REFRESH_RATE = 60 * 1000; // every minute

setInterval(()=>{
  request(DATAFIE_URL, (error, response, body) => {
    optimizelyClientInstance = optimizely.createInstance({ datafile: body });
  });
}, 60 * REFRESH_RATE);

module.exports = ()=>{optimizelyClientInstance};