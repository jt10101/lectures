// src/App.jsx

import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import PokemonList from "./components/PokemonList/PokemonList";
import HomePage from "./components/HomePage/HomePage";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/new" element={<PokemonForm />} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
      </Routes>
    </>
  );
};

export default App;
