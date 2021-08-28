//Ejemplo de Scope Global

var nombre = "Felipe";

function fun(){
    //Ejemplo de Scope Local
    var apellido = "Restrepo";
    return nombre + " " + apellido
}

/*Ejemplo de ejecución de funcion
desde scope global*/

fun(); // "Felipe Restrepo"

/*Ejemplo de ejecución de funcion
desde scope local*/

console.log(apellido); // apellido is not defined


