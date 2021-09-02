/* Vamos a aprender como podemos hacer objetos 
de forma automática, por ejemplo, si tenemos 
una lista de 30 carros. Con esta función 
constructora, generamos un template de un 
objeto, con el que generamos ciertas opciones 
que van a ser sus parámetros y propiedades y 
luego haremos ciertas instancias con un 
operador especial.

Pasos:

1.	Construir un objeto con su estructura.
2.	Pero para tener una lista de 30 carros 
tendríamos que estar cambiando el valor de 
esta propiedad */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.year}`);
    }
        
}

/* 3.	Para hacer una función constructora, 
como su nombre lo indica, tenemos que empezar 
con una function y utilizando su sintaxis, pero 
en auto, tenemos que poner como parámetro las 
propiedades que queremos que tenga el objeto.
4.	Para empezar a armar el template, 
utilizaremos el this, recordando que hará 
referencia a el objeto function auto. En 
resumen: ocupamos la palabra reservada this 
como referencia nuestro objeto, punto, 
palabra reservada marca, que hace referencia 
al parámetro marca. Lo mismo para modelo y 
year */

function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

/* Y ya si queremos construir un objeto nuevo 
con relación a este template:
1.	Construimos una variable con el nombre 
del nuevo objeto que tendrá como valor un 
nuevo operador llamado new, que lo que hace 
es generar una nueva instancia de nuestra 
función constructora, una instancia es 
generar un objeto que deriva de otro objeto. 
Luego del new va el nombre de nuestra 
función(objeto), que es para este caso auto.
2.	Dentro de los paréntesis, comenzaremos a 
darle valor a las propiedades que tiene el 
auto, marca, modelo, year, en forma de 
strings o numero, dependiendo del tipo que 
sea, en el mismo orden. */

var autoNuevo = new auto("Tesla", "Model 3", 2020);

//Si mandamos a llamar nuestro objeto autoNuevo
// Print: todo el objeto autoNuevo

/* RETO: : Hacer un loop en donde vayamos 
agregando nuevos autos a nuestra función 
constructora y se fueran construyendo de forma 
menos manual y mas automática.

Tendremos que construir objeto, función 
constructora y loop y tener una lista de 30 
carros que se vayan construyendo solos. */


