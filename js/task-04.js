const countValue = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let newValue = 0;

btnDecrement.addEventListener("click", () => {
  newValue -= 1;
  countValue.textContent = newValue;
});

btnIncrement.addEventListener("click", () => {
  newValue += 1;
  countValue.textContent = newValue;
});