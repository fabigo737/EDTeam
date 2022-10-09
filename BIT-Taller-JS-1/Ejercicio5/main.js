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
    arreglo.forEach((usuario)=>{
        if (usuario.vagon == 1) {
            printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
            vagon1 = vagon1+1
        }
        if (usuario.vagon == 2) {
            printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
            vagon2 = vagon2+1
        }

        nombreUsuarioIn.value = ''
        cedulaUsuarioIn.value = ''
        selecionVagon.value = 0
    document.querySelector('#nombreUsuarioIn').focus()

        
    }

    )


  /**  
    let usuarios = {name: nombreUsuarioIn.value, cedula: cedulaUsuarioIn.value, vagon: selecionVagon.value}
    arreglo.push(usuarios)
    arreglo.forEach((usuario)=>{
        if (selecionVagon.value == 1) {
            printVagon2.innerHTML = ''
            vagon1 = vagon1+1
            printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
        if (selecionVagon.value == 2) {
            printVagon2.innerHTML = ''
            vagon2 = vagon2+1
            printVagon2.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
        }
    })
        nombreUsuarioIn.value = ''
        cedulaUsuarioIn.value = ''
        selecionVagon.value = 0
    document.querySelector('#nombreUsuarioIn').focus()
    */
}
/** 
function bajarPasajero() {
    function clearList() {printVagon1.innerHTML = ''} clearList()
    const indexarreglo = arreglo.map(e => e.cedula).indexOf(cedulaUsuarioIn.value);
    const indexarreglovagon = arreglo.map(e => e.vagon)
    if (indexarreglo >-1 && indexarreglovagon == 1) {
        arreglo.splice(indexarreglo, 1)
        vagon1 = vagon1-1
    }
    arreglo.forEach((usuario)=>{
        printVagon1.innerHTML += `<tr><td>${usuario.cedula}</td><td>${usuario.name}</td></tr>`
    })
    // else if(indexarreglo >-1 && indexarreglovagon == 2){
        //         arreglo.splice(indexarreglo, 1)
        //         vagon2 = vagon2-1
        //     }
        console.log(arreglo)
        progress()
    }
    
    function progress() {
    let vagon1cap = vagon1*10
    const barraprogreso = document.querySelector('.progress-bar')
    if (vagon1cap >=25 && vagon1cap <50){ barraprogreso.classList.add('bg-success');}
    if (vagon1cap >=50 && vagon1cap <75){ barraprogreso.classList.add('bg-info');}
    if (vagon1cap >=75 && vagon1cap <95){ barraprogreso.classList.add('bg-warning');}
    if (vagon1cap >=95){ barraprogreso.classList.add('bg-danger');}
    barraprogreso.style= `width: ${vagon1cap}%`
    barraprogreso.innerHTML = `${vagon1cap}%`
    console.log(vagon1)
}

*/