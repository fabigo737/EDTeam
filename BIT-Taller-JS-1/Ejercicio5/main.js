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
let vagon4 = 0
let vagon5 = 0
let vagon6 = 0
let vagon7 = 0
let vagon8 = 0
let vagon9 = 0
let vagon10 = 0
const printVagon1 = document.querySelector('#vagon1 table tbody')
const printVagon2 = document.querySelector('#vagon2 table tbody')
const printVagon3 = document.querySelector('#vagon3 table tbody')
const printVagon4 = document.querySelector('#vagon4 table tbody')
const printVagon5 = document.querySelector('#vagon5 table tbody')
const printVagon6 = document.querySelector('#vagon6 table tbody')
const printVagon7 = document.querySelector('#vagon7 table tbody')
const printVagon8 = document.querySelector('#vagon8 table tbody')
const printVagon9 = document.querySelector('#vagon9 table tbody')
const printVagon10 = document.querySelector('#vagon10 table tbody')
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
    if (selecionVagon.value == 3) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon3 = vagon3+1
        }else{
            alert('Vagon 3 lleno')
        }
    }
    if (selecionVagon.value == 4) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon4 = vagon4+1
        }else{
            alert('Vagon 4 lleno')
        }
    }
    if (selecionVagon.value == 5) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon5 = vagon5+1
        }else{
            alert('Vagon 5 lleno')
        }
    }
    if (selecionVagon.value == 6) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon6 = vagon6+1
        }else{
            alert('Vagon 6 lleno')
        }
    }
    if (selecionVagon.value == 7) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon7 = vagon7+1
        }else{
            alert('Vagon 7 lleno')
        }
    }
    if (selecionVagon.value == 8) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon8 = vagon8+1
        }else{
            alert('Vagon 8 lleno')
        }
    }
    if (selecionVagon.value == 9) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon9 = vagon9+1
        }else{
            alert('Vagon 9 lleno')
        }
    }
    if (selecionVagon.value == 10) {
        if(vagon2 <10){
            arreglo.push(usuarios)
            vagon10 = vagon10+1
        }else{
            alert('Vagon 10 lleno')
        }
    }
    printVagon1.innerHTML = ''
    printVagon2.innerHTML = ''
    printVagon3.innerHTML = ''
    printVagon4.innerHTML = ''
    printVagon5.innerHTML = ''
    printVagon6.innerHTML = ''
    printVagon7.innerHTML = ''
    printVagon8.innerHTML = ''
    printVagon9.innerHTML = ''
    printVagon10.innerHTML = ''
