let variableAuxiliarMenor = {
    name: "",
    age: 0
}
let variableAuxiliarMayor = {
    name: "",
    age: 100
}
let valorInByUserAge = document.querySelector('#edadsujeto')
let valorInByUserName = document.querySelector('#nombresujeto')

function datosFromDOM(e) {
    if (e.key == 'Enter') {
        if (valorInByUserAge.value >= variableAuxiliarMenor.age) {
            variableAuxiliarMenor.age = valorInByUserAge.value
            variableAuxiliarMenor.name = valorInByUserName.value
            document.querySelector('#olderp').innerHTML = `${variableAuxiliarMenor.name}   ${variableAuxiliarMenor.age}`
        }
        if (valorInByUserAge.value <= variableAuxiliarMayor.age) {
            variableAuxiliarMayor.age = valorInByUserAge.value
            variableAuxiliarMayor.name = valorInByUserName.value
            document.querySelector('#youngp').innerHTML = `${variableAuxiliarMayor.name}   ${variableAuxiliarMayor.age}`
        }
        document.querySelector('#imprimirinfo').innerHTML += `${valorInByUserName.value}   ${valorInByUserAge.value}<br>`
    }
}

function mostrarMinMaxEnDOM() {
    document.getElementById('olderp').style.display = 'block'
    document.getElementById('youngp').style.display = 'block'
    document.getElementById('showudates').style.display = 'none'
    document.getElementById('hiddendates').style.display = 'flex'
}

function ocultarMinMaxEnDOM() {
    document.getElementById('olderp').style.display = 'none'
    document.getElementById('youngp').style.display = 'none'
    document.getElementById('showudates').style.display = 'flex'
    document.getElementById('hiddendates').style.display = 'none'

}