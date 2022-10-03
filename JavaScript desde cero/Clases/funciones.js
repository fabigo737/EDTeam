// son acciones

function saludar(nombre) {
    console.log(`Hola ${nombre} golondrina`);
}

saludar('Alexis lozada')
/////////////////////////////////////////////////////////

function obtenerNombreCompleto(nombre, apellido) {
    let nombreCompleto = `${nombre} ${apellido}`
    return nombreCompleto
}

console.log(obtenerNombreCompleto('Fabian', 'De Gouveia'))
///////////////////////////////////////////////////////////

// funciones de primera clase 

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
let ambosNames = getFullName('Wildys', 'Hernandez')
console.log(ambosNames);


/// o tambien puede usar

let ambosNames2 = getFullName
console.log(ambosNames2('Gladys', 'Lomelly'));


////////////////////////////////////////////////////////////

// Funciones anonimas
// almacena la funcion en la variable, no el resultado
let sumar = function (a, b, c) {
    return a+b+c
}
let result = sumar (2, 6, 8)
console.log(result);

// expresion
(function(a, b, c){
    return a+b+c
}(2, 3, 5))
// arriba es un metodo ya no usdado

////////////////////////////////////////////////////////////////

// Funciones constantes

const regards = function(nombre){
    console.log(`Hola ${nombre}, como estas?`)

}
console.log(regards('Juan'));
console.log(regards('Fabian'));


/////////////////////////////////////////
// Scope

let nombreS = 'Fabian'
nombreS = 'Wildys'

function saludarS(nombreS){
    console.log(`Hola ${nombreS}`)
}

saludarS('Gladys')
console.log(nombreS);

/////////////////////////////

// Funciones de flecha desde EMCA Script 6 =>
// permite simplificar la sintaxis de las funciones

const sumarElementos = function(f, h){
    return f+h
}

// ahora simplificado seria:
const sumarElementosS = (f, h) => f+h

console.log(sumarElementos(5,4));
console.log(sumarElementosS(5,20));


const kregards = nombre => `Hola ${nombre}, good morning`
console.log(kregards('Fabian'));
