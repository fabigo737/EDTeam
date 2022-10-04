tablaUsuarios = document.querySelector('#listadeusuarios')

function mostarUsuariosDOM() {
    for (let index = 0; index < listaClientes.length; index++) {
        const element = listaClientes[index];
        let finalUser = element
        listadeusuarios.innerHTML += `
        <tr>
            <td>${element.nombre}</td>
        </tr>
        <tr>
        <td>${element.apellido}</td>
        </tr>
        `

        console.log(finalUser)
    }
}

mostarUsuariosDOM()

// const order = []
// let costoPedido = 0

// const showProducts = () => {
//     console.log(`Codigo de producto - Nombre del Producto - Costo`)
//     products.forEach(product => console.log(`${product.id} - ${product.item} - ${product.cost}`))
// }


// const makeOrder = cod => {
//     if (!cod) return 'Ingrese un codigo valido'
// const busqueda = products.find(products => products.id === cod)
//     if (!busqueda) return 'Producto no existe'

//     order.push(busqueda)
//     console.log('Su producto esta en el carrito ahora, Su pedido es');
//     return order

// }

// const seeOrder = () => order


// const calCost = () => {
//     let costo = 0
//     for (products of order) {
//         costoPedido += products.cost
//     }
//     costoPedido = costo
//     return costoPedido
// }