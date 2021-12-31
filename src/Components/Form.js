import { useState } from "react";

const Form = (props) => {
  const [zip, setZip] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.changeZip(zip);

    setZip("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Zip Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
