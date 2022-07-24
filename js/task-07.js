const rangeInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeInput.addEventListener(
  "input",
  (e) => (textEl.style.fontSize = `${e.target.value}px`)
);

// console.dir(output);
// console.log((output.style.fontSize = "24px"));
