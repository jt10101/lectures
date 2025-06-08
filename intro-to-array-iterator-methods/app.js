// const numbers = [1, 2, 3];
// console.log("before", numbers);
// const result = numbers.push(17);
// console.log("push", result);
// console.log("after", numbers);

// console.log("before 2", numbers);
// const newNumbers = numbers.concat(42);
// console.log("concat", newNumbers);
// console.log("after 2", numbers);

const fruits = ["apple", "banana", "orange"];

//? Today I ate XXX -> useful function (inputs + output) -> repeat -> loop

const eat = (fruits) => {
  const result = [];
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const item = "Today I ate " + fruit;
    result.push(item);
  }
  return result;
};

const myMap = (anArray, func) => {
  const result = [];
  for (let i = 0; i < anArray.length; i++) {
    const item = anArray[i];
    //  const item = "Today I ate " + fruit;
    const newItem = func(item);
    result.push(newItem);
  }
  return result;
};

const result = eat(["cherry", "durian"]);
console.log("answer", result.join("--"));
console.log("answer2", result.join("\n"));
const func = (fruit, index) => "Monday I ate " + index + " " + fruit;
console.log(fruits.map(func));
console.log(
  "eat + map",
  fruits.map(func)
  //? fruits.map((fruit) => "Monday I ate " + fruit)
);
console.log("mpMap", myMap(fruits, func));

//* Show me -> ["cherry", "durian"] -> ["C", "D"]

const firstLetter = (fruits) => {
  const result = [];
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const item = fruit[0].toUpperCase();
    result.push(item);
  }
  return result;
};
console.log(firstLetter(fruits));
console.log(
  "upper map",
  fruits.map((fruit) => fruit[0].toUpperCase())
);

console.log(
  fruits.map((x) => {
    return x.length;
  })
);

const isSmelly = (fruit) => {
  if (fruit === "durian" || fruit === "kiwi") {
    return true;
  }
  // return false;
};

console.log(["durian", "apple", "banana", "kiwi", "cherry"].map(isSmelly));

const arr = [true, false, true, false, false, true];
console.log(arr.filter((x) => x));

const nums = [100, 2, 5, 0, 42, 99];
const greaterThan50 = (number) => {
  if (number > 50) {
    return true;
  } else {
    return false;
  }
};

console.log(nums.filter(greaterThan50));
console.log(nums.filter(() => true));
console.log(nums.filter(() => {}));
console.log(nums.filter((x) => x));
console.log(nums.filter((item) => item > 40));

const myFilter = (anArray, func) => {
  const result = [];
  for (let i = 0; i < anArray.length; i++) {
    const item = anArray[i];
    // if (item > 50) {
    if (func(item)) {
      result.push(item);
    }
  }
  return result;
};

const numbers = [1, 2, 3];

const addAll = (anArray) => {
  let total = 0;
  for (let i = 0; i < anArray.length; i++) {
    const item = anArray[i];
    total += item;
  }

  return total;
};

const myReduce = (anArray, callback, init) => {
  let result = init;
  for (let i = 0; i < anArray.length; i++) {
    const item = anArray[i];
    result = callback(result, item);
  }

  return result;
};

const callback = (previousTotal, item) => {
  return previousTotal + item;
};
const init = 0;
const total = numbers.reduce(callback, init);
console.log(total);
console.log(numbers.reduce((acc, item) => acc + item, 0));

const sumNumbers = (numbers) =>
  numbers.filter((x) => x > 0).reduce((acc, item) => acc + item, 0);

// const sumPositive = chain(
//   filter((x) => x > 0),
//   reduce((acc, item) => acc + item)
// );
// console.log(sumPositive(numbers));
