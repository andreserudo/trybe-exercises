/*
  2. Utilizando a sintaxe de Promise, faça um teste que verifique o 
  resultado da função getUserName para o caso em que o usuário é encontrado, 
  e também um teste para o caso em que o usuário não é encontrado.
  Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na 
  variável users, para saber quais IDs existem.

  3. Reescreva o teste do exercício anterior, desta vez 
  utilizando a sintaxe de async/await.
  Dica: Utilize o try/catch para o caso de erro  
*/

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe(`using Promises: `, () => {
  it('should be able to return an username from an ID', () => {    
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    })
  });

  it('should be able to return an error message when user is not found', () => {    
    return getUserName(1).catch(error => {      
      expect(error).toEqual({ error: 'User with 1 not found.'});
    })
  });

});

describe(`using async/await: `, () => {
  it('should be able to return an username from an ID', async () => {
    expect.assertions(1);
    const user = await getUserName(5);    
    expect(user).toBe('Paul');
  });

  it('should be able to return an error message when user is not found', async () => {    
    const id = 0;
    expect.assertions(1);
    try {
      await getUserName(id);
    } catch (error) {
      expect(error).toEqual({ error: `User with ${id} not found.`});            
    }          
  });

});