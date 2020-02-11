var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");

function addNum() {
    var sum = parseInt(num1.value) + parseInt(num2.value);
    result.innerHTML = `The addition of ${num1.value} + ${num2.value} is : ${sum}`;
}

function subtractNum() {
    var subtraction = parseInt(num1.value) - parseInt(num2.value);
    result.innerHTML = `The addition of ${num1.value} - ${num2.value} is : ${subtraction}`;
}

function mulNum() {
    var multiplication = parseInt(num1.value) * parseInt(num2.value);
    result.innerHTML = `The addition of ${num1.value} * ${num2.value} is : ${multiplication}`;
}

function divNum() {
    var division = parseInt(num1.value) / parseInt(num2.value);
    result.innerHTML = `The addition of ${num1.value} / ${num2.value} is : ${division}`;
}