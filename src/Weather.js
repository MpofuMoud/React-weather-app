import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./App.css";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [temp_max, setTemp_max] = useState("");
  let [temp_min, setTemp_min] = useState("");
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
    setIcon(
      `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    );
  }

  if (ready) {
    return (
      <div className="city">
        <div className="row">
          <div className="col">
            <form className="search-form">
              <input type="text" id="search" placeholder="🔍 Change City...." />
              <input
                className="searchButton"
                type="submit"
                id="searchButton"
                value="search"
              />
            </form>
          </div>
          <div className="col">
            <button type="button" className="currentButton" id="currentButton">
              Current Location
            </button>
          </div>
        </div>
        <h1 className="location">{city}</h1>

        <div className="country">{country}</div>
        <div className="update">
          <small>Last updated on:</small>
          <span className="date">date</span>
        </div>
        <div className="description">
          <div className="row">
            <div className="col-6">
              <div className="condition">
                <img src={icon} alt="" id="icon" />

                <span className="float-left temperature">
                  <span id="temperature">{Math.round(temperature)}</span>℃
                </span>
              </div>
              <div>{description}</div>
            </div>

            <div className="col-6">
              <ul className="conditions">
                <li>
                  <span className="type">Max temp: </span>
                  <span id="feels"> {Math.round(temp_max)}</span>℃
                </li>
                <li>
                  <span className="type">Min temp: </span>
                  <span id="feels"> {Math.round(temp_min)}</span>℃
                </li>
                <li>
                  <span className="type">Humidity: </span>
                  <span id="humidity">{humidity} </span>%
                </li>
                <li>
                  <span className="type">Wind speed: </span>
                  <span id="wind">{wind} </span>m/sec
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Krakow";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa4d98a1b55bfa6e99bb8f32851d7b49&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
