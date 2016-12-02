var React = require('react');

var WeatherDisplay = ({temp,location}) => {
  return (
      <p>It is {temp} &deg;F in {location}</p>
  )
}


module.exports = WeatherDisplay;
