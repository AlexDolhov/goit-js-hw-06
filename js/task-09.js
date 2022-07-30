function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
// const onBodyColor = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
