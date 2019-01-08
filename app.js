const request = require('request')

request({'https://weather.api.here.com/weather/1.0/report.xml?app_id={
Kt4m1SROMh0MgQuxlUtJ}&app_code={wgHOQyUgIpbsHvc2WTG2Zg}&product=observation&name=Berlin'
  url: '',
  json: true
}, (error, response, body) => {
  console.log(body);
});
