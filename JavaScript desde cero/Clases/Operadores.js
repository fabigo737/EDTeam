/**
 * tipos de datos
 * Number  50 o 50.365
 * String 'Hola' - Cadena de caracteres
 * Bolean True o False
 * 
 * TIPOS DE DATOS - Coleccion de datos 
 * Array (Arreglo) ['Jose', 'Wildys', 'Fabian', 'Julian', 'Gladys']
 * identificador y valor ['Jose', 'Wildys', 'Fabian', 'Julian', 'Gladys']
 * 
 * 
 * Objectos
 * {
    nombre: 'Fabian'
    apellido: 'De Gouveia'
}


* Nulo null



*undefined
 */



/**
 * Operadores de asignacion =
 * 
 * Operadores aritmeticos + - * / % 
 */



let nombre = 'Fabian'
let apellido = 'De Gouveia'

let nombreCompleto = nombre+' '+apellido

console.log(nombreCompleto);


// template string


let nickname = `Hola ${nombre} ${apellido}, un saludo a todos`
console.log(nickname);



let a = 50
let b = '50'

console.log(a != b)



/**
 * OPERADORES LOGICOS
 * 
 * 
 * AND (&&)
 * OR (||)
 */

let a1 = 10
let b1 = 20
let c1 = 30

let resp = (b1 < a1) || (b1 < c1)

console.log(resp)



// OPERADORES UNARIOS

let a2 = 10

a2++

console.log(a2);


//OPERADORES TERNARIOS

let a3 = 5
let b3 = 8

let c3 = b3 < a3? 'Es verdad' : 'Esto es rotundamente falso'


console.log(c3);


// TYPE COERCION 
// Not a Number


let a4 = 521
let b4 = '400'

console.log(a4+b4);