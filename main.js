const square = document.querySelector(".square");
const squareTwo = document.querySelector(".squareTwo");
const squareThree = document.querySelector(".squareThree");

const btnHideSquare = document.querySelector(".btn-hide-square");

const btnHideSquareTwo = document.querySelector(".btn-hide-square-Two");

const btnHideSquareThree = document.querySelector(".btn-hide-square-Three");

btnHideSquare.addEventListener("click", () => {square.classList.toggle("hidden");});
btnHideSquare.addEventListener("click", () => {squareTwo.classList.toggle("hidden");});
btnHideSquare.addEventListener("click", () => {squareThree.classList.toggle("hidden");});