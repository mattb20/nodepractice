const request = require('request')

request({'https://weather.api.here.com/weather/1.0/report.xml?app_id={YOUR_APP_ID}&app_code={YOUR_APP_CODE}&product=observation&name=Berlin'
  url: ''
}, (error, response, body) => {

});
