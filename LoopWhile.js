/*Con el mismo ejemplo de los Loops For y For of, 
vamos a ver que es el while. Lo primero es 
declarar nuestro Array, luego nuestra función 
de saludarEstudiante y pasandole como 
parámetro al estudiante que vamos a saludar, 
luego el console log con el string y la 
variable concatenada. Luego utilizaremos el 
while, y le diremos que mientras el length de 
nuestro Array sea mayor a 0, lo que este 
adentro del while, va pasar. Dentro del while 
generamos una variable llamada estudiante que 
tendrá como valor el Array de 
estudiantes .shift. Recordemos que el 
shift va sacando elementos del Array cada que 
se cumpla un loop y, finalmente, mandamos a 
llamar nuestra función saludarEstudiantes con 
el parámetro de nuestra variable estudiante */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//Imprime los saludos a cada estudiante

/* Para fijarnos mas a detalle, si queremos 
ver como es que el método shift va sacando 
elementos del Array hasta que el length del 
Array ya no es mayor a 0, colocamos un 
console.log llamando el Array y miramos como 
se ejecuta */

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}