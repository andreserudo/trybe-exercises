/*
Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
*/
const n = 5;
const simbolo = '*';
const espaco = '_';

let texto = '';
let limiteTexto = 0;

for (let linha = 0; linha < n; linha++) {

  for(let indiceEspaco = 0; indiceEspaco < n - (linha +1); indiceEspaco += 1){
    texto = texto.concat('', espaco);
  }
  
  limiteTexto = texto.length;
  
  for(let indiceSimbolo = 0; indiceSimbolo < n - limiteTexto; indiceSimbolo += 1){
    texto = texto.concat('', simbolo);
  }
  
  console.log(texto);
  texto = '';
}