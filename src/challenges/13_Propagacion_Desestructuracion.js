// ¿Qué imprime este código?

const nombres = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
const [, , , miNombre] = nombres;
console.log(miNombre['length']);



/* Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta 
los índices del mismo. Usando la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar 
la propiedad que se desea obtener.

En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del arreglo nombres para poder obtener 
(spread operator) la cadena Cris del arreglo anidado (los corchetes y ... es como si se cancelaran).

Finalmente aplicamos el método length con sintaxis de corchete.


RESULTADO: 4*/