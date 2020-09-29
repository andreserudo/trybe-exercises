/*
Usando o objeto criado no exercício 5, 
crie uma função que retorne o número total de estudantes em todas as aulas.
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

lesson2.turno = 'noite';

const cloneLesson1 = { lesson1: Object.assign({},lesson1)};
const cloneLesson2 = { lesson2: Object.assign({},lesson2)};
const cloneLesson3 = { lesson3: Object.assign({},lesson3)};

const allLessons = Object.assign({}, cloneLesson1, cloneLesson2, cloneLesson3);

const totalStudents = (allLessons) => {
  const students = Object.values(allLessons);

  return students.length;
}

console.log(totalStudents(allLessons));