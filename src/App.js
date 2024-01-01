import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weather-App">
      <div className="container">
        <Weather />

        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
