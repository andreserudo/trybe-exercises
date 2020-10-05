/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse 
array sem o elemento item caso ele exista no array
  1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  3. Verifique se o array passado por parâmetro não sofreu alterações
  4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const expected01 =  myRemove([1, 2, 3, 4], 3);
const result01 = [ 1, 2, 4 ];
const wrongResult = [1, 2, 3, 4];

const expected02 = myRemove([1, 2, 3, 4], 5);
const result02 = [1, 2, 3, 4];

assert.deepStrictEqual(expected01, result01);
assert.ok(expected01 == wrongResult, "o retorno nao deveria conter o 3");

assert.ok(expected02 == result02);
assert.deepStrictEqual(expected02, result02);