/** Container element */
const container = document.querySelector(".container");
const finalContainer = document.querySelector(".container.none");
// document.addEventListener("DOMContentLoaded", () => {
//   container.classList.toggle("scale");
// });

/** Title container element */
const title = document.querySelector(".title");
/** Yes button */
const yesButton = document.querySelector(".yes");
/** No button */
const noButton = document.querySelector(".no"); //{
// top: yesButtonTop,
// right: yesButtonRight,
// bottom: yesButtonBottom,
// left: yesButtonLeft,
//} = yesButton.getBoundingClientRect();
const noButtonWidth = noButton.clientWidth;
const noButtonHeight = noButton.clientHeight;
let moveCount = 0;

/**
 * Generates a random between a minimum and maximum value
 * @param {Number} min Minimum threshold
 * @param {Number} max Maximum threshold
 * @param {Number} outOfBoundsMin Minimum out of bounds threshold
 * @param {Number} outOfBoundsMax Maximum out of bounds threshold
 * @returns {Number}
 */
const randomNumberBetween = (
  min,
  max,
  outOfBoundsMin = 0,
  outOfBoundsMax = 0
) => {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (random > outOfBoundsMin && random < outOfBoundsMax)
    return randomNumberBetween(min, max, outOfBoundsMin, outOfBoundsMax);

  return random;
};

/** Updates yes button text according to the move count */
const yesText = () => {
  switch (moveCount) {
    case 1:
      return "Oop";
    case 2:
      return "Too slow";
    case 3:
      return "Missed again";
    case 4:
      return "One more try...";
    case 5:
      return "Hahaha";
    case 6:
      return "Dang man...";
    case 7:
      return "This is sad";
    case 8:
      return "Okay just one more";
    case 9:
      return "GOTCHA! Okay for real this time";
    default:
      return "Yes";
  }
};

/** Increments move count and updates yes button text */
const updateYes = () => {
  moveCount++;
  yesButton.innerHTML = yesText();
  if (moveCount >= 10) {
    yesButton.disabled = false;
    noButton.innerHTML = "You're a good sport";
  }
};

const moveButton = () => {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  const { x, y } = yesButton.getBoundingClientRect();

  if (noButton.style.position !== "absolute")
    noButton.style.position = "absolute";
  noButton.style.left = `${randomNumberBetween(
    0,
    screenWidth - noButtonWidth,
    x,
    x + yesButton.clientWidth
  )}px`;
  noButton.style.top = `${randomNumberBetween(
    0,
    screenHeight - noButtonHeight,
    y,
    y + yesButton.clientHeight
  )}px`;

  updateYes();
};

const finish = () => {
  container.classList.toggle("none");
  // setTimeout(() => {
  finalContainer.classList.toggle("none");
  // noButton.style.display = "none";
  // yesButton.style.display = "none";
  // title.innerHTML = "Happy Valentine's Day!";
  // const heart = document.createElement("div");
  // heart.classList.add("heart");
  // heart.innerHTML = "❤️";
  // container.appendChild(heart);
  finalContainer.classList.toggle("bounce");
  // }, 1000);
};

yesButton.addEventListener("click", finish);
noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("click", moveButton);
noButton.addEventListener("touch", moveButton);
