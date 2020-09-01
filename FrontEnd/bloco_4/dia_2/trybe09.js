/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/
let tamanho = 25;
let vetor = [];

for (let i = 0; i < tamanho; i++) {
  vetor[i] = i;
}

for (let i = 0; i < tamanho; i++) {
  console.log(vetor[i] % 2);
}