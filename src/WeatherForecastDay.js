import React from "react";
import "./forecast.css";

export default function WeatherForecastDay(props) {
  let icons = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>

      <img src={icons} alt="" id="icon" size={52} />

      <div className="forecastTemp">
        <span className="temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>{" "}
        <span className="temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
      </div>
    </div>
  );
}
