let resultElement = document.getElementById("Result");
let currentInput = "0";
let currentOperator = "";
let previousInput = "";

// Clears the screen
function clearResult() {
    currentInput = "0";
    previousInput = "";
    currentOperator = "";
    updateDisplay();
}

// Updates the screen display
function updateDisplay() {
    resultElement.textContent = currentInput;
}

// Appends a number to the current input
function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Appends a decimal point (if not already present)
function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

// Sets the operator for calculation
function setOperator(operator) {
    if (currentOperator !== "") {
        calculate(); // Calculate before changing operator
    }
    previousInput = currentInput;
    currentInput = "0";
    currentOperator = operator;
    updateDisplay();
}

// Performs the calculation based on the current operator
function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Error"; // Prevent division by zero
            } else {
                result = prev / current;
            }
            break;
        default:
            return; // No operator, do nothing
    }

    currentInput = result.toString();
    currentOperator = "";
    previousInput = "";
    updateDisplay();
}
