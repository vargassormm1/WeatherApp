import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
const Weather = (props) => {
  return (
    <div className="infoCard">
      <div className="weatherCard">
        <WeatherInfo
          city={props.cityName}
          temp={props.temp}
          description={props.desc}
        />
        <WeatherIcon weather={props.icon} />
      </div>
      <button onClick={props.buttonClick}>Close</button>
    </div>
  );
};

export default Weather;
