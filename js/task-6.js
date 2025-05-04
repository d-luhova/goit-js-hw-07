const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) return;
  createBoxes(amount);
  input.value = '';
});
function createBoxes(amount) {
  boxes.innerHTML = '';
  const newBoxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
    size += 10;
  }
  boxes.append(...newBoxes);
};
destroyButton.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    boxes.innerHTML = '';
}