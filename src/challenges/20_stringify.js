// ¿Qué imprime este código?

const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // ?



/*
JSON.stringify puede recibir un 2do parámetro opcional denominado replacer, puede ser una función o un arreglo, 
y se encarga de hacer un filtro de las propiedades del objeto que deseamos convertir a string, en el ejemplo 
solo deseamos convertir las propiedades ["level", "health"], ignorando username.

RESULTADO: "{"level":19, "health":90}"
*/
