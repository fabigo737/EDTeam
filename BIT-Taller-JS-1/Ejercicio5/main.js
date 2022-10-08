function nextStep(e){
    if (e.key == 'Enter') {
        document.querySelector('#cedulaUsuarioIn').focus()
    }
}

let nombreUsuarioIn = document.querySelector('#nombreUsuarioIn')
let cedulaUsuarioIn = document.querySelector('#cedulaUsuarioIn')
let vagon1 = 0
let vagon2 = 0
let vagon3 = 0
let printVagon1 = document.querySelector('#vagon1 table tbody')
let printVagon2 = document.querySelector('#vagon2 table tbody')
const arreglo = []

function subirPasajero(){
    if (vagon1 <= 1) {
        vagon1 = vagon1+1
        let usuarios = {name: nombreUsuarioIn.value, cedula: cedulaUsuarioIn.value, vagon: 1}
        arreglo.push(usuarios)
        console.log(arreglo)
        printVagon1.innerHTML += `<tr><td>${cedulaUsuarioIn.value}</td><td>${nombreUsuarioIn.value}</td></tr>`
    }else if (vagon2 <=1){
        vagon2 = vagon2+1
        printVagon2.innerHTML += `<tr><td>${cedulaUsuarioIn.value}</td><td>${nombreUsuarioIn.value}</td></tr>`
    }
}

