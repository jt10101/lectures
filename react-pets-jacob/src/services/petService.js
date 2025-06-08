// src/services/petService.js

const BASE_URL = `http://localhost:3000/pets`;
const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// console.log(await index());

export { index };
