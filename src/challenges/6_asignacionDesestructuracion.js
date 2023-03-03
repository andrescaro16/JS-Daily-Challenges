//¿Qué imprime este código?

const frutas = ['Mango', 'Manzana', 'Naranja', 'Pera'];
const { 3: pera } = frutas;
console.log(pera);



/* Asignación por desestructuración:
Es una característica que permite extraer valores de arreglos o objetos y asignarlos a variables 
individuales de manera más concisa. 

En el ejemplo, la línea const { 3: pera } = frutas; está extrayendo el valor que se encuentra en la 
posición 3 del array frutas y asignándolo a la variable pera. Como los arrays en JavaScript empiezan 
en la posición 0, el valor en la posición 3 corresponde a "Pera".

RESULTADO: Pera*/