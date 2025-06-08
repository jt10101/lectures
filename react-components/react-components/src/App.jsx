//* Component name -> Start with Capital
//* Most React Components are Functional Components return JSX

import FounderListItem from "./components/FounderListItem/FounderListItem";
import Navbar from "./components/Navbar/Navbar";

// Navbar();

const App = () => {
  // const result = [
  //   <FounderListItem name="Elizabeth" title="CEO" />,
  //   <FounderListItem name="Sam" title="CFO" />,
  //   <FounderListItem name="Matt" title="CMO" />,
  // ];

  // src/App.jsx
  const founders = [
    {
      name: "Elizabeth Holmes",
      title: "CEO",
      credential: "MBA from SuperLegit University",
      id: 1,
    },
    {
      name: "Sam Bankman-Fried",
      title: "CFO",
      credential: "CPA from TotallyReal State",
      id: 2,
    },
    {
      name: "Matt Damon",
      title: "CMO",
      credential: "Was in that movie you saw",
      id: 3,
    },
  ];
  // founders.map((name, title) => <FounderListItem name=founders.name title=founders.title />)
  const result = [];

  // for (let i = 0; i < founders.length; i++) {
  //   result.push(
  //     <FounderListItem
  //       name= founders[i].name
  //       title= founders[i].title
  //     />
  //   );
  // }

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        {" "}
        {founders.map((founder) => (
          <FounderListItem
            key={founder.id}
            name={founder.name}
            title={founder.title}
            credential={founder.credential}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
