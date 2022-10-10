let pedido = []
let costoPedido = 0

let usuario = {
    nombre: 'Fabian',
    edad: 26,
    deuda: 0
}

const mostarMenu = () => {
    console.log(`ID - Nombre producto - Precio`);
    for (let producto of menuProductos) {
        console.log(`${producto.id} - ${producto.item} - $${producto.cost}`)
    }
}

const pedirComida = cod => {
    if (!cod) return 'Ingrese codigo valido'

    const busqueda = menuProductos.find(producto => producto.id === cod)
    if (!busqueda) return 'El producto no existe'

    pedido.push(busqueda)
    console.log('Su producto ha sido agregado');
    return verPedido()
} 


const verPedido = () => pedido


const calcularCosto = () => { 
    let costo = 0
    for (producto of pedido){
        costo += producto.cost
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `Hola ${usuario.nombre}, el total a pagar de tu pedido es: $${usuario.deuda}`
}

const pagarPedido = montoEntregado => {
    if (montoEntregado < usuario.deuda){
        return `no te alcanza`
    } else if (montoEntregado === usuario.deuda){
        usuario.deuda = 0
        return `Gracias por su compra`
    } else{
        usuario.deuda = 0
        return `Gracias por su compra, tu cambio es ${montoEntregado - usuario.deuda}`
    }
}