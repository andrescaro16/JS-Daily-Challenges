/* Hoisting es una técnica de desplazamiento de declaraciones de variables y funciones. Cuando se declara 
una variable o una función, el código es desplazado hacia arriba, lo que significa que la variable o función 
puede ser utilizada antes de que se haya declarado.

El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de 
ejecución en JavaScript

Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables 
y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que 
sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, 
pero quedan exactamente en dónde las has escrito en el código. (mdn) 

RESULTADO: Uncaught ReferenceError: myNumber is not defined

- Si en vez de let tuvieramos var el resultado habría sido NaN
- Si tuvieramos var pero en la función solo imprimieramos myNumber el resultado habría sido undefined*/


anotherFn();

function anotherFn() {
  console.log(myNumber + myNumber);
}

let myNumber = 4;