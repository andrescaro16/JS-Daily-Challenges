// ¿Qué imprime este código?

console.log(typeof ([] + []));



/* El operador + por lo general intentará realizar una concateneción, en este caso, el interprete de 
JavaScript, por coerción de tipos intentará convertir los arreglos a cadenas de texto, haciendo algo 
como esto aunque no lo veamos:

console.log(typeof ([].toString() + [].toString())); //string console.log(typeof ("" + "")); console.log(typeof ("")); //string 

RESULTADO: string*/




function getStudentAverage(students) {
  const averageStudent = students.map(function(student) {
    const subjectGrades = student.grades.reduce(function(acumulador, num) {
      return (acumulador + num);
    }, 0);

    const temp = [];

    for (const num of student.grades) {
      temp.push(num / 4);
    }

    return temp;
  });

  console.log(averageStudent);
}

getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]);