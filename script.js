const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    try {
        let expression = display.value.replace('^', '**');
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}
