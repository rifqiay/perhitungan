const display = document.querySelector(".index");
const tambah = document.querySelector(".tambah");
const kurang = document.querySelector(".kurang");
const reset = document.querySelector(".reset");
let counter = 0;

tambah.addEventListener("click", () => {
  counter++;
  window.navigator.vibrate(1000);
  display.innerHTML = counter;
});

kurang.addEventListener("click", () => {
  counter--;
  display.innerHTML = counter;
});

reset.addEventListener("click", () => {
  counter *= 0;
  display.innerHTML = counter;
});
