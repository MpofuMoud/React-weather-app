import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="header">
        <em>📅 Daily Forecast</em>
      </div>
      <div className="dailyForecast" id="dailyforecast"></div>

      <hr />
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="icon">Icon</div>
          <div className="forecastTemp">
            <span className="temp-min">12</span>{" "}
            <span className="tem-max">20 ℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
