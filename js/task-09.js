function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
// const onBodyColor = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  colorText.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
