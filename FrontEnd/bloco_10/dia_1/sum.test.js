/*
  A função sum(a, b) retorna a soma do parâmetro a com o b
    Teste se o retorno de sum(4, 5) é 9
    Teste se o retorno de sum(0, 0) é 0
    Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
    Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/
const sum = require('./sum');

describe('Function Sum', () => {
  it('should be able to sum two positive numbers',() => {
    expect(sum(4,5)).toBe(9);
  });
  it('should be able to sum allow zero',() => {
    expect(sum(0,0)).toBe(0);
  });
  it('should be able to throw an error when params be a number and a string',() => {
    expect(() => {sum(4,"5")}).toThrow();
  });
  it('should be display the message: parameters must be numbers - when wrong params are passed',() => {
    expect(() => {sum(4,"5")}).toThrowError(new Error('parameters must be numbers'));
  });  
});