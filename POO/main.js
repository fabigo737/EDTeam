// Objectos literales

const alumno = {
    nombres: 'Fabian Gabriel s',
    apellidos: 'De Gouveia Gomez',
    edad: 26,
    hermanos: ['Reina', 'Angel', 'Maria'],
    padre: {
        nombres: 'Jose Fabian',
        apellidos: 'De Gouveia Perez',
        edad: 26,
        hermanos: ['Yeny', 'Susana', 'David']
    }
}

console.log(alumno);

alumno.genero = 'Masculino'
alumno.edad = 2

console.log(alumno);




//los metodos son las funciones de los objectos

const yoooo = {
    //atributos del objecto
    nombres: 'Fabian Gsabriel',
    apellidos: 'De Gouveia Gomez',
    edad: 26,

    //metodos del objeto
    presentarme() {
        console.log(`Hola, mis nombres son ${this.nombres} y mis apellidos son ${this.apellidos} y actualmente tengo ${this.edad}`);
    }
}
yoooo.presentarme()

