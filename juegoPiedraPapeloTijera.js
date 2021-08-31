/*este es un juego de piedra, papel o
tijera. Introducelo en la consola
del navegador y despues de donde dice
JUEGA AQUI, aprieta enter y escribe
game(tu eleccion, la de la maquina)*/

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";



var game = function(user, pc) {
    if (
        (user === tijera && pc === papel) || 
        (user === papel && pc === piedra) || 
        (user === piedra && pc === tijera) 

    ) {
        console.log("Ganaste con " + user + " y Pc perdio con " + pc);
    } else if (user === pc) {
        console.log("Quedaron empatados");
    } else {
        console.log("Pediste con " + user + " y Pc gano con " + pc);
    }

}
//JUEGA AQUI
