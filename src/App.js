import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?appid=4f0e1ee4f076d6cb61814091eae86568&zip=07036&units=imperial"
    );
    const data = await response.json();

    setWeather(data);
  };

  console.log(weather);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <button onClick={getWeather}>Weather</button>
      <p>{weather.main.temp}</p>
    </div>
  );
}

export default App;
