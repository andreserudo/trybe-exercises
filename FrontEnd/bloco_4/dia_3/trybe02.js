/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um 
triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****
*/
const n = 5;
const simbolo = '*';
let texto = '';

for (let coluna = 0; coluna < n; coluna++) {
  texto = texto.concat('',simbolo);
  console.log(texto);
}
