/*
Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
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

console.log(allLessons);