// Esta parte imprime en lista las personas segun el vagon que estan
    arreglo.forEach((usuario)=>{
        if (usuario.vagon == 1) {
            printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 2) {
            printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 3) {
            printVagon3.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 4) {
            printVagon4.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 5) {
            printVagon5.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 6) {
            printVagon6.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 7) {
            printVagon7.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 8) {
            printVagon8.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 9) {
            printVagon9.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (usuario.vagon == 10) {
            printVagon10.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
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
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '3'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon3 = vagon3-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '4'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon4 = vagon4-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '5'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon5 = vagon5-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '6'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon6 = vagon6-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '7'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon7 = vagon7-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '8'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon8 = vagon8-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '9'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon9 = vagon9-1 
              }
        }
        if(usuario.cedula == cedulaUsuarioIn.value && usuario.vagon === '10'){
            if (indexarreglo > -1) { 
                arreglo.splice(indexarreglo, 1)
                vagon10 = vagon10-1 
              }
        }
        printVagon1.innerHTML = ''
        printVagon2.innerHTML = ''
        printVagon3.innerHTML = ''
        printVagon4.innerHTML = ''
        printVagon5.innerHTML = ''
        printVagon6.innerHTML = ''
        printVagon7.innerHTML = ''
        printVagon8.innerHTML = ''
        printVagon9.innerHTML = ''
        printVagon10.innerHTML = ''
    })


    // ESTA FUNCION RE IMPRIME LOS USUARIOS DEL ARRARY
    arreglo.forEach((usuario)=>{ 
          if (usuario.vagon == 1) {
              printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 2) {
              printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 3) {
            printVagon3.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 4) {
            printVagon4.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 5) {
            printVagon5.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 6) {
            printVagon6.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 7) {
            printVagon7.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 8) {
            printVagon8.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 9) {
            printVagon9.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
          if (usuario.vagon == 10) {
            printVagon10.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
          }
        
        })
          progress()

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

const barraprogreso3 = document.querySelector('.vagon3p')
if (vagon3 >=3 && vagon3 <5){ barraprogreso3.classList.add('bg-success');}
if (vagon3 >=5 && vagon3 <7){ barraprogreso3.classList.add('bg-info');}
if (vagon3 >=7 && vagon3 <9){ barraprogreso3.classList.add('bg-warning');}
if (vagon3 >=9){ barraprogreso3.classList.add('bg-danger');}
barraprogreso3.style= `width: ${vagon3*10}%`
barraprogreso3.innerHTML = `${vagon3*10}%`

const barraprogreso4 = document.querySelector('.vagon4p')
if (vagon4 >=3 && vagon4 <5){ barraprogreso4.classList.add('bg-success');}
if (vagon4 >=5 && vagon4 <7){ barraprogreso4.classList.add('bg-info');}
if (vagon4 >=7 && vagon4 <9){ barraprogreso4.classList.add('bg-warning');}
if (vagon4 >=9){ barraprogreso4.classList.add('bg-danger');}
barraprogreso4.style= `width: ${vagon4*10}%`
barraprogreso4.innerHTML = `${vagon4*10}%`

const barraprogreso5 = document.querySelector('.vagon5p')
if (vagon5 >=3 && vagon5 <5){ barraprogreso5.classList.add('bg-success');}
if (vagon5 >=5 && vagon5 <7){ barraprogreso5.classList.add('bg-info');}
if (vagon5 >=7 && vagon5 <9){ barraprogreso5.classList.add('bg-warning');}
if (vagon5 >=9){ barraprogreso5.classList.add('bg-danger');}
barraprogreso5.style= `width: ${vagon5*10}%`
barraprogreso5.innerHTML = `${vagon5*10}%`

const barraprogreso6 = document.querySelector('.vagon6p')
if (vagon6 >=3 && vagon6 <5){ barraprogreso6.classList.add('bg-success');}
if (vagon6 >=5 && vagon6 <7){ barraprogreso6.classList.add('bg-info');}
if (vagon6 >=7 && vagon6 <9){ barraprogreso6.classList.add('bg-warning');}
if (vagon6 >=9){ barraprogreso6.classList.add('bg-danger');}
barraprogreso6.style= `width: ${vagon6*10}%`
barraprogreso6.innerHTML = `${vagon6*10}%`

const barraprogreso7 = document.querySelector('.vagon7p')
if (vagon7 >=3 && vagon7 <5){ barraprogreso7.classList.add('bg-success');}
if (vagon7 >=5 && vagon7 <7){ barraprogreso7.classList.add('bg-info');}
if (vagon7 >=7 && vagon7 <9){ barraprogreso7.classList.add('bg-warning');}
if (vagon7 >=9){ barraprogreso7.classList.add('bg-danger');}
barraprogreso7.style= `width: ${vagon7*10}%`
barraprogreso7.innerHTML = `${vagon7*10}%`


const barraprogreso8 = document.querySelector('.vagon8p')
if (vagon8 >=3 && vagon8 <5){ barraprogreso8.classList.add('bg-success');}
if (vagon8 >=5 && vagon8 <7){ barraprogreso8.classList.add('bg-info');}
if (vagon8 >=7 && vagon8 <9){ barraprogreso8.classList.add('bg-warning');}
if (vagon8 >=9){ barraprogreso8.classList.add('bg-danger');}
barraprogreso8.style= `width: ${vagon8*10}%`
barraprogreso8.innerHTML = `${vagon8*10}%`

const barraprogreso9 = document.querySelector('.vagon9p')
if (vagon9 >=3 && vagon9 <5){ barraprogreso9.classList.add('bg-success');}
if (vagon9 >=5 && vagon9 <7){ barraprogreso9.classList.add('bg-info');}
if (vagon9 >=7 && vagon9 <9){ barraprogreso9.classList.add('bg-warning');}
if (vagon9 >=9){ barraprogreso9.classList.add('bg-danger');}
barraprogreso9.style= `width: ${vagon9*10}%`
barraprogreso9.innerHTML = `${vagon9*10}%`

const barraprogreso10 = document.querySelector('.vagon10p')
if (vagon10 >=3 && vagon10 <5){ barraprogreso10.classList.add('bg-success');}
if (vagon10 >=5 && vagon10 <7){ barraprogreso10.classList.add('bg-info');}
if (vagon10 >=7 && vagon10 <9){ barraprogreso10.classList.add('bg-warning');}
if (vagon10 >=9){ barraprogreso10.classList.add('bg-danger');}
barraprogreso10.style= `width: ${vagon10*10}%`
barraprogreso10.innerHTML = `${vagon10*10}%`

}