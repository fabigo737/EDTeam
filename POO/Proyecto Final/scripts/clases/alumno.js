import Usuario from './usario.js'
export default class Estudiante extends Usuario{
    constructor(nombres, apellidos, edad, correo, subscrito, cursosTomados){
        super(nombres, apellidos, edad, correo, subscrito)
        this.cursosTomados = cursosTomados
}
}