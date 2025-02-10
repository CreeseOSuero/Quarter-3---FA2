function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultText = document.getElementById('result')
    
    switch (operation) {
        case '+':
            resultText = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".";
            break;
        case '-':
            resultText = "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2) + ".";
            break;
        case '*':
            resultText = "The product of " + num1 + " and " + num2 + " is " + (num1 * num2) + ".";
            break;
        case '/':
            resultText = "The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2) + ".";
            break;
        case '%':
            resultText =  "The remainder of " + num1 + " divided by " + num2 + " is " + (num1 % num2) + ".";
            break;
        default:
            resultText = "Invalid operation.";
    }


    document.getElementById('result').textContent = resultText;
}

