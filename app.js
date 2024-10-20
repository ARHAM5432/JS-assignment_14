// Question 1: Show the current date
function orginalDate() {
    let today = new Date();
    document.write(today);
}

orginalDate();

// Question 2: Greet the user with their full name
function greet() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    alert("Hello! " + firstName + " " + lastName);
}

greet();

// Question 3: Add two numbers and display the result
function addNum() {
    let firstNum = +prompt("Enter the first number:");
    let secondNum = +prompt("Enter the second number:");
    return xyz = firstNum + secondNum;
}

addNum();
let a = xyz;
document.write(a);

// Question 4: Simple oprulator to perform operations (+, -, *, /)
function opr() {
    let firstNum = +prompt("Enter the first number:");
    let secondNum = +prompt("Enter the second number:");
    let operation = prompt("Enter the operation you want to do (+, -, *, /):");

    let result;

    switch (operation) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        default:
            result = "Invalid";
    }

    alert("The result is: " + result);
}

opr();
