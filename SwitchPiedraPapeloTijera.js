/*este es un juego de piedra, papel o
tijera. Introducelo en la consola
del navegador y despues de donde dice
JUEGA AQUI, aprieta enter y escribe
game(tu eleccion, la de la maquina)*/

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function game(user, pc) {
    switch (true) {
        case (user === tijera && pc === papel):
            console.log("Ganaste con " + user + " y Pc perdio con " + pc);
            break;
        case (pc === tijera && user === papel):
            console.log("Perdiste con " + user + " y Pc gano con " + pc);
            break;
        case (pc === papel && user === piedra):
            console.log("Ganaste con " + user + " y Pc perdio con " + pc);
            break;
        case (user === papel && pc === piedra):
            console.log("Perdiste con " + user + " y Pc gano con " + pc);
            break;
        case (user === piedra && pc === tijera):
            console.log("Ganaste con " + user + " y Pc perdio con " + pc);
            break;
        case (pc === piedra && user === tijera):
            console.log("Perdiste con " + user + " y Pc gano con " + pc);
            break;
        case (pc === piedra && user === piedra):
            console.log("Quedaron empatados");
            break;
        case (pc === tijera && user === tijera):
            console.log("Quedaron empatados");
            break;
        case (pc === papel && user === papel):
            console.log("Quedaron empatados");
            break;
        default:
            console.log("No es valido el juego");
    }
}

/*JUEGA AQUI, en la siguiente linea 
escribe game(user, pc) y reemplaza user y pc
por piedra, papel o tijera*/
