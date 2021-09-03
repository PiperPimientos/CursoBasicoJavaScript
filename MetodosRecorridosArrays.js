/* Ahora vamos a generar un Array cuyo contenido 
no sean strings ni números, sino objetos. Un 
Array con diferentes objetos adentro y como, con 
los métodos de recorrido, podemos obtener 
propiedades especificas de los objetos que están 
dentro de los Array 

1.	Vamos a crear un Array que contenga una lista 
de artículos, con el nombre del artículo y el 
costo del artículo.
2.	Creamos un primer objeto, con sus propiedades 
nombre y costo y les damos un valor, string y 
numero
3.	Luego generar otro objeto después del primer 
objeto con una coma después de finalizar el primer 
objeto
*/

var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 },
    {nombre: "Audifonos", costo: 1700 },

];

/*4.Ahora utilizaremos un método de recorrido 
llamado filter, que nos va filtrar ciertas cosas, 
va a validar si algo es verdad o falso y lo va 
meter en un nuevo Array. Para ello tenemos la 
siguiente sintaxis, en donde generaremos una 
variable, que tendrá como valor el nombre del 
primer Array con el .filter y tendrá como parámetro 
una función que a su vez tendrá como parámetro el 
articulo que vaya filtrando.
5.Le diremos que nos return el articulo que tenga 
como .costo un valor menor o igual a 500 pesos. Y 
si escribimos en la consola articulosFiltrados nos 
mostrara cuales son esos artículos. El filter no 
agrega un nuevo Array, solo agrega a un nuevo 
Array los artículos que cumplieron la validación. */

var articulosFiltrados = artículos.filter(function(){
    return articulo.costo <= 500

});

/* 1.Otro método que nos ayudara es el método Map, 
que nos va ayudar a mapear ciertos artículos. Nos 
va generar un nuevo Array no va modificar el que 
ya tenemos.
2.Es básicamente la misma sintaxis que filter, 
pero le diremos que nos regrese de todos los 
artículos, el .nombre */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

/*En resumen el filter nos ayuda a filtrar cosas 
especificas del Array. El map nos mapea todo el
contenido del Array y nos trae lo que buscamos, que 
es solo los nombres de los artículos. */

/* Ahora veremos TRES metodos mas, el .find(), el
forEach() y el .some() 

1. El primer método que tenemos es el método 
.find() para ello tomaremos el ejemplo del Array de 
la clase pasada
2. el find() tampoco modificara el Array inicial, 
va generar uno nuevo, con el valor que le estoy 
pasando y validara un true o false, en caso de que 
el articulo exista o no exista.
3. Utilizaremos la misma sintaxis de los métodos 
anteriores pero si por ejemplo queremos buscar el 
nombre de un articulo, utilizaremos el operador 
estrictamente igual === de la palabra que queremos 
que el articulo busque, que en este caso será laptop
4.	Si lo mandamos a llamar nos damos cuenta que 
este nuevo Array ya tiene un articulo que es Laptop 
de costo 20000
*/

var encuentraArticulo = artículos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

/* 1. Otro método que utilizaremos es el .forEach(),
a diferencia de los anteriores, no va generar un 
nuevo Array, solo va hacer el filtrado del primer 
Array y nos va filtrar cosas
2. La sintaxis cambia, porque al no generar un 
nuevo Array tenemos que llamar el que ya existía
3. Luego todo es igual, dentro del forEach 
declararemos una función que tendrá como parámetro 
articulo
4. Con un console.log le vamos a pedir que nos 
imprima nada mas el nombre de los articulos que 
tiene este Array con articulos.nombre */

articulos.forEach(function(articulo){
    console.log(articulos.nombre)
});

/* 1. El nuevo método es el .some() que nos va 
regresar una validación de verdadero o falso para 
los articulos que cumplan esa validación
2. Tambien va generar un nuevo Array, por lo que 
tienen la sintaxis de los tres primeros métodos de 
recorrido
3. La diferencia es que al llamar el método nos va 
traer un true, or false, porque le estamos diciendo 
que queremos que nos regresen si existen por 
ejemplo articulos menores o iguales a 700 */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});



