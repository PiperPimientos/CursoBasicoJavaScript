/* Para traer un carro por ejemplo, tendríamos 
que traer una variable llamada carro y 
agregarle características, como su motor, el 
modelo, el numero de asientos, etc. 
Cual es la sintaxis de un objeto?
1.	Generar una variable que tenga como valor 
un objeto { }
2.	Agregarle características, que son 
combinaciones entre palabras clave y valores. 
Ejemplo: Palabra clave: marca. Valor: Mazda, 
si quiero darle mas características a este 
objeto, tengo que darle coma e irme a la 
siguiente palabra clave. */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
            
}

//Si llamamos miAuto, sale el objeto completo

//Si queremos acceder a algo especifico
//Ejemplo: miAuto.marca
//Imprime: "Toyota"

/* Tambien, dentro de la estructura de un 
objeto, podemos hacer que una de las 
propiedades sea una función y esa función 
puede hacer cosas con otras propiedades de 
ese objeto. Vamos a trabajar el mismo ejemplo 
y le agregaremos una propiedad que será una 
función, a esta función se le llama método, 
lo hacemos asi:
1.	El mismo ejemplo
2.	Generamos otra propiedad que se llame 
detalleDelAuto con el valor function y la 
sintaxis de una función y pondremos 
un console.log y nos traiga todo el 
aglomerado del modelo y el year de ese auto, 
con un string en cocatenacion de esas dos 
variables */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.year}`);
    }
        
}

//Accedemos al metodo como una funcion:
//miAuto.detalleDelAuto();
//print: Auto Corolla 2020

/* El this es una variable que hace referencia
al objeto, es decir a miAuto u objeto padre,
y nos traera el valor de ese objeto
que le pidamos, como this.modelo o this.marca */




