/*
Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar 
os resultados em algum lugar.
*/
const n = 6;

let primo = true;

for (let i = 1; i < n; i++){  
  
  if (( n % i === 0) && ( i !== 1)){
    primo = false;    
  }
}

if(primo){
  console.log('é primo');
}else{
  console.log('não é primo');  
}