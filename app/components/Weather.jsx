var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (newData) {
      that.setState({
        location: newData.name,
        temp: Math.floor(newData.main.temp),
        isLoading: false
      })
    }, function (errorMessage){
        that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage (){
      if (isLoading) {
        return<h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location){
        return <WeatherDisplay temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
