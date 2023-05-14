function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const changeBtnEl = document.querySelector('.change-color');
const indexColorEl = document.querySelector('.color');

changeBtnEl.addEventListener('click', changeColor);

function changeColor() {
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  indexColorEl.textContent = newColor;
}
