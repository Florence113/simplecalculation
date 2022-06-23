// A basic calculator

let selectOperator = prompt("Select your operator [+, -, *, /]")
let firstNumber = parseFloat(prompt("Enter first number"));
let secondNumber = parseFloat(prompt("Enter second number"));
let result;

if (selectOperator === "+"){
    result = (firstNumber + secondNumber);
}
else if (selectOperator === "-"){
    result = (firstNumber - secondNumber);
}
else if (selectOperator === "*"){
    result = (firstNumber * secondNumber);
}
else if (selectOperator === "/"){
    result = (firstNumber / secondNumber);
}
else{
    alert("Not a valid operator you selected")
}

alert(`${firstNumber}  ${selectOperator}  ${secondNumber} = ${result}`);