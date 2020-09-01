/*
Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 
*/
let numbers = [2, 4, 3];
let existe = 0;

for (let i = 0; i < numbers.length; i++) {
  if((numbers[i] % 2) !== 0){
    existe = 1;
  }
}

if(!existe){
  console.log('Nenhum valor ímpar encontrado');
}