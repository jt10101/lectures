import { useState } from "react";

export const MyName = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  //   const handleFirstName = (event) => {
  //     setPerson[firstName](event.target.value);
  //   };

  const handleFirstName = (event) => {
    const key = "firstName";
    setPerson({ ...person, [key]: event.target.value });
  };

  const handleLastName = (event) => {
    const key = "lastName";
    setPerson({ ...person, [key]: event.target.value });
  };

  return (
    <>
      <h2>{/* Hi {firstName} {lastName} */}</h2>
      <h2>
        Hello {person.firstName} {person.lastName}
      </h2>
      <label>
        First Name:
        <input
          id="xxx"
          type="text"
          name="firstName"
          onChange={handleFirstName}
        />
      </label>
      <h2></h2>
      <label>
        Last Name:
        <input
          id="xxx"
          type="text"
          name="firstName"
          onChange={handleLastName}
        />
      </label>
    </>
  );
};

export default MyName;
