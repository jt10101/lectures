// src/components/PetList/PetList.jsx

const PetList = (props) => {
  //   console.log(props.pets);

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!props.pets.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {props.pets.map((pet) => (
              <li
                key={pet._id}
                style={{ cursor: "pointer", color: "#646CFF" }}
                onClick={() => props.handleSelect(pet)}
              >
                {pet.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Our new button! */}
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? "Close Form" : "New Pet"}
      </button>
    </div>
  );
};

export default PetList;
