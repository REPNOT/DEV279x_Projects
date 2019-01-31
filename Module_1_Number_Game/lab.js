// Part 3 - Update greeting with user's name
var userName = window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += " " + userName;

var num1 = parseInt(window.prompt("Enter a Number: "));
var num2 = parseInt(window.prompt("Enter a Number: "));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modresult = num1 % num2;

document.getElementById("addition1").innerHTML = sum;
document.getElementById("subtraction1").innerHTML = difference;
document.getElementById("multiplication1").innerHTML = product;
document.getElementById("division1").innerHTML = quotient;
document.getElementById("modulus1").innerHTML = modresult;