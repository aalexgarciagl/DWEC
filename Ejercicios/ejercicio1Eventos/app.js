


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
  if(regExp.test(ntar)){
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