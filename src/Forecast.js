import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./forecast.css";

export default function Forecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "b93bfbo44bd8a88678e0t635d05036d5";
  let city = "Krakow";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

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
