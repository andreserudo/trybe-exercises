/*
Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[1];

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] < menor){
    menor = numbers[i];
  }
}

console.log(`O menor número do vetor é ${menor}`);