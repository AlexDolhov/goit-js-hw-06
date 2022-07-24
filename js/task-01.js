// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const itemsByClass = document.querySelectorAll(".item");
console.log("Number of categories:", itemsByClass.length);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
itemsByClass.forEach((category) => {
  console.log("");
  const categoryHeader = category.querySelector("h2");
  console.log("Category:", categoryHeader.textContent);

  const categoryItems = category.querySelectorAll(".item li");
  console.log("Elements:", categoryItems.length);
});
