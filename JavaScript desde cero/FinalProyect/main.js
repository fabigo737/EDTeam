const mostrarMenu = () => {
    menuProductos.forEach(producto => {

        if(producto.cost <= 6000){
        console.log(`${producto.item} - $${producto.cost}`)
    }
    });
}