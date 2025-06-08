// async function getData() {

const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(typeof json);
  } catch (error) {
    console.error(error.message);
  }
};

getData();
