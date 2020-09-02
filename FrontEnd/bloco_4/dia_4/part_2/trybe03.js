/* 

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

*/


function menorValor(vetor){
  let menor = 0;
  let menorIndice = 0;

  for (let index = 0; index < vetor.length; index++) {
    if(vetor[index] < menor){
      menor = vetor[index];
      menorIndice = index;
    }    
  }

  return menorIndice;
}

let teste = [2, 4, 6, 7, 10, 0, -3];

console.log(menorValor(teste));