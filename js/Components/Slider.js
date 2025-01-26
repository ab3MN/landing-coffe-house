const BUTTON__LEFT = document.querySelector("#button__left");
const BUTTON__RIGHT = document.querySelector("#button__right");
const SLIDER = document.querySelector("#slider");

const ITEM__RIGHT = document.querySelector("#item__right");
const ITEM__LEFT = document.querySelector("#item__left");
const ITEM__ACTIVE = document.querySelector("#item__active");

const RIGHT__CONTROLLER = document.querySelector("#right__controller");
const LEFT__CONTROLLER = document.querySelector("#left__controller");
const ACTIVE__CONTROLLER = document.querySelector("#active__controller");

let pause = false;
let counter = 0;
const onPauseInterval = () => (pause = true);
const onResumeInterval = () => (pause = false);

const startSlider = setInterval(() => {
  if (pause) {
    return;
  }
  counter++;
  if (counter === 5) {
    moveRight();
    counter = 0;
  }
}, 1000);

/* ==================== MOVE LEFT ==================== */
function moveLeft() {
  counter = 0;

  SLIDER.classList.add("transition__left");
  removeControllerClass(ITEM__ACTIVE.firstElementChild, "active__controller");
  removeControllerClass(ITEM__RIGHT.firstElementChild, "active__controller");

  addControllerClass(ITEM__LEFT.firstElementChild, "active__controller");
}

BUTTON__LEFT.addEventListener("click", moveLeft);

/* ==================== MOVE RIGHT ==================== */
function moveRight() {
  SLIDER.classList.add("transition__right");
  counter = 0;
  removeControllerClass(ITEM__LEFT.firstElementChild, "active__controller");
  removeControllerClass(ITEM__ACTIVE.firstElementChild, "active__controller");
  addControllerClass(ITEM__RIGHT.firstElementChild, "active__controller");
}
BUTTON__RIGHT.addEventListener("click", moveRight);

SLIDER.addEventListener("animationend", (e) => {
  const left = ITEM__LEFT.innerHTML;
  const right = ITEM__RIGHT.innerHTML;
  const active = ITEM__ACTIVE.innerHTML;

  if (
    e.animationName === "transition__right" ||
    e.animationName === "mobile__transition__right"
  ) {
    ITEM__LEFT.innerHTML = active;
    ITEM__ACTIVE.innerHTML = right;
    ITEM__RIGHT.innerHTML = left;

    SLIDER.classList.remove("transition__right");
  }
  if (
    e.animationName === "transition__left" ||
    e.animationName === "mobile__transition__left"
  ) {
    ITEM__ACTIVE.innerHTML = left;
    ITEM__LEFT.innerHTML = right;
    ITEM__RIGHT.innerHTML = active;

    SLIDER.classList.remove("transition__left");
  }
});
/* ==================== CHANGE CONTROL COLOR ==================== */

const addControllerClass = (el, _class) => {
  const status = el.dataset.active;
  switch (status) {
    case "active":
      return ACTIVE__CONTROLLER.classList.add(_class);
    case "right":
      return RIGHT__CONTROLLER.classList.add(_class);
    case "left":
      LEFT__CONTROLLER.classList.add(_class);
      return;
    default:
      return;
  }
};

const removeControllerClass = (el, _class) => {
  const status = el.dataset.active;
  switch (status) {
    case "active":
      return ACTIVE__CONTROLLER.classList.remove(_class);
    case "right":
      return RIGHT__CONTROLLER.classList.remove(_class);
    case "left":
      LEFT__CONTROLLER.classList.remove(_class);
      return;
    default:
      return;
  }
};

ITEM__ACTIVE.addEventListener("mouseover", () => {
  addControllerClass(ITEM__ACTIVE.firstElementChild, "paused");
  onPauseInterval();
});

ITEM__ACTIVE.addEventListener("mouseout", () => {
  removeControllerClass(ITEM__ACTIVE.firstElementChild, "paused");
  onResumeInterval();
});
/* ==================== TOUCH COLOR ==================== */

let currentPosition = 0;

ITEM__ACTIVE.addEventListener("touchstart", (e) => {
  e.preventDefault();
  addControllerClass(ITEM__ACTIVE.firstElementChild, "paused");
  currentPosition = e.changedTouches[0].pageX;
});
ITEM__ACTIVE.addEventListener("touchend", (e) => {
  e.preventDefault();
  removeControllerClass(ITEM__ACTIVE.firstElementChild, "paused");
  const position = e.changedTouches[0].pageX;
  const diff = currentPosition - position;
  diff > 0 ? moveRight() : moveLeft();
});
