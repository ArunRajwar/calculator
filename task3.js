// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';

    const updateDisplay = (value) => {
        display.textContent = value;
    };

    const clear = () => {
        currentInput = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        updateDisplay('0');
    };

    const handleNumber = (number) => {
        if (operator) {
            secondNumber += number;
            currentInput = secondNumber;
        } else {
            firstNumber += number;
            currentInput = firstNumber;
        }
        updateDisplay(currentInput);
    };

    const handleOperator = (op) => {
        if (firstNumber && secondNumber && operator) {
            calculate();
        }
        operator = op;
    };

    const calculate = () => {
        if (firstNumber && secondNumber && operator) {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return;
            }
            updateDisplay(result);
            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (!isNaN(value) || value === '.') {
                handleNumber(value);
            } else if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });

    clear(); // Initialize the display
});