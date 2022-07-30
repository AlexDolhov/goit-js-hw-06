const minSymbolsValue = document.querySelector('input[data-length="6"]');
const inputValueEl = document.querySelector("#validation-input");

inputValueEl.addEventListener("blur", () => {
  // Number(minSymbolsValue.dataset.length) === inputValueEl.value.length
  minSymbolsValue.dataset.length === inputValueEl.value.length.toString()
    ? inputValueEl.classList.add("valid") &
      inputValueEl.classList.remove("invalid")
    : inputValueEl.classList.remove("valid") &
      inputValueEl.classList.add("invalid");
});
