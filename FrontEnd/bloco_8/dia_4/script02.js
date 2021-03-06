/*
  Crie uma função sum que dado um número variável de
  elementos retorna a soma desses elementos. Ou seja:
*/

const assert = require('assert')

// escreva sum abaixo
function sum(a=0, ...rest){
  let sumOf;

  sumOf = rest.reduce((acc, cur) => acc + cur, a);

  return sumOf;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)