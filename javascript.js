// Assigns buttons 
const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName('button dark');
const clearButton = document.getElementById("clear");

// Assigns calculator input and logic
var firstNumber;
var secondNumber;
let operator;
var buttonClickCount = 0

// Establishes operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Handles what happens when the clear button is pressed
clearButton.addEventListener('click', function () {
    display.textContent = 0;
    buttonClickCount = 0;
});

// Handles what happens when the numbers (0-9) and decimal key are pressed
for (i of numberButtons) {
    i.addEventListener('click', function () {
        console.log(this);
        buttonClickCount += 1;

        // Keeps placeholder 0 if first key press was a decimal
        if (buttonClickCount == 1 && this.textContent == ".") {
            display.textContent += this.textContent;

            // The first key press replaces placeholder zero
        } else if (buttonClickCount == 1) {
            display.textContent = this.textContent;

            // Each subsequent key press is added onto the display
        } else if (buttonClickCount > 1) {
            display.textContent += this.textContent;

        }
    });
};













