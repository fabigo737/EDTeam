export default class Usuario {
    constructor(nombres, apellidos, edad, correo, subscrito){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.edad = edad,
        this.correo = correo,
        this.subscrito = subscrito
    }
    presentacion() {
        return `Hola mi nombre es ${this.nombres} y tengo ${this.edad} y mi apeellido es ${this.apellidos}`
    }

    getNombres() {
        return this.nombres
    }
    getApellidos() {
        return this.apellidos
    }

    setApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos
    }
}






// const fabianc = new Usuario('Fabian', 'De Gouveia', 26, 'correo@fabian.com', true) // esto es instaciar un objecto
// const wildysc = new Usuario('Wildys', 'Lomelly', 20, 'wildys@fabian.com', true)
// const tayrita = new Profesor('Tayra', 'De GOuveia', 1, 'tayra@correo.com', true, ['sentado', 'down'])