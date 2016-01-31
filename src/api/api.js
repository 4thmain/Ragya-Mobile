var Rooturl = 'http://api.openweathermap.org/data/2.5/weather?APPID=7ffd59762990afd3f94db516fd56843b';
var _ = require('lodash');
//lat=35&lon=139

var KelvintoC = function(kelvin) {
  return Math.round(kelvin - 273.15) + 'ºC'
};

module.exports = function(latitude,longitude) {
  var url = `${Rooturl}&lat=${latitude}&lon=${longitude}`;
	return fetch(url)
    .then(function(response){
			return response.json();
		})

		.then(function(json){
      return {
      city: _.capitalize(json.name),
      temperature: KelvintoC(json.main.temp),
      description: _.capitalize(json.weather[0].description)
      }
	});
}
