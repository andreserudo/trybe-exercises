    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  const countingA = names.reduce((acc, cur) => {
    let sumA = 0;
    for(let i=0; i<cur.length; i++){
      if( (cur[i] === 'A') ||(cur[i] === 'a') ){
        sumA += 1;
      }
    }
    
    return sumA + acc;
  }, 0);

  return countingA;
}

assert.deepEqual(containsA(), 20);