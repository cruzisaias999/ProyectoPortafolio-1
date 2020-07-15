var edad = 20;
var ine = false;

if (edad > 18 && ine){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad")
}


// emular login
var user = 'raul';
var tipouser = 'admin';
if (user){
    console.log("No has igresado tu nombre de usuario");
} else if (tipouser == 'admin'){
    console.log("Bienvenido todo poderoso");
}else{
    console.log("No puedes hacer nada porque no has ingresado nada")
}