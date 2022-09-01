const boxesContainerEl = document.querySelector("#boxes");
const numberInputEl = document.querySelector("#controls input");
const createBoxBtnEl = document.querySelector("[data-create]");
const deleteBoxBtnEl = document.querySelector("[data-destroy]");

createBoxBtnEl.addEventListener("click", onBoxCreate);
deleteBoxBtnEl.addEventListener("click", destroyBoxes);

function onBoxCreate() {
  const createdBoxes = getNumberOfBoxes();

  if (numberInputEl.valueAsNumber)
    createBoxes(numberInputEl.valueAsNumber, createdBoxes);
}

function createBoxes(amount, startNumber) {
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + (i + startNumber) * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px"></div>`;
  }

  boxesContainerEl.insertAdjacentHTML("beforeend", markup);
}

function getNumberOfBoxes() {
  return boxesContainerEl.querySelectorAll("div").length;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
  numberInputEl.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}