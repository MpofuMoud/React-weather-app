import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import City from "./City";
import Conditions from "./conditions";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weather-App">
      <div className="container">
        <City city="Krakow" country="Poland" date="30 Nov 2023" />
        <Conditions temperature={18} humidity={64} windspeed={2} />

        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
