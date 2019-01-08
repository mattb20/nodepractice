const request = require('request');

request({
  url: 'https://weather.api.here.com/weather/1.0/report.xml?app_id=Kt4m1SROMh0MgQuxlUtJ&app_code=wgHOQyUgIpbsHvc2WTG2Zg&product=observation&name=Berlin',
  json: true
}, (error, response, body) => {
  console.log(body);
});
