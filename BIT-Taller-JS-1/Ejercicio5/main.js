// Esta funcion solo hace el focus para la cedula del pasajero
function nextStep(e){
    if (e.key == 'Enter') {
        document.querySelector('#cedulaUsuarioIn').focus()
    }
}
const nombreUsuarioIn = document.querySelector('#nombreUsuarioIn')
const cedulaUsuarioIn = document.querySelector('#cedulaUsuarioIn')
let vagon1 = 0
let vagon2 = 0
let vagon3 = 0
const printVagon1 = document.querySelector('#vagon1 table tbody')
const printVagon2 = document.querySelector('#vagon2 table tbody')
let selecionVagon = document.querySelector('.form-select')
const arreglo = []

function subirPasajero(){    
    let usuarios = {name: nombreUsuarioIn.value, cedula: cedulaUsuarioIn.value, vagon: selecionVagon.value}
    arreglo.push(usuarios)
    printVagon1.innerHTML = ''
    printVagon2.innerHTML = ''
// Esta Parte cambia el valor de la variable a ver si esta lleno o no el vagon
    if (selecionVagon.value == 1){
        vagon1 = vagon1+1
    }
    if (selecionVagon.value == 2){
        vagon2 = vagon2+1
    }
// Esta parte imprime en lista las personas segun el vagon que estan
    arreglo.forEach((usuario)=>{
        if (usuario.vagon == 1) {
            printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 2) {
            printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
    nombreUsuarioIn.value = ''
    cedulaUsuarioIn.value = ''
    selecionVagon.value = 0
    document.querySelector('#nombreUsuarioIn').focus()       

    })
console.log(`En el vagon 1 hay ${vagon1} personas`)
console.log(arreglo)
progress()
}
// ESTA FUNCION ES PARA BAJAR A LOS PASAJEROS

function bajarPasajero() {
    console.log(arreglo)
    console.log('DEPUES DE LA FUNCION')
    arreglo.forEach(usuario=> {
        if(usuario.vagon == 1){
            const indexarreglo = arreglo.map(e => e.cedula).indexOf(cedulaUsuarioIn.value)// Busca en indice de la posicion de la cedula en el arr
            if (indexarreglo > -1) { // only splice array when item is found
                arreglo.splice(indexarreglo, 1)
                vagon1 = vagon1-1 // 2nd parameter means remove one item only
              }
        }else if(usuario.vagon == 2){
            const indexarreglo = arreglo.map(e => e.cedula).indexOf(cedulaUsuarioIn.value)// Busca en indice de la posicion de la cedula en el arr
            if (indexarreglo > -1) { // only splice array when item is found
                arreglo.splice(indexarreglo, 1)
                vagon2 = vagon2-1 // 2nd parameter means remove one item only
              }
        }
        printVagon1.innerHTML = ''
        printVagon2.innerHTML = ''
    })
    // ESTA FUNCION RE IMPRIME LOS USUARIOS DEL ARRARY
    arreglo.forEach((usuario)=>{ 
          if (usuario.vagon == 1) {
              printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 2) {
              printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }})
          progress()
}






// ESTA FUNCION LO QUE HACE ES CONTROLAR LAS BARRAS DE PROGRESO
function progress() {
let vagon1cap = vagon1*10
let vagon2cap = vagon2*10
const barraprogreso1 = document.querySelector('.vagon1p')
if (vagon1cap >=25 && vagon1cap <50){ barraprogreso1.classList.add('bg-success');}
if (vagon1cap >=50 && vagon1cap <75){ barraprogreso1.classList.add('bg-info');}
if (vagon1cap >=75 && vagon1cap <95){ barraprogreso1.classList.add('bg-warning');}
if (vagon1cap >=95){ barraprogreso1.classList.add('bg-danger');}
barraprogreso1.style= `width: ${vagon1cap}%`
barraprogreso1.innerHTML = `${vagon1cap}%`
const barraprogreso2 = document.querySelector('.vagon2p')
if (vagon2cap >=25 && vagon2cap <50){ barraprogreso2.classList.add('bg-success');}
if (vagon2cap >=50 && vagon2cap <75){ barraprogreso2.classList.add('bg-info');}
if (vagon2cap >=75 && vagon2cap <95){ barraprogreso2.classList.add('bg-warning');}
if (vagon2cap >=95){ barraprogreso2.classList.add('bg-danger');}
barraprogreso2.style= `width: ${vagon2cap}%`
barraprogreso2.innerHTML = `${vagon2cap}%`
}







var array = [{name: 'ramiro', vagon: 1},{name: 'hola', vagon: 1}, {name: 'hola', vagon: 3}, {name: 'hola', vagon: 3}, {name: 'hola', vagon: 2}]

