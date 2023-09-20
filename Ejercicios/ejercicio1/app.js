

function entrarPulsado() {
  var email = document.getElementById("email").value
  var psw = document.getElementById("psw").value

  if (returnErrores(email, psw)) {
    alert("Todo correcto.")
  }
}

function returnErrores(email, psw) {
  var e = validarEmail(email)
  var p = validarPsw(psw)
  var msgError = ""

  if (e && p) {
    return true
  } else {
    if (!e) {
      msgError = msgError + "El campo email no puede estar vacio y el formato debe ser correcto.\n"
    }
    if (!p) {
      msgError = msgError + "El campo contraseña no puede estar vacio y debe tener mas de 8 caracteres.\n"
    }
    alert(msgError)
  }

}


// Si retorna true es que la contraseña esta correcta
function validarPsw(psw) {
  if (psw == "") {
    return false
  } else {
    var cantidad = psw.length
    if (cantidad >= 8) {
      return true
    } else {
      return false
    }
  }
}

//Si retorna true, el email esta correcto. 
function validarEmail(email) {
  if (email == "") {
    return false
  } else {    
    // Verificar si el correo electrónico contiene "@" y no es el primer carácter ni los 3 últimos
    if (email.indexOf("@") > 0 && email.lastIndexOf("@") < email.length - 4) {
      return true; // El correo electrónico es válido según los criterios
    } else {
      return false; // El correo electrónico no es válido según los criterios
    }
  }
}


