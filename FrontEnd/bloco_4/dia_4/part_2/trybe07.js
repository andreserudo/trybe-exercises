/*
Crie uma função que receba uma string word e outra string ending. 
Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false
*/

function verificaFimPalavra(palavra, final){
  let tamanhoFinal = final.length;
  let inicio = palavra.length - tamanhoFinal;
  let indiceFinal = 0;

  for (let index = inicio; index < palavra.length; index++) {
    
    if(palavra[index] !== final[indiceFinal]){
      return false;
    }
    indiceFinal++;
  }
  
  return true;
}

console.log(verificaFimPalavra("joaofernando", "fernan"));