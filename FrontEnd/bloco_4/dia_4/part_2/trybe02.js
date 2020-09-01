/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function maiorValor(vetor){
  let maior = 0;
  let maiorIndice = 0;

  for (let index = 0; index < vetor.length; index++) {
    if(vetor[index] > maior){
      maior = vetor[index];
      maiorIndice = index;
    }    
  }

  return maiorIndice;
}

let teste = [2, 3, 6, 7, 10, 1];

console.log(maiorValor(teste));