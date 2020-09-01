/*
Depois, faça uma pirâmide com n asteriscos de base:
n = 5
  *
 ***
*****

*/
const n = 7;
const simbolo = '*';
const espaco = ' ';
let texto ='';
let acumularEspaco;
let acumularSimbolo;
let totalEspaco;
let totalSimbolo;

const tipoNumero = n % 2;
const media = Math.round(n / 2);

totalEspaco = media - 1;
totalSimbolo = 1;

for (let linha = media; linha <= n; linha += 1) {    
  acumularEspaco = 0;
  acumularSimbolo = 0; 

  for(item=0; item < n; item += 1){
    
    if(totalEspaco > acumularEspaco){
      texto = texto.concat('', espaco);
      acumularEspaco += 1;
    }else if (totalSimbolo > acumularSimbolo){
      texto = texto.concat('', simbolo);        
      acumularSimbolo += 1;
    }else{
      texto = texto.concat('', espaco);
    }
    
  }
  console.log(texto);
  totalSimbolo += 2;
  totalEspaco -= 1;
  texto = '';
}
