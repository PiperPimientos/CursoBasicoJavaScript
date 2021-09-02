/* Este es el reto de la funcion constructora
en donde generaremos autos en loop */

var autonumero = [];

function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autoLoop = new auto("Tesla", "Model 3", 2020);

for(var i = 0; i < 30; i++) {
    var autoLoop = new auto("Tesla", "Model 3", 2020);
    var masAutos = autonumero.push(autoLoop);
}

console.log(autonumero)

/*Reto no terminado por el momento, la
consola imprime solo auto, ver Curso Practico
Java Script y Curso EcmaScript 6*/