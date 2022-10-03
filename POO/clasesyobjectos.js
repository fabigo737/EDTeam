const usuario1 = {
    nombres: 'Fabian Gabriel',
    apellidos: 'De Gouveia Gomez',
    edad: 26,
    correo: 'correo@correo.com',
    suscrito: true,

    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${ead}`);
    }
}

const usuario2 = {
    nombres: 'Wildys Andreina',
    apellidos: 'Henandez lomelly',
    edad: 24,
    correo: 'wil@correo.com',
    suscrito: false,

    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${ead}`);
    }
}

const usuario3 = {
    nombres: 'Tayra',
    apellidos: 'De Gouveia lomelly',
    edad: 1,
    correo: 'tayra@correo.com',
    suscrito: true,

    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${ead}`);
    }
}


// funciones constructoras (como seria el modelo optimo para lo de arriba)

// como es un molde para varios, colocarlo en mayuscula y en singular

function Usuario(nombres, apellidos, edad, correo, subscrito){
    // esto es una funcion constructora
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.edad = edad,
    this.correo = correo,
    this.subscrito = subscrito


}

const fabian = new Usuario('Fabian', 'De Gouveia', 26, 'correo@fabian.com', true)
const wildys = new Usuario('Wildys', 'Lomelly', 24, 'wildys@fabian.com', true)

////////////// Esta era la manera hasta ECMA Script 6

/////////////// Ahora vamos a usar la nomenclatura de clases

class Usuarioclass {
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


//HERENCIA 
class Profesor extends Usuarioclass{
    constructor(nombres, apellidos, edad, correo, subscrito, cursosDictados){
        super(nombres, apellidos, edad, correo, subscrito)
        this.cursosDictados = cursosDictados
}
}


class Estudiante extends Usuarioclass{
    constructor(nombres, apellidos, edad, correo, subscrito, cursosTomados){
        super(nombres, apellidos, edad, correo, subscrito)
        this.cursosTomados = cursosTomados
}
}

const fabianc = new Usuarioclass('Fabian', 'De Gouveia', 26, 'correo@fabian.com', true) // esto es instaciar un objecto
const wildysc = new Usuarioclass('Wildys', 'Lomelly', 20, 'wildys@fabian.com', true)
// fabianc y wildysc son instancias de la clase usuarioclass
fabianc.setApellidos('De Gouuveia Gomez')

console.log(fabianc.presentacion());
console.log(wildysc.presentacion());

////////////////////

//getters y setters para buenas practicas
// get obtener
// set establecer

console.log(fabianc.apellidos);// no se deberia ver la linia 72 a 76
// como se deberia
console.log(fabianc.getApellidos())


const tayrita = new Estudiante('Tayra', 'De GOuveia', 1, 'tayra@correo.com', true, ['sentado', 'down'])

console.log(tayrita);