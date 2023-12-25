import React from "react";
import "./App.css";

export default function Conditions(props) {
  return (
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
          <ul className="weather">
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
  );
}
