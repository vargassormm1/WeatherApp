const Weather = (props) => {
  return (
    <div>
      <h1>{props.cityName}</h1>
      <h3>{props.temp}</h3>
      <p>{props.desc}</p>
      <button onClick={props.buttonClick}>Close</button>
    </div>
  );
};

export default Weather;
