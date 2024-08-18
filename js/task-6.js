function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBox = document.querySelector('#boxes');
const inputField = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
function createBoxes(amount) {
  let newBox = document.createElement('div');
  newBox.style.height = '30px';
  newBox.style.width = '30px';
  newBox.style.backgroundColor = getRandomHexColor();
  const addBox = divBox.append(newBox);
};
createBtn.addEventListener('click', createBoxes);











