// src/App.jsx

import "./App.css";
import Button1 from "./components/example-1-normal-css/Button";
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        // Add all example components:
        <Button1 buttonText="Example 1" />
        //...
      }
    </div>
  );
};

export default App;
