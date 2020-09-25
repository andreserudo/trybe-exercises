/*
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o 
produto de todos os inteiros menores ou iguais a N. 
Exemplo: 4! = 4 3 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. 
Spoiler: É possível resolver com uma linha.
*/

const exercicio1 =  (num) => num * (num === 1 ? 1 : exercicio1(num -  1));

console.log(exercicio1(4));

/*
Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/

// const exercicio2 = function (frase){
//   const vetor = frase.split(' ').map( (item, index) => { 
//     const obj = {};
//     obj[parseInt(index)] = item.length;
//     return obj;
//   });
//   const maiorPalavra = Math.max(...vetor);

//   return maiorPalavra;
// }

// console.log(exercicio2('é uma frase'));