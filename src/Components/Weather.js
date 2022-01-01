import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
const Weather = (props) => {
  return (
    <div className="weatherCard">
      <WeatherInfo
        city={props.cityName}
        temp={props.temp}
        description={props.desc}
        onClick={props.buttonClick}
      />
      <WeatherIcon weather={props.desc} />
    </div>
  );
};

export default Weather;
