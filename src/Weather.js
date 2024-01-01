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
  let [country, setCountry] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [feels, setFeels] = useState("");
  let [pressure, setPressure] = useState("");
  let [date, setDate] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setCity(response.data.city);
    setCountry(response.data.country);
    setTemperature(response.data.temperature.current);
    setFeels(response.data.temperature.feels_like);
    setPressure(response.data.temperature.pressure);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setDate(new Date(response.data.time * 1000));
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
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

  if (ready) {
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
        <h1 className="location">{city}</h1>

        <div className="country fw-bold">{country}</div>
        <div className="update fw-semibold">
          <FormattedDate date={date} />
        </div>
        <div className="description">
          <div className="row">
            <div className="col-6">
              <div className="condition">
                <img src={icon} alt="" />
                <div className="text-capitalize">{description}</div>

                <span className="float-left temperature">
                  <WeatherTemperature celsius={temperature} />
                </span>
              </div>
            </div>

            <div className="col-6">
              <ul className="conditions">
                <li>
                  <span className="type">Feels like: </span>
                  <span id="max"> {Math.round(feels)}</span>℃
                </li>
                <li>
                  <span className="type">Pressure: </span>
                  <span id="min "> {Math.round(pressure)}</span>Pa
                </li>
                <li>
                  <span className="type">Humidity: </span>
                  <span id="humidity">{humidity} </span>%
                </li>
                <li>
                  <span className="type">Wind speed: </span>
                  <span id="wind">{wind} </span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <Forecast city="Krakow" />
      </div>
    );
  } else {
    Search();
    return "loading";
  }
}
