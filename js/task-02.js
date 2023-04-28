const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientUl = document.querySelector('ul#ingredients');

const ollIngredient = ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = element;
  return ingredient;
});

ingredientUl.append(...ollIngredient);
