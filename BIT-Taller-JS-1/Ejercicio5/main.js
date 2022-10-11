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
let vagones = 'vagon'+selecionVagon.value


function subirPasajero(){    
    let usuarios = {name: nombreUsuarioIn.value, cedula: cedulaUsuarioIn.value, vagon: selecionVagon.value}
    if (selecionVagon.value == 1) {
        if(vagon1 <10){
            arreglo.push(usuarios)
            vagon1 = vagon1+1
        }else{
            alert('Vagon 1 lleno')
        }
    }
    if (selecionVagon.value == 2) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon2 = vagon2+1
        }else{
            alert('Vagon 2 lleno')
        }
    }
    printVagon1.innerHTML = ''
    printVagon2.innerHTML = ''
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
progress()
}
// ESTA FUNCION ES PARA BAJAR A LOS PASAJEROS

function bajarPasajero() {
    arreglo.forEach(usuario=> {
        const indexarreglo = arreglo.map(e => e.cedula).indexOf(cedulaUsuarioIn.value)// Busca en indice de la posicion de la cedula en el arr
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '1'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon1 = vagon1-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '2'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon2 = vagon2-1 
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

          console.log(`la cantida en vagon 1 es: ${vagon1} - la cantida en vagon 2 es:  ${vagon2}`)
}

function findpasajero() {
    const usuarioindex = arreglo.map(x => x.cedula).indexOf(cedulaUsuarioIn.value)
    const nuevoarrauser = []
    if (usuarioindex > -1 ){
        nuevoarrauser.push(arreglo[usuarioindex])
        const xx = nuevoarrauser[0]
        Swal.fire('Pasajero ' + xx.name + ' con cedula ' + xx.cedula + ' esta en el vagon: ' + xx.vagon)
        arrejemplo.pop()
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario no existe en el sistema',
        })
    }
} 
// ESTA FUNCION LO QUE HACE ES CONTROLAR LAS BARRAS DE PROGRESO
function progress() {
const barraprogreso1 = document.querySelector('.vagon1p')
if (vagon1 >=3 && vagon1 <5){ barraprogreso1.classList.add('bg-success');}
if (vagon1 >=5 && vagon1 <7){ barraprogreso1.classList.add('bg-info');}
if (vagon1 >=7 && vagon1 <9){ barraprogreso1.classList.add('bg-warning');}
if (vagon1 >=9){ barraprogreso1.classList.add('bg-danger');}
barraprogreso1.style= `width: ${vagon1*10}%`
barraprogreso1.innerHTML = `${vagon1*10}%`

const barraprogreso2 = document.querySelector('.vagon2p')
if (vagon2 >=3 && vagon2 <5){ barraprogreso2.classList.add('bg-success');}
if (vagon2 >=5 && vagon2 <7){ barraprogreso2.classList.add('bg-info');}
if (vagon2 >=7 && vagon2 <9){ barraprogreso2.classList.add('bg-warning');}
if (vagon2 >=9){ barraprogreso2.classList.add('bg-danger');}
barraprogreso2.style= `width: ${vagon2*10}%`
barraprogreso2.innerHTML = `${vagon2*10}%`
}