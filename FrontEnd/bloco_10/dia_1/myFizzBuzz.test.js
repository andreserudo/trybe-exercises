/*
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" 
se o número for divisível por 3 e 5, retorna "fizz" se for divisível 
apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio 
número caso não seja divisível por 3 ou 5 e retorna false caso num não seja 
um número:
  1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/
const myFizzBuzz = require('./myFizzBuzz');

describe('about MyFizzBuzz', () => {
  it('should return the word fizzbuzz for divisible numbers of 3 and 5', () => {
    const number = 15;
    const output = 'fizzbuzz';

    expect(myFizzBuzz(number)).toBe(output);
  });

  it('should return the word fizz for divisible numbers only of 3', () => {
    const number = 9;
    const output = 'fizz';

    expect(myFizzBuzz(number)).toBe(output);
  });  

  it('should return the word buzz for divisible numbers only of 5', () => {
    const number = 10;
    const output = 'buzz';

    expect(myFizzBuzz(number)).toBe(output);
  });    

  it('should return the number itself for non divisible numbers of 3 and 5', () => {
    const number = 14;
    const output = number;

    expect(myFizzBuzz(number)).toBe(output);
  });    

  it('should return false for params that are not numbers', () => {
    const number = '14';
    const output = false;

    expect(myFizzBuzz(number)).toBe(output);
  });    

});