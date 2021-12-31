import { useState, useEffect, useCallback } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

function App() {
  const [weather, setWeather] = useState({});
  const [zip, setZip] = useState("");
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=4f0e1ee4f076d6cb61814091eae86568&zip=${zip}&units=imperial`;

  const onZipSubmit = (data) => {
    setZip(data);
  };

  const onButtonClick = () => {
    setWeather({});
  };

  const getWeather = useCallback(async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const { weather, main, name } = data;

    setWeather({ weather, main, name });
  }, [API_URL]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  console.log(weather);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      {weather.name === undefined ? (
        <Form changeZip={onZipSubmit} />
      ) : (
        <Weather
          cityName={weather.name}
          temp={weather.main.temp}
          desc={weather.weather[0].desciption}
          buttonClick={onButtonClick}
        />
      )}
    </div>
  );
}

export default App;
