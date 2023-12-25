import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <a
        href="https://github.com/MpofuMoud/my-weather-app-project"
        target="_blank"
        rel="noreferrer"
      >
        open source code by Moud Mpofu
      </a>
      ,Hosted on
      <a
        href="https://imaginative-bavarois-a5b0e8.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
