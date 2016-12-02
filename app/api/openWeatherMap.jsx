var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?appid=2560e14129681e701caf5a8e22507616&units=imperial';

//2560e14129681e701caf5a8e22507616

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
    
      if (res.data.cod && res.data.message){
          debugger;
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (err) {
        debugger;
        throw new Error(err.response.data.message);
    });
  }
}
