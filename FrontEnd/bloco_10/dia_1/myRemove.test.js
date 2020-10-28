/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse
array sem o elemento item caso ele exista no array
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Verifique se o array passado por parâmetro não sofreu alterações
  Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
const myRemove = require('./myRemove');

describe('Function myRemove: ', () => {
  it('should remove a number from an array', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;    
    const outputArray = [1,2,4];
    
    expect(myRemove(originalArray, toRemove)).toStrictEqual(outputArray);
  });

  it('should not return the same entry array after number removed', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;        
    
    expect(myRemove(originalArray, toRemove)).not.toStrictEqual(originalArray);
  });

  it('should not change the param that was passed', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 3;        
    myRemove(originalArray, toRemove);
    expect(originalArray).toStrictEqual(originalArray);
  });

  it('should return the same array if number not exist in the array', () => {
    const originalArray = [1,2,3,4];
    const toRemove = 5;    
    
    expect(myRemove(originalArray, toRemove)).toStrictEqual(originalArray);
  });
});