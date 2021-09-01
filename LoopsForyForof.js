/*. El Ciclo es una manera 
rápida y sencilla de hacer que una 
tarea se repita, sin tener que hacerlo 
de forma manual.

Comenzaremos con este ejemplo que
se puede ejecutar en la consola

1.Array que se llame estudiantes
2.funcion: Cada vez que agregue un nuevo
estudiante al array la funcion, el loop
lo saludara de forma automatica
3.Agregar un loop for()*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
/*esta funcion recibe parametro: estudiante
y con la forma de ` ` haremos un string y
llamaremos una variable para que se imprima
todo junto*/
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
/*Sintaxis de for: es muy similar a trabajar
una funcion, dentro de los parentesis
trabajaremos una variable i, que de
forma sintaxica, casi siempre sera asi. Para
este caso i sera igual a 0 */
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
/*Entonces la lógica de esta validación es: 
mientras la variable i sea menor a la longitud 
completa de nuestro Array de estudiantes, se 
aumentara por un numero con un i++.

Si esta condicion se cumple, mandamos a llamar 
nuestra funcion de saludar estudiantes
mandando a llamar nuestro Array en la posicion
de i.

Es decir que como i es igual a 0 y el length
es 4, entonces va mandar a llamar la funcion
saludarEstudiantes. El i++ sirve para que
despues de saluda a maria i vaya aumentando
un valor en el index, hasta que i sea igual
que 4 en donde ya el loop se romperia y 
no nos traeria a nadie*/

//Ahora veremos otra forma de hacerlo

/*El mismo ejemplo, pero en for vamos a 
trabajar otra opción. Con una estructura muy 
similar pero ocupando otra variable llamada 
estudiante of estudiantes. Es decir, que 
tenemos un Array de estudiantes y vamos a 
llamar cada estudiante de ese Array de 
estudiantes. Al final mandamos a llamar 
nuestra funcion de saludarEstudiantes le 
pondremos como parámetro la var (estudiante) */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
