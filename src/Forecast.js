import React from "react";

import "./App.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <p>
        <em>
          Clear conditions from 00:00 - 03:00 with partly cloudy conditions
          expected at 03:00
        </em>
      </p>
      <div className="header">
        <em>📅 Daily Forecast</em>
      </div>
      <div className="dailyForecast" id="dailyforecast"></div>

      <hr />
    </div>
  );
}
