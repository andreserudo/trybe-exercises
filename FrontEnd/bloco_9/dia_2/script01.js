const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const getJoke = () => {
  return new Promise((resolve, reject) => {
     const numbers = [
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
       Math.pow(Math.floor(Math.random() * Math.floor(50)), 2),
     ];

     const sum = numbers.reduce((acc, cur) => {return acc + cur;}, 0);
     
     if (sum < 8000) {
      resolve(sum);
     } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
     }
  });
};

getJoke()
  .then( result => {
    const newNumbers = [
      result/2,
      result/3,
      result/5,
      result/10,
    ];

    console.log(newNumbers)} )
  .catch( msgError => {    
    console.log(msgError);
  });


// const fetchJoke = () => {
//   // Adicionar lógica aqui!
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
  
//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => {      
//       jokeContainer.innerText = data.joke;
//     });
// };

// fetchJoke();