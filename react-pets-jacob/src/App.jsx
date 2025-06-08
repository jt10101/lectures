// src/App.jsx
import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import { PetDetail } from "./components/PetDetail/PetDetail";
import { PetForm } from "./components/PetForm/PetForm";

const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petService.index();
        if (data.error) {
          throw new Error(data.error);
        }
        setPets(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? <PetForm /> : <PetDetail selected={selected} />}
    </>
  );
};

export default App;
