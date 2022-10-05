let sumNota = 0
let contNotes = 0

function average(e) {
    if ('Enter' == e.key) {
      const nota = Number(document.querySelector('.inputnote').value)
      if(nota != ''){
        contNotes++
      fillNotes(nota)
      sumNota += nota
      promedio = sumNota/contNotes
      document.querySelector('.average-output').innerHTML = `${promedio}`
      
    }else{alert('No estas ingresado nada')}   
     }
}

function fillNotes(nota) {
    document.querySelector('.table tbody tr').innerHTML += `<td>${nota}</td>`
    document.querySelector('.inputnote').value = ''
}



