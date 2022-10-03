import Curso from "./clases/Curso.js"
import Profesor from './clases/profesor.js'
import Estudiante from './clases/alumno.js'
// const html = new Curso('HTML desde 0', 'https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=1920&q=75', 10)
// const figma = new Curso('Figma desde cero 2020', 'https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fbb5204b4-8f3b-4eb9-a5d8-486bc36cc1f6.png&&w=1920&q=75', 20)
const elem = document.getElementById('cursos')



function mostrarCurso(curso) {
    const hijo = document.createElement('div')
    hijo.classList.add('card')
    hijo.innerHTML = ` 
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getPoster()}"/>
    </div>
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
    <span>Cantidad de Clases ${curso.getClases()}</span>
    </div>
    `
    elem.appendChild(hijo)
}

const formulario = document.getElementById('formCursos')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombredelCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
})

const fabianc = new Estudiante('Fabian', 'De Gouveia', 26, 'correo@fabian.com', true, ['JS', 'HTML']) // esto es instaciar un objecto
const wildysc = new Estudiante('Wildys', 'Lomelly', 24, 'wildys@fabian.com', true, ['Marketing', 'Berlitz', 'HTML'])
const tayrita = new Estudiante('Tayra', 'De Gouveia', 1, 'tayra@correo.com', false, ['sentado', 'down'])
const juvena = new Profesor('Julian', 'Benavides', 28, 'jlia@bit.institute', true, ['HTML', 'CSS', 'JS', 'Bootstrap'])

///// cursos

const html = new Curso('HTML desde Cero', 'https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=1920&q=75', 5)

html.setInscritos([fabianc, wildysc, tayrita])

console.log(html)