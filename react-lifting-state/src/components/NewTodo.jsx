import { useState } from "react";

const NewTodo = () => {
  const [todos, setTodo] = useState("???");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setTodo(event.target.value);
  };

  return (
    <>
      <label>
        New Todo: <input name="todo" value={todos} onChange={handleChange} />
      </label>
      <button>Create To Do</button>
    </>
  );
};

export default NewTodo;
