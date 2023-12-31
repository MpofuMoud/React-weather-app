import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

import "./App.css";

export default function Weather(props) {
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
      <h1 className="location">{props.city}</h1>

      <div className="country">{props.country}</div>
      <div className="update">
        <small>Last updated on:</small>
        <span className="date">{props.date}</span>
      </div>
      <div className="description">
        <div className="row">
          <div className="col-6">
            <div className="condition">
              <img src="" alt="" id="icon" />
              {props.icon}
              <span className="float-left temperature">
                <span id="temperature">{props.temperature}</span>℃
              </span>
            </div>
          </div>

          <div className="col-6">
            <ul className="conditions">
              <li>
                <span className="type">Feels like: </span>
                <span id="feels"> {props.temperature}</span>℃
              </li>
              <li>
                <span className="type">Humidity: </span>
                <span id="humidity">{props.humidity} </span>%
              </li>
              <li>
                <span className="type">Wind speed: </span>
                <span id="wind">{props.windspeed} </span>m/sec
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
