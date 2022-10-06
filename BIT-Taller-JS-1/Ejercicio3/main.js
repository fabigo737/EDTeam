let idventa = 0
let montoventa = 0
let ventaInput = document.querySelector('.montoinput')
let tablavisible = 0
let subtotal = 0
let totalDescuento = 0
let granTotal = 0

function calcularVenta(e) {
    if (e.key == 'Enter'){
        idventa = idventa+1
        montoventa = Number(ventaInput.value)
        descuento = Number((montoventa*0.07).toFixed(2))
        toPay = Number((montoventa*0.93).toFixed(2))
        document.querySelector('.tableprimera tbody').innerHTML += `<tr><th scope="row">${idventa} </th> <td> $ ${montoventa} </td> <td>$${descuento}</td> <td>$${toPay}</td> </tr>`
        document.querySelector('.table').style.visibility = 'visible'
        document.querySelector('.tablesegunda').style.visibility = 'visible'

        subtotal = Number((montoventa+subtotal).toFixed(2))
        totalDescuento = Number((descuento+totalDescuento).toFixed(2))
        granTotal = Number((toPay+granTotal).toFixed(2))

    
        document.querySelector('.tablesegunda tbody').innerHTML = `
        <tr>
        <td>$${subtotal} </td> 
        <td>$${totalDescuento}</td> 
        <td>$${granTotal}</td> 
        </tr>`
        ventaInput.value = ''
    }
}