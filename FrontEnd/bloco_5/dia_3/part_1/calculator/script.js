/*
1 - Add a script tag, and add the functions from the calculator exercise 
(view the solution if you haven't done it yet). Link:
https://www.teaching-materials.org/javascript/exercises/calculator

2 - For each operation, create an event listener for the button, and when 
it's clicked, find the value of the appropriate input and show the result of the
calculation in the solution div.

Bonus: respond to key presses so that the user doesn't have to click the button.
*/

let squareButton = document.getElementById('square-button');
let halfButton = document.getElementById('half-button');
let percentButton = document.getElementById('percent-button');
let areaButton = document.getElementById('area-button');
let solution = document.getElementById('solution');
const message = 'The result is ';

squareButton.addEventListener('click', squareCalcule);
halfButton.addEventListener('click', halfCalcule);
percentButton.addEventListener('click', percentValue);
areaButton.addEventListener('click', areaValue);

function squareCalcule(){
  let value = document.getElementById('square-input').value;
  let result;

  result = value * value;

  solution.innerText = `The result of squaring the number ${value} is ${result}.`;
}

function halfCalcule(){
  let value = document.getElementById('half-input').value;
  let result;

  result = value / 2;

  solution.innerText = `Half of ${value} is ${result}.`;
}

function percentValue(){
  let partValue = document.getElementById('percent1-input').value;
  let wholeValue = document.getElementById('percent2-input').value;
  let result;

  result = (partValue * 100) / wholeValue;

  solution.innerText = `${partValue} is ${result}% of ${wholeValue}.`;
}

function areaValue(){
  let value = document.getElementById('area-input').value;
  let result;

  result = (value * value) * Math.PI;

  solution.innerText = `The area for a circle with radius ${value} is ${result}.`;
}