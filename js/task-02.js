const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);

// Варіант №1
const ingredientsMarkup = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = ingredient;

  ingredientItem.classList.add("item");
  // console.log(ingredientItem);

  return ingredientItem;
});

ingredientsList.append(...ingredientsMarkup);

// Варіант №2 (набагато простіше)

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// ingredientsList.insertAdjacentHTML("beforeend", markup);
