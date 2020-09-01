/*
Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
*/
let tamanho = 25;
let vetor = [];

for (let i = 0; i < tamanho; i++) {
  vetor[i] = i;
}

for (let i = 0; i < tamanho; i++) {
  console.log(vetor[i]+1);
}