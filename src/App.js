import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weather-App">
      <div className="container">
        <Weather
          city="Krakow"
          country="Poland"
          date="30 Nov 2023"
          temperature={18}
          humidity={64}
          windspeed={4}
        />

        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
