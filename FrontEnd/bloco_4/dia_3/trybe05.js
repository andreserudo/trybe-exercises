/*
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor 
correspondente a cada loop;
n = 7

   *
  * *  
 *   *
*******
*/
const n = 7;
const simbolo = '*';
const espaco = '_';
let texto = '';
let totalEspacos;
let totalEspacosInterno;
let colocaSimbolo = true;
let contaSimbolos = 0;
let acumuladorEspacoFora = 0;
let acumuladorEspacoDentro = 0;

const media = Math.round(n / 2);

totalEspacos = media - 1;
totalEspacosInterno = 1;

for (let linha = 0; linha < media; linha += 1) {

  for (let item = 0; item < n; item += 1) {
    
    if(linha !== 0){
      if(totalEspacos > acumuladorEspacoFora){
        texto = texto.concat('', espaco);
        acumuladorEspacoFora += 1;
      }else{

        if(linha !== media-1){

          if(colocaSimbolo){
            texto = texto.concat('', simbolo);
            colocaSimbolo = false;
            contaSimbolos += 1;
          }else{
            texto = texto.concat('', espaco);
            acumuladorEspacoDentro += 1;
          }

        }else{
          texto = texto.concat('', simbolo);
        }

      }      

      if(acumuladorEspacoDentro === totalEspacosInterno){
        colocaSimbolo = true;         
        if(contaSimbolos === 2){
          acumuladorEspacoFora = 0;
        }   
      }
    }else{
      if(totalEspacos > acumuladorEspacoFora){
        texto = texto.concat('', espaco);
        acumuladorEspacoFora += 1;
      }else{
        texto = texto.concat('', simbolo);
        acumuladorEspacoFora = 0;
      }
    } 

  }
  console.log(texto);
  texto = '';
  acumuladorEspacoFora = 0;  
  acumuladorEspacoDentro = 0;
  totalEspacos -= 1;  
  contaSimbolos = 0;
  if(linha !== 0 && linha !== media-1){
    totalEspacosInterno += 2; 
  }
}

