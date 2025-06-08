/* https://nodejs.org/api/assert.html */
import { strict as assert } from "node:assert"; // assert.strictEqual(x, y) x = function | v = intended outcome | output is true or false
// let sumTwoNum = (x, y) => {
//   return x + y;
// };
// // // console.log(sumTwoNum(2, 4));
// // assert.strictEqual(sumTwoNum(2, 4), 10);
// /* Python Tutor https://nodejs.org/api/assert.html */

// // console.log(Math.PI);

// // const games = [x];
// // const x = () => {
// //   return "something";
// // };

// // console.log(games[0]());

// const what2 = () => () => () => "what-f short";
// console.log(what2()()());

const nameList = [];
nameList = ["Jacob", "Jonathan", "Joanne", "Jansen"];

const gameDeckShuffle = () => {
  // This function shuffles the deck of cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // https://javascript.info/task/shuffle
  }
  console.log(shuffle(nameList));
};
