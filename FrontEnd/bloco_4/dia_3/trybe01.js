/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/
const n = 5;
const simbolo = '*';
let texto = '';

for (let linha = 0; linha < n; linha++) {
  for (let coluna = 0; coluna < n; coluna++) {
    texto = texto.concat('',simbolo);
  }
  console.log(texto);
  texto = '';
}