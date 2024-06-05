// Display variables
const display = document.getElementById("display");
const displayContainer = document.getElementById("displayContainer");

// Button variables
const numberButtons = document.getElementsByClassName('button dark');
const clearButton = document.getElementById("clear");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const equalButton = document.getElementById("equal");
const operatorButtons = document.getElementsByClassName("orange");
const posNegButton = document.getElementById("posNegContainer");
const percentButton = document.getElementById("percent");

// Assigns calculator input and logic
var firstNumber = 0;
var secondNumber = 0;
let operator = "none";
var numberClickCount = 0
let isSelected = false;

// let addIsSelected = false

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

    // Resets display text and numbers
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;

    // Deselects all operators
    isSelected = false;
    operator = "none";
    for (i of operatorButtons) {
        i.style.backgroundColor = "#ff9e0b";
    }
});

// Numbers (0-9) or decimal key are pressed
for (i of numberButtons) {
    i.addEventListener('click', function () {
        // When you press a number/decimal when add is selected
        if (isSelected == true) {
            isSelected = false;
            for (i of operatorButtons) {
                i.style.backgroundColor = "#ff9e0b";
            }
            display.textContent = this.textContent;

            // Does not allow user to add more than one decimal to a number
        } else if (display.textContent.includes('.') && this.textContent == '.') {

            // Keeps placeholder 0 if first key press was a decimal
        } else if (display.textContent == "0" && this.textContent == ".") {
            display.textContent += this.textContent;

            // The first key press replaces placeholder zero
        } else if (display.textContent == "0") {
            display.textContent = this.textContent;

            // Each subsequent key press is added onto the display
        } else {
            display.textContent += this.textContent;
        }
    });
};

