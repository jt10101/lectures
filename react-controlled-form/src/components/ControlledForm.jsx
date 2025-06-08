import { useState } from "react";

export const ControlledForm = () => {
  const [city, setCity] = useState("City");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setCity(event.target.value);
  };

  return (
    <>
      <h2>Controlled Form</h2>
      <label>
        City:
        <input
          id="xxx"
          type="text"
          name="cityInput"
          //   value="Tokyo"
          value={city}
          onChange={handleChange}
        />
      </label>

      <button>Click</button>
    </>
  );
};

export default ControlledForm;
