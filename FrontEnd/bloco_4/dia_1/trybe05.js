/*
Faça um programa que defina três variáveis com os valores dos três ângulos 
internos de um triângulo. Retorne true se os ângulos representarem os ângulos 
de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
*/

const a = 60;
const b = 60;
const c = 60;

soma = a + b + c;

if( (soma > 0) && (soma === 180) ){
  console.log(true);
}else{
  console.log(false);
}