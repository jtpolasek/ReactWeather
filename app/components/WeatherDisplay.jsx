var React = require('react');

var WeatherDisplay = ({temp,location}) => {
  return (
      <h3 className="text-center">It is {temp}&deg;F in {location}.</h3>
  )
}


module.exports = WeatherDisplay;
