// cal.js

// Get references to the result input field and all buttons
const resultInput = document.getElementById('Result');
const buttons = document.querySelectorAll('#btn-container button');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Handle different button actions
        if (buttonText === 'C') {
            // Clear the result input
            resultInput.value = '';
        } else if (buttonText === '=') {
            // Evaluate the expression and display the result
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else {
            // Append the button's text to the result input
            resultInput.value += buttonText;
        }
    });
});