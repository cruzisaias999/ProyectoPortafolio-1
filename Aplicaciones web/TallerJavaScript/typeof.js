var size = 200;
var nombre = "Raul";
// Objet
var o = {
    name : "Raul",
    app : "Lopez"
}
// Array
var animales = [
    "Gato",
    "Lobo",
    "Venado"
]
console.log(size);
console.log(nombre);
console.log(o);
// typeof
console.log(typeof(size));
console.log(typeof(nombre));
console.log(typeof(o));
// funciones 
var f = function hola (){}

console.warn(o.name);
console.log("El tamaño de mi array es: " + animales.length);
console.warn(animales[4]);

var userinput = prompt ("Ingresa un valor");
if (animales.length < userinput){
    console.log("El tamaño que ingresaste es incorrecto");
}else{
    console.log(animales[userinput]);
}
// contenido de las variables 
var edad;
var edad1 = "";
var edad2 = null;
console.log(typeof(edad));
console.log(typeof(edad1));
console.log(typeof(edad2));
