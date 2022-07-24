const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", () => {
  refs.input.value
    ? (refs.nameLabel.textContent = refs.input.value)
    : (refs.nameLabel.textContent = "Anonymous");
});
