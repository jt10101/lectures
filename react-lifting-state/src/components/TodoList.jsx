import { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState(["1", "2", "3"]);

  return (
    <ul>
      {todos.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
};

export default TodoList;
