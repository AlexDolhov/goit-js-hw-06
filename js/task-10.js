function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  amountInputEl: document.querySelector("#controls input"),
  buttonCreateEl: document.querySelector("button[data-create]"),
  buttonDesrtoyEl: document.querySelector("button[data-destroy]"),
  addInEl: document.querySelector("#boxes"),
};
// console.dir(refs.amountInput);

refs.amountInputEl.addEventListener("change", (event) => {
  let amount = event.currentTarget.value;
  refs.buttonCreateEl.addEventListener("click", () => {
    createBoxes(amount);
  });
});

refs.buttonDesrtoyEl.addEventListener("click", () => {
  refs.addInEl.innerHTML = "";
});

function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    const boxEl = document.createElement("div");
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    refs.addInEl.append(boxEl);
  }
}
