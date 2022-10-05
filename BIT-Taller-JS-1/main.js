tablaUsuarios = document.querySelector('.resultado-personas')
// Hacer un programa que lea los nombres y las edades de varias personas (n), 
// al finalizar el programa debe mostrar el nombre y la edad de la persona mayor, 
// también el nombre y la edad de la persona menor


// function mostarUsuariosDOM() {
//     for (let i = 0; i < listaClientes.length; i++) {
//         const edades = listaClientes[i].edad;
//         console.log(edades);
//     }
// }

// mostarUsuariosDOM()


let edades = listaClientes.map(function(edad){
    return edad.age
})
console.log(Math.max(...edades))
console.log(Math.min(...edades))