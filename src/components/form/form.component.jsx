import React, { useState } from "react";

function Form({ setUser }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    setUser(value);
  };

  return (
    <form onSubmit={(e) => login(e)}>
      <label>
        Please enter your name:
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </label>
      <input type="submit" value="OK" />
    </form>
  );
}

export default Form;
