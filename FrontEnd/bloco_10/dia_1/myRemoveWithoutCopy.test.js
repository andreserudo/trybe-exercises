/*
A função myRemoveWithoutCopy(arr, item) recebe um array arr e 
retorna o próprio array sem o elemento item caso ele exista no array
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Function myRemoveWithoutCopy: ', () => {
  it('should remove a number from an array', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;    
    const outputArray = [1,2,4];
    
    expect(myRemoveWithoutCopy(originalArray, toRemove)).toStrictEqual(outputArray);
  });

  it('should return the same entry array after number removed', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;        
    
    expect(myRemoveWithoutCopy(originalArray, toRemove)).toStrictEqual(originalArray);
  });

  it('should not change the param that was passed', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;        
    myRemoveWithoutCopy(originalArray, toRemove);
    expect(originalArray).toStrictEqual(originalArray);
  });

  it('should return the same array if number not exist in the array', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 5;    
    
    expect(myRemoveWithoutCopy(originalArray, toRemove)).toStrictEqual(originalArray);
  });
});