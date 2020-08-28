/*
Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/
const a = 3;
const b = 1;
const c = 2;

let maior;

maior = a;
if(b > maior ){
  maior = b;
}
if (c > maior){
  maior = c;
}

console.log('Sejam a =' + a + ' b = '+ b + ' c = ' + c);
console.log('O maior numero é: ' + maior);