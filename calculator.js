
function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function exponent(num1, num2){
  return num1 ** num2
}

function remainder(num1, num2){
  return num1 % num2
}

function sqrt(num1){
  return num1 ** .5
}




function calculate(expression) {
const tokens = expression.split(' ')

if(tokens.length === 3){
num1= Number(tokens[0])
operator = tokens[1]
num2 = Number(tokens[2])
if(Number.isNaN(num1) || Number.isNaN(num2)){
  alert("Invalid Number Entered")
  return
}
} else if(tokens.length === 2){
  num1= tokens[1]
  operator = tokens[0]
  if(Number.isNaN(num1)){
    alert("Invalid Number Entered")
    return
}
} else if(tokens.length > 3){
  alert("Invalid Expression")
  Return
} 

if(operator === '+'){
  return add(num1, num2)
}
if(operator === '-'){
  return subtract(num1, num2)
}
if(operator === '*'){
  return multiply(num1, num2)
}
if(operator === '/'){
  return divide(num1, num2)
}
if(operator === '^'){
  return exponent(num1, num2)
}
if(operator === '%'){
  return remainder(num1, num2)
}
if(operator === 'sqrt'){
  return sqrt(num1)
}
alert("Unrecognized Operator")
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
