let varAux1 = 0
let varAux2 = 1
let varAux3 = 0
let tablita = document.querySelector('.table')
let inputUser = document.querySelector('#secuenciainput')


function fabian(e){
    if (e.key == 'Enter'){
    for (let i = 1; i <= inputUser.value ; i++) {
        varAux3 = varAux1 + varAux2;
        varAux1 = varAux2;
        varAux2 = varAux3;
        tablita.innerHTML += `<tr>${varAux1}</tr>`
    }
    inputUser.value = ''
}
}