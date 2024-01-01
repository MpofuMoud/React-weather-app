import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <a
        href="https://github.com/MpofuMoud/React-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open source code by Moud Mpofu
      </a>
      , Hosted on
      <a
        href="https://luxury-kulfi-36e999.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
