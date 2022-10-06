//Hacer un algoritmo que lea n notas y nos indique cuantas son mayores a cero y cuantas 
//son menores a cero, también cuántos son iguales a cero.
let negativo = 0
let neutro = 0
let positivo = 0
let entradaUsuario = document.querySelector('#notamanual')

function notas(e){
    if (e.key == 'Enter'){
    if (entradaUsuario.value == 0) {
        neutro = neutro+1
        document.querySelector('#resultadoigual0').value = neutro
    }
    if (entradaUsuario.value >0){
        positivo = positivo+1
        document.querySelector('#resultadomayor0').value = positivo
    }
    if (entradaUsuario.value < 0){
        negativo = negativo+1
        document.querySelector('#resultadomenor0').value = negativo
    }
    document.querySelector('.mostarlista').innerHTML += ` ${entradaUsuario.value} |`
}
}

