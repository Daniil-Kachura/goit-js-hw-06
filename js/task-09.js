// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const bodyElement = document.body;
const buttonElement = document.querySelector('.change-color');
const colorElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  colorElement.textContent = bodyElement.style.backgroundColor;
});