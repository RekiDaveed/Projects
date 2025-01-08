// Get references to the result input field and all buttons
const result = document.getElementById('Result');
const buttons = document.querySelectorAll('#btn-container button');

// Variables to store the current input and operation
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Handle number and decimal point inputs
        if (!isNaN(buttonText) || buttonText === '.') {
            currentInput += buttonText;
            result.value = currentInput;
        }

        // Handle operator buttons (+, -, *, /)
        else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (currentInput !== '') {
                if (firstOperand === '') {
                    firstOperand = currentInput;
                } else {
                    secondOperand = currentInput;
                    firstOperand = calculate(firstOperand, secondOperand, operator);
                    result.value = firstOperand;
                }
                operator = buttonText;
                currentInput = '';
            }
        }

        // Handle equals button (=)
        else if (buttonText === '=') {
            if (firstOperand !== '' && currentInput !== '') {
                secondOperand = currentInput;
                result.value = calculate(firstOperand, secondOperand, operator);
                // Reset for the next calculation
                firstOperand = result.value;
                secondOperand = '';
                currentInput = '';
                operator = '';
            }
        }

        // Handle clear button (C)
        else if (buttonText === 'C') {
            currentInput = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            result.value = '';
        }
    });
});

// Function to perform calculations
function calculate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            if (second === 0) {
                return 'Error: Division by zero';
            }
            return first / second;
        default:
            return second; // If no operator, return the second operand
    }
}