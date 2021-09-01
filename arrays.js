/*Recordemos que los Arrays son
estructura de datos, tipo objetos
y su sintaxis incluye los []. Pero
veamoslo acontinuacion, en donde
la variable frutas, tendra el valor
de Array*/

var frutas = [];

//Pero si le anadimos valores al Array:

var frutas = ["Manzana", "Platano", "Cereza"]
//Si quiero que me devuelva el array
console.log(frutas);
//Nos devuelve que son 3 elementos y cuales

//Si solo queremos ver la longitud del array
console.log(frutas.length);
//devuelve: 4

/*Si a mi me interesa acceder a un solo 
elemento lo hago con el siguiente console.log
y coloco el numero que seria el elemento
especifico en la lista, comenzando desde el
0, pues en programacion, se cuenta desde el 0*/
console.log(frutas[0]);
//devuelve: Manzana

/*Cuando hablamos de Arrays, 
hablamos de dos tipos de elementos 
que son métodos. El primero, es un 
método que nos va ayudar a mutar el contenido 
del Array, es decir agregar o quitar elementos:*/

var masFrutas = frutas.push("Uvas");

/*si llamamos 'frutas' en el navegador nos 
devuelve todo y al final, el elemento uvas

Este método se llama push, que va añadir 
métodos, elementos, al final del Array y 
este elemento siempre se va ver al final del 
array

Ahora veremos el metodo pop que nos servira
para sacar ese ultimo elemento que agregamos*/

var ultimo = frutas.pop("Uvas");

/*Si mandamos a llamar 'frutas', nos va salir
de nuevo la lista, hasta cereza

Y si queremos agregar otro elemento, pero
esta vez no al final sino al principio de
la lista:*/

var nuevaLongitud = frutas.unshift("Uvas");

/*Si queremos eliminar el primer elemento de
la lista.

Pero OJO, el primer elemento, asi llamamemos
otro, se elimina el primero*/

var borrarFruta = frutas.shift("Uvas");

/*finalmente tenemos el metodo indexOf
que nos ayudara a saber la posicion del
elemento que le pasemos de ese Array,
suponiendo que no sabemos su posicion
que va desde 0 a X*/

var posicion = frutas.indexOf("Cereza");

/*Si escribimos posicion en la consola
nos dice que esta en el index 3: 
Uvas, Manzana, Platano, Cereza*/






