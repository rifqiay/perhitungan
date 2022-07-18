const display = document.querySelector(".index");
const tambah = document.querySelector(".tambah");
const kurang = document.querySelector(".kurang");
const reset = document.querySelector(".reset");
let counter = 0;

tambah.addEventListener("click", () => {
  counter++;
  window.navigator.vibrate(100);
  display.innerHTML = counter;
});

kurang.addEventListener("click", () => {
  counter--;
  window.navigator.vibrate(100);
  display.innerHTML = counter;
});

reset.addEventListener("click", () => {
  counter *= 0;
  display.innerHTML = counter;
});
