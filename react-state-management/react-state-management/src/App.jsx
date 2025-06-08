import { useState } from "react";

const one = [{ name: "Meow", breed: "Ragdoll" }];

const ExampleComponent = () => {
  const [cats, setCats] = useState([
    { name: "Myshka", breed: "Ragdoll" },
    { name: "Malta", breed: "Turkish Angora" },
  ]);

  const addCat = (newCat) => {
    // const x = cats.push(newCat);
    // console.log(cats);
    // setCats(x);
    setCats(one);
  };

  console.log("cats");

  return (
    <>
      <button onClick={() => addCat({ name: "Kira", breed: "Ragamuffin" })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleComponent;
