const Weather = (props) => {
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
    <div className="weatherCard">
      <h1>{props.cityName}</h1>
      <h3>{today}</h3>
      <h3>{temp}&#176;</h3>
      <p>{props.desc}</p>
      <button onClick={props.buttonClick}>Close</button>
    </div>
  );
};

export default Weather;
