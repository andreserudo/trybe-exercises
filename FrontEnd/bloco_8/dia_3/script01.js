    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  // escreva seu código aqui

  const allInOne = arrays.reduce(
    (acc, value) => acc.concat(value)
  );

  return allInOne;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

