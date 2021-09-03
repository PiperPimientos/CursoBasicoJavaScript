/*El método .push() nos permite agregar uno o más 
elementos al final de un array.
A continuación veremos un ejemplo aplicado con un 
array que contiene números: */

//Array inicial
let numArray =[1,2,3,4,5]

// Funcion
function newNum(){
    // Agrego elementos
    numArray.push(6,7)
    /*Reviso el  array que ahora tiene los numeros
    agregados */
    console.log(numArray)
}

//Ejecuto la funcion
newNum()
//print (7) [1, 2, 3, 4, 5, 6, 7]

/* Como podemos ver, al momento de ejecutar la 
función se agregan los números 6 y 7 al array.
Ahora revisemos un ejemplo con strings: */

//Ejemplo con strings

//Array inicial
let txtArray = ["Ana", "Juan", "Diego"]

//Funcion
function addCharacters(){
    //Agrego elementos
    txtArray.push("Chris","Maria")
    //Reviso el array que ahora tiene los num agregados
    console.log(txtArray)
}

//Ejecuto la funcion
addCharacters()
//print (6) ["Ana", "Juan", "Diego", "Chris", "Maria"]


/* Como podemos ver, agregamos dos cadenas de 
strings al ejecutar la función donde tenemos 
txtArray.push(). Es decir, indico el array al que 
voy agregar elementos, uso el método .push(), y 
dentro de .push() indico los elementos que quiero 
agregar al string. Finalmente, el console.log() lo 
uso para revisar en la consola si esto sucedió o no.

.shift()

Ahora pasemos a la otra cara de la moneda donde
necesitamos eliminar un elemento del array. 
.shift() eliminar el primer elemento de un array, 
es decir, elimina el elemento que esté en el índice 
0. */

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

//Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe ser [2,3,4,5]
console.log(array)
//print (4) [2,3,4,5]

/* Si ya entendiste cómo funciona .shift() aplicar 
.pop() te será pan comido 🍞. El método .pop() 
eliminará el último elemento de un array. En este 
sentido, si tenemos un array de 5 elementos, pop() 
eliminará el elemento en el índice 4. */




