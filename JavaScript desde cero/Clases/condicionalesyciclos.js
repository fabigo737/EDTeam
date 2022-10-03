// if (condicion) {
//     accion
// }


let persona = 'Wildys Lomelly'
let edad = 17

if (edad >= 18 && edad <= 65) {
    console.log(`${persona}, puedes venir a la fiesta`);
} else if (edad < 18) {
    console.log('No puedes venir a la fiesta, debes ser mayor de edad');
} else {
    console.log('Eres un cucho')
}



//////////////////////////////////////////////////////////////////////////////

//CONDICIONALES MULTIPLES

let personalidad = 'Fuerte'


switch (personalidad) {
    case 'Fuerte':
        console.log('Eres Goku')
        break
    case 'veloz':
        console.log('Eres vegeta')
        break
    case 'juegeton':
        console.log('Eres trunk')
        break
    default:
        console.log('Eres sendo mamaguevo');

}
//////////////////////////////////////////////////////

// CICLOS (BUCLES O LOOPS)

// for (valor de inicializacion; condicion; incremento de valor)

let myName = 'Wildys'
for (let i = 0; i < myName.length ; i++){
    console.log(myName[i]);
}


// Ciclo While

let zapatos = 10

while (zapatos > 0){
    zapatos--
    console.log(`Regalamos zapatos, nos quedan ${zapatos}`);
}