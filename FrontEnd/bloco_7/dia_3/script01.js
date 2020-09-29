/*
A função sum(a, b) retorna a soma do parâmetro a com o b
  1. Teste se o retorno de sum(4, 5) é 9;
  2. Teste se o retorno de sum(0, 0) é 0;
  3. Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5);
  4. Teste se a mensagem de erro é "parameters must be numbers" 
  quando realizar a chamada sum(4, "5");
*/
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected01 = sum(4, 5);
const expected02 = sum(0, 0);
const expected03 = sum(4, "5");

assert.ok(expected01 == 9, "a soma de 4 e 5 é 9");
assert.ok(expected02 == 0, "a soma de 0 e 0 é 0");
assert.ok(expected03 == 9);
assert.ok(expected03 == 9, "error: parameters must be numbers");