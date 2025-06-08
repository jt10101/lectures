// src/App.jsx

import debug from "debug";
import ControlledForm from "./components/ControlledForm";
import MyName from "./components/myName";
import { FormSubmit } from "./components/FormSubmit";
//* do in every file -> need to come up with a nane -> "forms:App"
//* use a name for the whole app -> forms
//* use the directory for the other part
const log = debug("forms:App");
log("Hello World");
log("Hello Jacob");

//* do this once -> "[App]:*
localStorage.debug = "forms:*";

const App = () => {
  return (
    <>
      <ControlledForm />
      <FormSubmit />
      <MyName />
    </>
  );
};

export default App;
