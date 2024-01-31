const display = document.getElementByClassName(".counter-display");
const increment = document.getElementByClassName(".increment");


increment.addEventListener('click', increment);
increment.addEventListener('clicl', reset);

const value = 0;

function increment() {
    value += 1;
    display.textContent.value
}

function reset() {
    value = 0;
    display.textContent.value
}