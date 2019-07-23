import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { async } from "q";

const API_KEY = "f5500d5f8c2460c7be651413d0c1b66d";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeatherData = async ev => {
    try {
      ev.preventDefault(); //Prevent the default behaviour of this component when the button is presses
      const city = ev.target.elements.city.value;
      const country = ev.target.elements.country.value;
      const API_URL = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}uk&mode=json&appid=${API_KEY}&units=metric`
      );
      const weatherData = await API_URL.json();

      if (city && country) {
        this.setState({
          temperature: weatherData.main.temp,
          city: weatherData.name,
          country: weatherData.sys.country,
          humidity: weatherData.main.humidity,
          description: weatherData.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city and country"
        });
      }
    } catch (e) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Data Not found. Something is wrong with the request."
      });
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Form getWeatherData={this.getWeatherData} />
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
