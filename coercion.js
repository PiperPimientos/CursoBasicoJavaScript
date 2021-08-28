/* Ejemplo 1: coerción implicita 
Recordemos que si tenemos: */

4 + "7"; // 47 por concatenación de strings en coerción implicita
4 * "7"; // 28 por operacion de una coerción implicita
2 + true; // 3
false - 3; // -3

/* Ejemplo 2: coerción explicita
ya si queremos obligar a que un valor tenga
otro valor. En este caso, declararemos una
variable llamada a que será igual a 20 y queremos
que sea tipo string, para ello tendremos que hacer
una coerción explicita, llamando el metodo String
en una variable c */

var a = 20;
var c = String(a);
//En consola el typeof de c será "String"

// y si queremos reconvertirla a Number

var d = Number(c);
//En consola el typeof de d será "Number"