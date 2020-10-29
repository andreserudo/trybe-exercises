/*
  Compare dois objetos (JSON) para verificar se são idênticos ou não
*/

it('should be the same JSON', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };

  expect(obj1).toEqual(obj2);
});

it('should not be the same JSON', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  expect(obj1).not.toEqual(obj3);
});