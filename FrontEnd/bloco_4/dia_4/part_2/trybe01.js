/*

Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara.
  verificaPalindrome("arara");
Retorno esperado: true
  verificaPalindrome("desenvolvimento");
Retorno esperado: false

*/

function verificaPalindrome(palavra){
  let oppositeIndex = palavra.length - 1;
  
  for (let index = 0; index < palavra.length; index++) {
    
    if(palavra[index] !== palavra[oppositeIndex]){      
      return false;
    }
    oppositeIndex -= 1;
  }

  return true;
}

console.log(verificaPalindrome("arara2"));