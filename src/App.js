import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Weather from "./Weather";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="weather-App">
      <div className="container">
        <Weather city="Krakow" />
      </div>
      <Footer />
    </div>
  );
}
