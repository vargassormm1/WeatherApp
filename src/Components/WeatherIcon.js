const WeatherIcon = (props) => {
  const icon = props.weather;
  return (
    <div className="weatherIcon">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather Icon"
      />
    </div>
  );
};
export default WeatherIcon;
