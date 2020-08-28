/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os 
movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals
*/

const peça = "REI";

console.log('A peça escolhida foi: ' + peça)

switch ( peça.toLowerCase() ){
  case 'peão' : 
    console.log('avança uma casa');
    break;
  case 'cavalo' :
    console.log('avança em L');
    break;
  case 'torre' :
    console.log('avança no eixo casa');
    break;
  case 'bispo' :
    console.log('avança diogonalmente');
    break;
  case 'rainha' :
    console.log('avança em todos os sentidos menos em L');
    break;
  case 'rei' : 
    console.log('avança uma casa');
    break;
  default :
    console.log('Ou você digitou errado ou essa peça não existe.')    
}