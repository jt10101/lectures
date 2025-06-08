// src/App.jsx

import { useState } from "react";
import Button from "./Button";
import { ModeContext } from "./ModeContext";

function App() {
  const [mode, setMode] = useState("dark");
  //* step 2 -> wrap the tree (contains the Components that needs the value) with the context provider
  return (
    <>
      <ModeContext.Provider value={{ mode, setMode }}>
        <Bookshelf mode={mode} />
        <Button />
      </ModeContext.Provider>
    </>
  );
}

function Bookshelf({ mode }) {
  return <NewBookForm mode={mode} />;
}

function NewBookForm({ mode }) {
  return <Button />;
}

export default App;
