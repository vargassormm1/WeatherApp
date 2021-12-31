import { useState } from "react";

const Form = (props) => {
  const [zip, setZip] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Zip Code"
        value={zip}
        onChange={(event) => setZip(event.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
