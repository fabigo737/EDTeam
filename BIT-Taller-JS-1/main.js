tablaUsuarios = document.querySelector('.resultado-personas')
// Hacer un programa que lea los nombres y las edades de varias personas (n), 
// al finalizar el programa debe mostrar el nombre y la edad de la persona mayor, 
// también el nombre y la edad de la persona menor


function mostarUsuariosDOM() {
    for (let index = 0; index < listaClientes.length; index++) {
        const element = listaClientes[index];
        let max = Math.max(element.edad)
        let min = Math.min(element.edad)
        tablaUsuarios.innerHTML += `
        <td>${max}</td>
        <td>${min}</td>

        `

        console.log(element)
    }
}

mostarUsuariosDOM()
