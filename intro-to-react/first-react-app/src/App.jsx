// src/App.jsx
const testing = () => {
  let x;
  x = 5;
  return x;
};

const App = () => {
  const todo = { text: "A brand new task", done: true };
  // add the todos array below the existing todo object.
  const todos = [
    { text: "Learn JavaScript", done: true },
    { text: "Learn JSX", done: false },
    { text: "Learn HTML", done: true },
    { text: "Learn CSS", done: true },
    { text: "Master React", done: false },
  ];

  const todoresult = [];

  for (let i = 0; i < todos.length; i++) {
    // if (todo[i].done ? `Completed - ${todos[i].text}` : ${todos[i].text})
    let text = "";
    if (todos[i].done) {
      text = `Completed - ${todos[i].text}`;
    } else {
      text = todos[i].text;
    }
    const item = <li>{text}</li>;
    todoresult.push(item);
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <h2>Hello universe!</h2>
      <p></p>
      <h1>{testing() + 1000}</h1>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>
      <h2>Conditional Rendering</h2>
      {/* {todoresult} */}
      {todos.map((todos) => (
        <li key={todo.text}>
          {todos.done ? `Completed - ${todos.text}` : todos.text}
        </li>
      ))}
    </>
  );
};
export default App;
