
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if(button.className ==="btn_percent") {
            screen.textContent = '%';
        } else if (button.className ==="btn_del") {
            screen.textContent = del();
        } else if (button.className ==="btn_plus_minus") {
            screen.textContent = '-';
        } else if (button.className ==="btn_divide") {
            screen.textContent = '/'
        } else if (button.className ==="btn1") {
            screen.textContent = '1';
        } else if (button.className ==="btn3") {
            screen.textContent = '3';
        } else if (button.className ==="btn_star") {
            screen.textContent = '*';
        } else if (button.className ==="btn4") {
            screen.textContent = '4';
        } else if (button.className ==="btn5") {
            screen.textContent = '5';
        } else if (button.className ==="btn6") {
            screen.textContent = '6';
        } else if (button.className ==="btn_minus") {
            screen.textContent = '-';
        } else if (button.className ==="btn7") {
            screen.textContent = '7';
        } else if (button.className ==="btn8") {
            screen.textContent = '8';
        } else if (button.className ==="btn9") {
            screen.textContent = '9';
        } else if (button.className ==="btn_plus") {
            screen.textContent = '+';
        } else if (button.className ==="btn0") {
            screen.textContent = '0';
        } else if (button.className ==="btn2") {
            screen.textContent = '2';
        } else if (button.className ==="btn_dot") {
            screen.textContent = '.';
        } else if (button.className === "btn_equals") {
            screen.textContent = '=';
        } else {
            return 'ERROR';
        };
    });
});

// add function
function add(num1, num2) {
    let add = num1 + num2;
    return add;
    } console.log(add(2, 4));
    
    // subtract function
    function subtract(num1, num2) {
    let subtract = Number(num1) - Number(num2);
    return subtract;
    }console.log(subtract(25, 300));
    
    // multiplication function
    function multiply(num1, num2) {
    let multiply = num1 * num2;
    return multiply;
    }console.log(multiply(-2,294));
    
    // division function
    function divide(num1, num2) {
    let divide = num1 / num2;
    return divide;
    } console.log(divide(220, -324));
    
    // operate function calling any of the
    // above function
    function operator(operator, num1, num2) {
        if(operator ==='+') {
            return add(num1, num2);
        } else if (operator ==='*') {
            return multiply(num1, num2)
        } else if (operator ==='-') {
            return subtract(num1, num2)
        } else if (operator==='/') {
            return divide(num1, num2)
        } else {
            return 'Error';
        }
    
    };