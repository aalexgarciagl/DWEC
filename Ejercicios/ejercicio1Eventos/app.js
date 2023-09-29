
function guardarPulsado(){
  var idIban = document.getElementById("idIban").value
  var idCuenta = document.getElementById("idCuenta").value
  var nTar = document.getElementById("nTar").value
  var ibanValido
  var nTarValido
  if(validarIdCuenta(idCuenta) && validarIdIban(idIban)){
    document.getElementById("errorIban").innerText = ""
    document.getElementById("idIban").style.backgroundColor = "white"
    document.getElementById("idCuenta").style.backgroundColor = "white"
    ibanValido = true
  }else{
    document.getElementById("errorIban").innerText = "IBAN invalido"
    document.getElementById("idIban").style.backgroundColor = "red"
    document.getElementById("idCuenta").style.backgroundColor = "red"
  }

  if(validarNtar(nTar)){
    document.getElementById("errorTar").innerText = ""
    nTarValido = true
  }else{
    document.getElementById("errorTar").innerText = "Numero Tarjeta invalido."
  }
}


function borrarCvv(){
  const cvv = document.getElementById("cvv").value = ""
}

function validarIdIban(idIban){
  var regExp = /[ES76]|[ES78]/

  if(regExp.test(idIban)){
    return true; 
  }
}



function validarIdCuenta(idCuenta){
  var regExp = /^\d{20}$/
  if(regExp.test(idCuenta)){
    return true
  }else{
    return false 
  }
}


function validarNtar(nTar){
  var regExp = /^\d{16}$/
  if(regExp.test(nTar)){
    return true
  }else{
    return false 
  }
}

function validarCvv(cvv){
  var regExp = /^\d{3}$/
  if(regExp.test(cvv)){
    return true
  }else{
    return false 
  }
}