function ejecutarsuma() {
    const valorInbyUsuario = document.querySelector('#numerodeusuario').value
    let result = ""
    for (let i = 0; i <= valorInbyUsuario; i++) {
        result = Number(result + i)
        finaResult = result + 1
    }
    if (valorInbyUsuario > 0) {
        let imprimir = `El resultado es: <br><h1>${finaResult} </h1>`
        document.querySelector('#resultadofinalfinal').innerHTML = imprimir;
        if (valorInbyUsuario%2 == 0) {
            document.querySelector('#parimpar').innerHTML = `El numero ingresado ${valorInbyUsuario} es par `;
        }else{
            document.querySelector('#parimpar').innerHTML = `El numero ingresado ${valorInbyUsuario} es impar `;
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Nada que calcular...',
            text: 'Debes introducir un numero!',
            footer: 'Recuerda que debe ser desde el 1 y hasta el 100'
        })
    }
}
