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

/* 6.Otro método que nos ayudara es el método Map, 
que nos va ayudar a mapear ciertos artículos. Nos 
va generar un nuevo Array no va modificar el que 
ya tenemos.
7.Es básicamente la misma sintaxis que filter, 
pero le diremos que nos regrese de todos los 
artículos, el .nombre */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

/*En resumen el filter nos ayuda a filtrar cosas 
especificas del Array. El map nos mapea todo el
contenido del Array y nos trae lo que buscamos, que 
es solo los nombres de los artículos. */