// Add button is pressed
addButton.addEventListener('click', function () {
    // If you subtract two numbers without hitting "=", then hit "+"
    if (operator == "subtract" && isSelected == false) {
        operator = "add";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = subtract(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        addButton.style.backgroundColor = "#ffd492";
        // If you multiply two numbers without hitting "=", then hit "+"
    } else if (operator == "multiply" && isSelected == false) {
        operator = "add";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = multiply(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        addButton.style.backgroundColor = "#ffd492";
        // If you divide two numbers without hitting "=", then hit "+"
    } else if (operator == "divide" && isSelected == false) {
        operator = "add";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = divide(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        addButton.style.backgroundColor = "#ffd492";
    } else if (isSelected == false) {
        operator = "add";
        isSelected = true;
        addButton.style.backgroundColor = "#ffd492";
        firstNumber = Number(display.textContent);

        // You select add when an operator is in use
    } else if (isSelected == true && operator !== "add") {
        // Makes current operator add
        operator = "add";
        addButton.style.backgroundColor = "#ffd492";

        // Changes all other operator background colors
        subtractButton.style.backgroundColor = "#ff9e0b";
        multiplyButton.style.backgroundColor = "#ff9e0b";
        divideButton.style.backgroundColor = "#ff9e0b";
        // You deselect add
    } else if (isSelected == true && operator == "add") {
        operator = "none";
        isSelected = false;
        addButton.style.backgroundColor = "#ff9e0b";
    }
});

// Subtract button is pressed
subtractButton.addEventListener('click', function () {
    // If you add two numbers without hitting "=", then hit "-"
    if (operator == "add" && isSelected == false) {
        operator = "subtract";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = add(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        subtractButton.style.backgroundColor = "#ffd492";
        // If you multiply two numbers without hitting "=", then hit "-"
    } else if (operator == "multiply" && isSelected == false) {
        operator = "subtract";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = multiply(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        subtractButton.style.backgroundColor = "#ffd492";
        // If you multiply two numbers without hitting "=", then hit "-"
    } else if (operator == "divide" && isSelected == false) {
        operator = "subtract";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = divide(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        subtractButton.style.backgroundColor = "#ffd492";
        // You select subtract when no operators are in use
    } else if (isSelected == false) {
        operator = "subtract";
        isSelected = true;
        subtractButton.style.backgroundColor = "#ffd492";
        firstNumber = Number(display.textContent);

        // You select subtract when an operator is in use
    } else if (isSelected == true && operator !== "subtract") {
        // Makes current operator subtract
        operator = "subtract";
        subtractButton.style.backgroundColor = "#ffd492";

        // Changes all other operator background colors
        addButton.style.backgroundColor = "#ff9e0b";
        multiplyButton.style.backgroundColor = "#ff9e0b";
        divideButton.style.backgroundColor = "#ff9e0b";

        // You deselect subtract
    } else if (isSelected == true && operator == "subtract") {
        operator = "none";
        isSelected = false;
        subtractButton.style.backgroundColor = "#ff9e0b";
    }
});

// Multiply button is pressed
multiplyButton.addEventListener('click', function () {
    // If you add two numbers without hitting "=", then hit "x"
    if (operator == "add" && isSelected == false) {
        operator = "multiply";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = add(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        multiplyButton.style.backgroundColor = "#ffd492";
        // If you subtract two numbers without hitting "=", then hit "x"
    } else if (operator == "subtract" && isSelected == false) {
        operator = "multiply";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = subtract(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        multiplyButton.style.backgroundColor = "#ffd492";
        // If you divide two numbers without hitting "=", then hit "x"
    } else if (operator == "divide" && isSelected == false) {
        operator = "multiply";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = divide(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        multiplyButton.style.backgroundColor = "#ffd492";

        // You select subtract when no operators are in use
    } else if (isSelected == false) {
        operator = "multiply";
        isSelected = true;
        multiplyButton.style.backgroundColor = "#ffd492";
        firstNumber = Number(display.textContent);

        // You select subtract when an operator is in use
    } else if (isSelected == true && operator !== "multiply") {
        // Makes current operator multiply
        operator = "multiply";
        multiplyButton.style.backgroundColor = "#ffd492";

        // Changes all other operator background colors
        subtractButton.style.backgroundColor = "#ff9e0b";
        addButton.style.backgroundColor = "#ff9e0b";
        divideButton.style.backgroundColor = "#ff9e0b";

        // You deselect multiply
    } else if (isSelected == true && operator == "multiply") {
        operator = "none";
        isSelected = false;
        multiplyButton.style.backgroundColor = "#ff9e0b";
    }
});

// Divide button is pressed
divideButton.addEventListener('click', function () {
    // If you add two numbers without hitting "=", then hit "/"
    if (operator == "add" && isSelected == false) {
        operator = "divide";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = add(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        divideButton.style.backgroundColor = "#ffd492";
        // If you subtract two numbers without hitting "=", then hit "/"
    } else if (operator == "subtract" && isSelected == false) {
        operator = "divide";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = subtract(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        divideButton.style.backgroundColor = "#ffd492";
        // If you divide two numbers without hitting "=", then hit "/"
    } else if (operator == "multiply" && isSelected == false) {
        operator = "divide";
        isSelected = true;

        secondNumber = Number(display.textContent)
        var answer = multiply(firstNumber, secondNumber).toFixed(3);

        display.textContent = answer;
        firstNumber = Number(answer);

        divideButton.style.backgroundColor = "#ffd492";

        // You select subtract when no operators are in use
    } else if (isSelected == false) {
        operator = "divide";
        isSelected = true;
        divideButton.style.backgroundColor = "#ffd492";
        firstNumber = Number(display.textContent);

        // You select subtract when an operator is in use
    } else if (isSelected == true && operator !== "divide") {
        // Makes current operator divide
        operator = "divide";
        divideButton.style.backgroundColor = "#ffd492";

        // Changes all other operator background colors
        subtractButton.style.backgroundColor = "#ff9e0b";
        addButton.style.backgroundColor = "#ff9e0b";
        multiplyButton.style.backgroundColor = "#ff9e0b";

        // You deselect divide
    } else if (isSelected == true && operator == "divide") {
        operator = "none";
        isSelected = false;
        divideButton.style.backgroundColor = "#ff9e0b";
    }
});

posNegButton.addEventListener('click', function () {
    if (display.textContent.includes("-")) {
        var newNumber = Number(display.textContent.replace("-", ""));
        display.textContent = newNumber

    } else {
        var newNumber = Number(`-${display.textContent}`);
        display.textContent = newNumber;
    }
})

percentButton.addEventListener('click', function () {
    var newNumber = (Number(display.textContent)) / 100;
    display.textContent = newNumber
})

// Equal button is pressed
equalButton.addEventListener('click', function () {
    secondNumber = Number(display.textContent);

    if (operator == "add") {
        // Updates display content and numbers
        display.textContent = add(firstNumber, secondNumber).toFixed(3);
        firstNumber = Number(display.textContent);
        secondNumber = 0;

        // Deselects operators
        operator = "none";
        isSelected = false;
    } else if (operator == "subtract") {
        // Updates display content and numbers
        display.textContent = subtract(firstNumber, secondNumber).toFixed(3);
        firstNumber = Number(display.textContent);
        secondNumber = 0;

        // Deselects operators
        operator = "none";
        isSelected = false;
    } else if (operator == "multiply") {
        // Updates display content and numbers
        display.textContent = multiply(firstNumber, secondNumber).toFixed(3);
        firstNumber = Number(display.textContent);
        secondNumber = 0;

        // Deselects operators
        operator = "none";
        isSelected = false;
    } else if (operator == "divide") {
        // Updates display content and numbers
        display.textContent = divide(firstNumber, secondNumber).toFixed(3);
        firstNumber = Number(display.textContent);
        secondNumber = 0;

        // Deselects operators
        operator = "none";
        isSelected = false;
    }
});


