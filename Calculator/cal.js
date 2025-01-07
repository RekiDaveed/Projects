// Get references to the result input field and all buttons
const result = document.getElementById('Result');
const buttons = document.querySelectorAll('#btn-container button');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Handle different button actions
        if (buttonText === 'C') {
            // Clear the result field
            result.value = '';
        } else if (buttonText === '=') {
            // Evaluate the expression and display the result
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            // Append the button's text to the result field
            result.value += buttonText;
        }
    });
});