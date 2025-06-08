const likeButtonElement = document.querySelector("#like-button");
const dislikeButtonElement = document.querySelector("#dislike-button");
// const likeCounterElement = document.querySelector("#like-counter");
// const dislikeCounterElement = document.querySelector("#dislike-counter");

// let likeCounter = 0;
// let dislikeCounter = 0;
// likeCounterElement.textContent = likeCounter;
// dislikeCounterElement.textContent = dislikeCounter;

likeButtonElement.addEventListener("click", () => {
  alert("You Liked This!");
  //   likeCounter++;
  //   likeCounterElement.textContent = likeCounter;
  //   return likeCounter;
});
dislikeButtonElement.addEventListener("click", () => {
  alert("We'll do better!");
  //   dislikeCounter++;
  //   dislikeCounterElement.textContent = dislikeCounter;
  //   return dislikeCounter;
});

const commentButtonElement = document.querySelector("#comment-button");
const inputBoxElement = document.querySelector("input");
const commentListElement = document.querySelector("ul");

commentButtonElement.addEventListener("click", () => {
  const commentElement = document.createElement("li");
  commentElement.textContent = inputBoxElement.value;
  commentListElement.appendChild(commentElement);
});
