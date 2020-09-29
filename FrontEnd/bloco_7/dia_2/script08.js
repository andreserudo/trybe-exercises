/*
Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, 
o nome da chave e o valor da chave. 
Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
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

const verifyPair = (lesson, key, value) => {
  const keysLesson = Object.keys(lesson);
  const valuesLesson = Object.values(lesson);
  const indexKeyLesson = keysLesson.indexOf(key);
  const indexValueLesson = valuesLesson.indexOf(value);

  if(
    ( (indexKeyLesson != -1) && (indexValueLesson != -1)) &&
    (lesson[keysLesson[indexKeyLesson]] === lesson[key]) &&
    (key === keysLesson[indexKeyLesson])
  ){
    return true;
  }else{
    return false;
  }

}

console.log(verifyPair(lesson1, 'turno', 'noite'));
console.log(verifyPair(lesson1, 'turno', 'manhã'));