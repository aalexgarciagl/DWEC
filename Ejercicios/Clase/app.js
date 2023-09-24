class Tutor {
  nombre
  dni

  constructor(nombre, dni) {
    this.nombre = nombre
    this.dni = dni
  }
}

class Alumno {
  nombre
  asignaturas
  tutor

  constructor(nombre, asignaturas, tutor) {
    this.nombre = nombre
    this.asignaturas = asignaturas
    this.tutor = tutor
  }

  calcularMedia() {
    var media = 0
    var mediaTotal = 0
    for (let i = 0; i < this.asignaturas.length; i++) {
      media = media + this.asignaturas[i].nota;
    }
    mediaTotal = media / (this.asignaturas.length)
    return mediaTotal
  }

}

class Asignatura {
  nombre
  nota

  constructor(nombre, nota) {
    this.nombre = nombre
    this.nota = nota
  }
}

var mates = new Asignatura("Matematicas", 5)
var lengua = new Asignatura("Lengua", 9)
var fisica = new Asignatura("Fisica", 10)

var asignaturas = [mates, lengua, fisica]

var tutor = new Tutor("Francisco", "05957463T")

var alumno = new Alumno("Alejandro", asignaturas, tutor)


console.log(alumno)
console.log(alumno.calcularMedia())