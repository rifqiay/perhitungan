const display = document.querySelector(".index");
const tambah = document.querySelector(".tambah");
const kurang = document.querySelector(".kurang");
const reset = document.querySelector(".reset");
let input = document.querySelector(".input");
const setTarget = document.querySelector(".setTarget");
let displayTarget = document.querySelector(".display-target");
let counter = 0;
let setCounter;

function add() {
  counter++;
  window.navigator.vibrate(100);
  display.innerHTML = counter;
}

const min = () => {
  if (counter > 0) {
    counter--;
    window.navigator.vibrate(100);
    display.innerHTML = counter;
  }
};

tambah.addEventListener("click", () => {
  if (counter + 1 == setCounter) {
    display.innerHTML = counter + 1;
    window.navigator.vibrate(5000);
    return;
  }
  add();
});

kurang.addEventListener("click", () => {
  min();
});

reset.addEventListener("click", () => {
  counter *= 0;
  display.innerHTML = counter;
  displayTarget.innerHTML = "";
  window.navigator.vibrate(0);
  setCounter = null;
});

setTarget.addEventListener("click", () => {
  let getInput = input.value;
  setCounter = getInput;
  input.value = "";
  displayTarget.innerHTML = setCounter;
});
