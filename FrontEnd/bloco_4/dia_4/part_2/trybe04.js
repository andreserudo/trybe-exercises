/*
Crie uma função que receba um array de nomes e 
retorne o nome com a maior quantidade de caracteres.

Array de teste: 
  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.
*/

function maiorPalavra(vetor){
  let maior = 0;
  let maiorIndice;

  for (let index = 0; index < vetor.length; index++) {
    
    if(vetor[index].length > maior){
      maior = vetor[index].length;
      maiorIndice = index;
    }
  }

  return vetor[maiorIndice];
}

let palavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorPalavra(palavras))