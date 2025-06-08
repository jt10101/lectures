console.log("intro to dom");
const titleElement = document.querySelector("#main-title");
const paragraphElement = document.querySelector(".cool");
const pElement = document.querySelector("p");
const hElement = document.querySelector("h");

// const pElement = document.querySelector();

// console.dir(paragraphElement);
// console.log(paragraphElement);
// console.log(paragraphElement.innerText);
// console.log(titleElement.innerText);
paragraphElement.textContent = "Today is Wednesday";
// paragraphElement.style.color = "blue";
pElement.style.color = "blue";

// console.log(document.body.children);

// titleElement.style.color = "blue";

const h2Element = document.createElement("h2");
console.log(h2Element.innerText);
const bodyElement = document.querySelector("body");
bodyElement.appendChild(h2Element);
h2Element.textContent = "Time for Lunch";

// const liElements = document.querySelectorAll("li");
const liElements = [...document.querySelectorAll("li")];
const ulElements = document.querySelector("ul");
// console.log(liElements[0]);

// for (let i = 0; i < liElements.length; i++) {
//   liElements[i].style.fontSize = "30px";
// }

// liElements[0].style.fontSize = "30px";
// liElements[1].style.fontSize = "20px";
// liElements[2].style.fontSize = "10px";

liElements.map((a) => (a.style.fontSize = "30px"));

// let uploadImg = prompt("What image would you like to upload?: ");
const imgElement = document.querySelector("img");

const buttonElement = document.querySelector("button");
if (buttonElement.hasAttribute("disabled") === true) {
  buttonElement.removeAttribute("disabled");
}

buttonElement.classList.replace("btn", "action-button");
console.log(buttonElement.classList.getClass);
