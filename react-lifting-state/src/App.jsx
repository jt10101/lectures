// src/App.jsx
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App = () => {
  return (
    <>
      <NewTodo />
      <TodoList />
    </>
  );
};

export default App;
