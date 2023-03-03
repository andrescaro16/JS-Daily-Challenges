// ¿Qué imprime este código?

function getAge(...args) {
    console.log(typeof args);
}

getAge(21);



/* Cuando usamos la sintaxis de ... en los parámetros de una función (ES6: Rest Operator) 
convertimos a dicho parámetro a un arreglo.

Entonces es tentador marcar la opción B: "array" pero esto sería un error de novato. En 
JavaScript no existe el tipo de dato array, para tipos no primitivos el lenguaje los evalua 
como object. Por ese motivo la respuesta correcta es la opción C: "object". 

RESPUESTA: object*/


// Otro ejemplo:
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
}
  
console.log(sum(1, 2, 3)); // 6