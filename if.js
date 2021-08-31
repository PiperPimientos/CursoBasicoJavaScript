/*En esta clase vamos a ver que son 
las condicionales y, especificamente, 
el if, porque más adelante veremos 
otro tipo de condicionales*/

/*Vamos primero con el if, dentro
de los parentesis la condicion, 
dentro de las llaves, que es lo que
pasa si la condicion se cumple

if () {

}

Ahora lo haremos con un ejemplo,
en el que si la condicion es true
pues toda condicional se ejecutaria,
para ello pondremos un console.log
que diga hola*/

if (true) {
    console.log("Hola");
}

//Aqui la consola imprime el "Hola"

if (false) {
    console.log("Hola");
}

//Aqui la consola no imprime nada

if (false) {
    console.log("Hola");
}else {
    console.log("soy falso");
}

//Aqui la consola imprime soy falso

if (false) {
    console.log("")
}

/* Ahora haremos un ejemplo con el
else if, en el que le diremos al 
usuario si puede votar por 1st time
si puede votar de nuevo o si aun
no puede votar */

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, sera tu 1ra votacion");   
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

/*La consola imprime "Puedes votar,
sera tu primera votacion".

Pero ahora veremos que también podemos
tener las condiciones que queramos
despues y antes de un if, else,
respectivamente*/

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, sera tu 1ra votacion");   
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log
}

/* Ahora, tenemos el Operador Ternario
que es practicamente generar un if y
un else, en la misma linea*/

condition ? true : false;

//ejemplo

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy uno"

/*Console.log(resultado);
impresion: Si soy un uno
pero si cambiamos el valor
de la var numero, en resultado sera
impresion: No soy uno*/




