// ¿Qué imprime este código?

!!null;
!!'';
!!1;



/* El operador !! realiza una doble negación.

RESULTADO: false false true

-En el primer caso, por coerción de tipos, null es un valor falsy, si lo negamos 2 veces, tendríamos false.
- En el segundo caso, por coerción de tipos, "" es un valor falsy, si lo negamos 2 veces tendríamos false.
- El tercer caso, y nuevamente por coerción de tipos, el valor 1 es un valor truthy, si lo negamos 2 veces, obtendremos true. */