import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemp";
import Forecast from "./Forecast";

import "./App.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState("");

  function handleResponse(response) {
    console.log(response.data);

    setWeather({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function Search() {
    let Key = "b93bfbo44bd8a88678e0t635d05036d5";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${Key}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="city">
        <h1 className="text-muted header1">WEATHER APP</h1>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  className="form-control shadow-sm"
                  onChange={handleCity}
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <h1 className="location">{weather.city}</h1>

        <div className="country fw-bold">{weather.country}</div>
        <div className="update fw-semibold">
          <FormattedDate date={weather.date} />
        </div>
        <div className="description">
          <div className="row">
            <div className="col-6">
              <div className="condition">
                <div className="row">
                  <div className="col">
                    <img src={weather.icon} alt="" />
                  </div>

                  <div className=" col">
                    <WeatherTemperature celsius={weather.temperature} />
                    <div className="text-capitalize">{weather.description}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <ul className="conditions">
                <li>
                  <span className="type">Feels like: </span>
                  <span id="max"> {Math.round(weather.feels)}</span> ℃
                </li>
                <li>
                  <span className="type">Pressure: </span>
                  <span id="min "> {weather.pressure}</span> Pa
                </li>
                <li>
                  <span className="type">Humidity: </span>
                  <span id="humidity">{weather.humidity} </span> %
                </li>
                <li>
                  <span className="type">Wind speed: </span>
                  <span id="wind">{weather.wind} </span> km/h
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <Forecast city={weather.city} />
        </div>
      </div>
    );
  } else {
    Search();
    return "loading";
  }
}
