/*El switch es una manera de validar casos,
muy parecido a lo que seria el if, pero
por casos, si ninguno de los casos es verdad
entrariamos en una etapa de default que seria
una clase de else

La sintaxis es asi:
Una variable
switch con la variable que queremos validar
case con el valor de la variable
console.log que imprima que pasa si se valida
y luego salirnos del caso, con el break,
si el caso efectivamente se valido. Y, al
final, si no se cumplio ningun caso, genero
el default. Si no pongo los break, se validarian
todos los casos y no tendria logica
*/

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy diez");
        break;
    default:
        console.log("No se cumplio ningun caso");
}

//Tambien podemos validar varios casos