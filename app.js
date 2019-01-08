const request = require('request');

request({
  url: 'https://weather.api.here.com/weather/1.0/report.json?app_id=Kt4m1SROMh0MgQuxlUtJ&app_code=wgHOQyUgIpbsHvc2WTG2Zg&product=observation&name=Berlin',
  json: true
}, (error, response, body) => {
  console.log('The current weather in Berlin, Germany is: '+ body.observations.location[0].observation[0].description);
  // let weatherResponse = response.observations.location.observation;
  // console.log('The weather in Berlin, Germany is: ') + weatherResponse.temperatureDesc + weatherResponse.skyDescription;
});
