/*
Crie uma função que receba um array de inteiros e 
retorne o inteiro que mais se repete.

  Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.
*/
let vetor = [2, 3, 2, 5, 8, 2, 3];

function maiorRepeticao(vetor){
  let numero;
  let qtdRepeticao = 0;

  let maiorRepeticao = 0;
  let indiceRepeticao;

  for (let index = 0; index < vetor.length; index++) {
    numero = vetor[index];

    for (let indexNumero = 0; indexNumero < vetor.length; indexNumero++) {
      if(vetor[indexNumero] === numero){
        qtdRepeticao++;
      }      
    }
    
    if(maiorRepeticao < qtdRepeticao){
      maiorRepeticao = qtdRepeticao;
      indiceRepeticao = index;
    }

    qtdRepeticao = 0;
  }

  return vetor[indiceRepeticao];
}

console.log(maiorRepeticao(vetor));