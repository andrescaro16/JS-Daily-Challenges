// ¿Qué imprime este código?

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);



/*
El spread operator en este ejemplo se encarga de propagar el objeto user dentro del objeto admin.

Sin usar el spread operator tendríamos un objeto anidado:

  { admin: true, { name: "Lydia", age: 21 } }  

Justamente el spread operator se encarga de expandir user para evitar el anidamiento.

RESULTADO: { admin: true, name: "Lydia", age: 21 }
*/
