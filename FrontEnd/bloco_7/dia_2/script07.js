/*
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
Por exemplo:
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
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

lesson2.turno = 'tarde';

const getValueByNumber = (lesson, propertyIndex) => {
  const value = Object.values(lesson);

  return value[propertyIndex];  
}

console.log(getValueByNumber(lesson1, 3));
console.log(getValueByNumber(lesson2, 3));
console.log(getValueByNumber(lesson3, 3));