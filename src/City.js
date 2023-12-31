import React from "react";
import Axios from "axios";

import "./App.css";

export default function City(props) {
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
    </div>
  );
}
