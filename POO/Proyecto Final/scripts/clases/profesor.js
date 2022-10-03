import Usuario from './usario.js'
export default class Profesor extends Usuario{
    constructor(nombres, apellidos, edad, correo, subscrito, cursosDictados){
        super(nombres, apellidos, edad, correo, subscrito)
        this.cursosDictados = cursosDictados
}
}