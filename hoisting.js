/*Paso 1: que pasa si primero hago un console log
y luego declaro e inicializo mi variable*/
console.log(miNombre);

var miNombre = "Felipe";

// se imprimirá en consola: undefined


/*Paso 2: que pasa si primero hago un console log
y luego declaro una función*/

hey();

function hey() {
    console.log("Hola " + miNombre);
}

var miNombre = "Felipe "

// se imprimirá en consola: Hola undefined

/*Esto es porque si podemos llamar una función
antes de declararla y va salir Hola, pero al
inicializar la variable miNombre antes de
declararla, saldrá undefined por Hoisting. 
Recordemos que esto solo pasa para las versiones
desde Ecmascript 5 hacia atras.*/