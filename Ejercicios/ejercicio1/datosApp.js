
var persona = {
  nombre: "",
  pApe: "",
  sApe: "",
  dni: "",
  fNac: ""
}

function guardarPulsado() {
  var nombre = document.getElementById("name").value
  var pApe = document.getElementById("pApe").value
  var sApe = document.getElementById("sApe").value
  var dni = document.getElementById("dni").value
  var fNac = document.getElementById("fNac").value
  if (returnErrores(nombre, pApe, sApe, dni, fNac)) {
    persona.nombre = nombre
    persona.pApe = pApe
    persona.sApe = sApe
    persona.dni = dni
    persona.fNac = fNac
    alert("Datos guardados en objeto persona.")
  }
}

function limpiarPulsado() {
  document.getElementById("name").value = ""
  document.getElementById("pApe").value = ""
  document.getElementById("sApe").value = ""
  document.getElementById("dni").value = ""
  document.getElementById("fNac").value = ""
}


//Si devuelve true el nombre es valido. 
function validarNombre(name) {
  if (name.length >= 3 && name.length <= 30) {
    return true
  } else {
    return false
  }
}

//Si devuelve true el apellido es valido. 
function validarPrimerApe(pApe) {
  if (pApe.length >= 2 && pApe.length <= 30) {
    return true
  } else {
    return false
  }
}

//Si devuelve true el apellido es valido. 
function validarSecondApe(sApe) {
  if (sApe.length >= 2 && sApe.length <= 30) {
    return true
  } else {
    return false
  }
}


function validarFecha(fecha) {
  var formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/

  if (formatoFecha.test(fecha)) {
    return true
  } else {
    return false
  }
}

function validarDNI(dni) {
  var regexDNI = /^[0-9]{8}[A-HJ-NP-TV-Z]$/

  if (!regexDNI.test(dni)) {
    return false
  }
  var numeroDNI = dni.substr(0, 8)
  var letraDNI = dni.charAt(8)

  var letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE'
  var resto = numeroDNI % 23
  var letraEsperada = letrasValidas.charAt(resto)


  if (letraDNI.toUpperCase() === letraEsperada) {
    return true
  } else {
    return false
  }
}


function returnErrores(name, pApe, sApe, dni, fNac) {
  var n = validarNombre(name)
  var p = validarPrimerApe(pApe)
  var s = validarSecondApe(sApe)
  var d = validarDNI(dni)
  var f = validarFecha(fNac)
  var msgError = ""

  if (p && n && s && d && f) {
    return true
  } else {
    if (!n) {
      msgError = msgError + "El nombre debe tener entre 3 y 30 caracteres.\n"
    }
    if (!p) {
      msgError = msgError + "El primer apellido debe tener entre 2 y 30 caracteres.\n"
    }
    if (!s) {
      msgError = msgError + "El segundo apellido debe tener entre 2 y 30 caracteres.\n"
    }
    if (!d) {
      msgError = msgError + "El formato del DNI es incorrecto.\n"
    }
    if (!f) {
      msgError = msgError + "El formato de la fecha es incorrecto. (dd/mm/yyyy)\n"
    }
    alert(msgError)
  }

}

