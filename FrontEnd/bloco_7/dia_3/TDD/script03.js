/*
  Escreva a função addAllnumbers para passar nos testes já implementados.
*/
const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (numbers) => {
  let sum = 0;

  numbers.forEach(element => {
    sum += element;
  });

  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const notExpected = 54;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
assert.strictEqual(output, notExpected, 'the sum should be 53');