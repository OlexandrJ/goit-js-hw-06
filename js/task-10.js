const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const initialSize = 30;
  const step = 10;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize + i * step}px`;
    box.style.height = `${initialSize + i * step}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});