/*
Crie uma função para listar os valores de um objeto.
Essa função deve receber um objeto como parâmetro.
*/
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const listItemsLesson = (lesson) => {  
  const items = [];

  for(item in lesson){
    items.push(lesson[item]);
  }

  return Object.values(items);  
}

console.log(listItemsLesson(lesson1));
console.log(listItemsLesson(lesson2));
console.log(listItemsLesson(lesson3));