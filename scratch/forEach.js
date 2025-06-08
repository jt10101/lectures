/* https://nodejs.org/api/assert.html */
import { strict as assert } from "node:assert"; // assert.strictEqual(x, y) x = function | v = intended outcome | output is true or false
// let sumTwoNum = (x, y) => {
//   return x + y;
// };
// // console.log(sumTwoNum(2, 4));
// assert.strictEqual(sumTwoNum(2, 4), 10);
/* Python Tutor https://nodejs.org/api/assert.html */

//? arrays are denoted by [] -> sqaure
//*             0   1   2

const change = (p) => {
  p[0] = p[0] + 10;
  console.log("inside", p); //? 17
};

let x = [7];
console.log("call", change(x)); //? call undefined
console.log("outside", x); //? 7

// const numbers = [2, 4, 18];
// change(numbers);
// console.log(numbers); //? [42, 4, 18]
// const another = numbers;
// numbers[0] = 42;
// another[2] = 88;
// console.log(another); //?  [42, 4, 88]

// console.log(numbers[numbers.length - 1]);

//? want to know what is the total sum of all the numbers

// const calcTotal = (numbers) => {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

// // let total = 0;
// // total += numbers[0];
// // total += numbers[1];
// // total += numbers[2];
// // total += numbers[3];

// // return total;
// const t = calcTotal(numbers);
// console.log("totel", t);

// const a = 2;
// let b = 4;
// const c = 18;

// console.log(a, b, c);
// //? change 4 to 7
// b = 7;
// console.log(a, b, c);

// console.log(numbers);
// numbers[1] += 10;
// console.log(numbers);
// console.log("just 1", numbers[0]);

// const movies = ["Barbie", "Interstellar", "Get Out", "ThunderBolts"];
// console.log(movies);
// console.log(movies.length);

// movies.push("Parasite", "Dune");
// console.log(movies);

// movies.pop(); //* removes Dune
// const removedMovie = movies.pop(); //* removes Parasite
// console.log(movies);

// movies.push("Coco");
// console.log(movies);

// for (let i = 0; i < movies.length; i++) {
//   let movie = movies[i];
//   movie = "Best " + movie;
//   // console.log("Movie " + (i + 1) + " is " + movie);
//   console.log("Movie is " + movie);
// }

// console.log("------");
// for (const movie of movies) {
//   // console.log(movie);
//   const s = "Best " + movie;
//   console.log("Movie is " + s);
// }
// console.log("movies after", movies);

// console.log(">>>>>>>");
// const A = (movie) => {
//   console.log("mmm is " + movie);
// };
// movies.forEach(A);

// const gatherMovies = (movies) => {
//   let str = "";

//   for (let i = 0; i < movies.length; i++) {
//     // console.log("Movie " + (i + 1) + " is " + movies[i]);
//     str += "Movie " + (i + 1) + " is " + movies[i] + "\n";
//   }

//   return str; // [A, B, C, D]
// };

// const result = gatherMovies(movies);
// console.log("result", result);
// ("Movie 1 is Barbie");
// console.log("Movie " + 1 + " is " + movies[0]);
// console.log("Movie " + 2 + " is " + movies[1]);
// console.log("Movie " + 3 + " is " + movies[2]);
// // ("Movie 2 is InterStella");
