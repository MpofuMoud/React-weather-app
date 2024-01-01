import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemp";

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
  let [temp_max, setTemp_max] = useState("");
  let [temp_min, setTemp_min] = useState("");
  let [date, setDate] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setCity(response.data.name);
    setCountry(response.data.sys.country);
    setTemperature(response.data.main.temp);
    setTemp_max(response.data.main.temp_max);
    setTemp_min(response.data.main.temp_min);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDate(new Date(response.data.dt * 1000));
    setIcon(
      `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    );
  }

  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa4d98a1b55bfa6e99bb8f32851d7b49&units=metric`;
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
        <h1 className="text-muted">WEATHER APP</h1>
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
                  <span className="type">Max temp: </span>
                  <span id="max"> {Math.round(temp_max)}</span>℃
                </li>
                <li>
                  <span className="type">Min temp: </span>
                  <span id="min "> {Math.round(temp_min)}</span>℃
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
      </div>
    );
  } else {
    Search();
    return "loading";
  }
}
