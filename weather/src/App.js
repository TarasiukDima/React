import React from "react";
import Info from "./components/info";
import Weather from "./components/weather";
import Form from "./components/form";

const KEY_API = "edf25beaefd2ed1d913542ea8738b04a";

class App extends React.Component{
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&units=metric`);
      const data = await api_url.json();
      if(data.cod === '404'){
        return this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            error:"City not found"
        });
    }
      let sunset = data.sys.sunset*1000;
      let timeSun = new Date(sunset);
      let sunset_timeSun = timeSun.getHours() + ":" + timeSun.getMinutes() + ":" + timeSun.getSeconds();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_timeSun,
        error: undefined
      });
    } else {
      this.setState({
        error: "Please enter city"
      });
    }
  }

  render(){
    return(
      <div className="wrap">
        <div className="container">
          <div className="row wrap_row">
            <div className="col-lg-6 title">
              <Info/>
            </div>
  
            <div className="col-lg-6 search">
              <Form weather = {this.gettingWeather}/>
              <Weather
                temp ={this.state.temp}
                city ={this.state.city}
                country ={this.state.country}
                pressure ={this.state.pressure}
                sunset ={this.state.sunset}
                error ={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App