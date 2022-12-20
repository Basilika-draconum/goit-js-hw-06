const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map(ingredient => {
  const ingredientListItem = document.createElement('li');
  ingredientListItem.textContent = ingredient;
  ingredientListItem.classList.add('item');
  return ingredientListItem;
}); 
ingredientsList.append(...ingredientsArray);