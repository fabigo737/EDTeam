/**
 * Colecciones de datos
 */
// Funciones son solo funciones
// metodos son funciones oriento a objectos

/////////////////////////////////

// Arrays

let amigos = ['pedro', 'daniel', 'juanita', 'tayra']
console.log(amigos);


//agregar elemento al array
amigos.push('Waleska')
console.log(amigos);

//quitar elemntos del array
amigos.pop()
console.log(amigos);

//Partir nuestro array en 2
console.log(amigos.slice(0, 2));


// for each vs for
// metodo largo
for (let i = 0; i<amigos.length; i++){
    console.log(amigos[i])
}

amigos.forEach(function(amigo) {
    console.log(amigo);
})

amigos.forEach(amigo => {
    console.log(amigo);
})

amigos.forEach(amigo => console.log(amigo))

///////////////////////////////////////
// foreach vs Map

let datosfriends = amigos.map(amigo => `Hola ${amigo}`)

console.log(datosfriends);

/////////////////////////////////////////


// filter

let numeros = [10, 22, 543, 2323, 12, 564]
let nuevavar = numeros.filter(num => num>20)
console.log(nuevavar);

/////////////////////////////////////////


//find - devuelve el primer dato que cumpla con la validacion
let numerosf = [10, 22, 543, 2323, 12, 564]
let nuevavarf = numerosf.find(num => num>39)
console.log(nuevavarf);


//Include
let numerosI = [10, 22, 543, 2323, 12, 564]
let nuevavarI = numerosI.includes(12)
console.log(nuevavarI);

//Some
let numerosS = [10, 22, -543, 2323, 12, 564]
let nuevavarS = numerosS.some(num2 => num2<0)
console.log(nuevavarS);


//Every - si todos cumple con una condicion
let numerosE = [10, 22, 543, 2323, 12, 564]
let nuevavarE = numerosE.every(num2 => num2>0)
console.log(nuevavarE);


////////////////////////////////////////////////////////

// manipular strings

//slice
let textoStrings = 'Fabian Gabriel De Gouveia Gomez'
let datoString = textoStrings.slice(3, 14)
console.log(datoString);

// split lo devuelve como array
let textoStringsS = 'Fabian Gabriel De Gouveia Gomez'
let datoStringS = textoStringsS.split(' ')
console.log(datoStringS);

//otras funciones
let textoStringsSe = 'Fabian Gabriel De Gouveia Gomez'
let datoStringSe = textoStringsSe
console.log(datoStringSe.toLocaleLowerCase());
console.log(datoStringSe.toUpperCase());
console.log(datoStringSe);


//////////////////////////////////////////////////////

//OBJECTOS

let student = {
    nombre: 'Wildys',
    ciudad: 'Bogota',
    edad: 22,
    sexAnal: false
}

console.log(student['edad']);
console.log(student.edad);

let valores = Object.values(student)
console.log(valores);

let valores2 = Object.keys(student)
console.log(valores2);


//////////////////////////////////////////////////////
// Math y date

const valorM = Math.random()*10
console.log(valorM);


const valorD = new Date()
console.log(valorD.getUTCDate())