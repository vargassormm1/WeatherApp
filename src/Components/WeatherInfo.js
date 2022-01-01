const WeatherInfo = (props) => {
  const temp = Math.floor(props.temp);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "/" + dd;

  return (
    <div className="weatherInfo">
      <h1>{props.city}</h1>
      <p>{today}</p>
      <h3>{temp}&#176;</h3>
      <h2>{props.description}</h2>
      <button onClick={props.onClick}>Close</button>
    </div>
  );
};

export default WeatherInfo;
