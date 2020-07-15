//Ingreso de datos por alerta
alert("Bienvenidos al taller de JavaScript");
// Ingreso de datos por consola
console.log("Acá estoy recibiendo un mensaje por consola");
// prompt("Ingresa tu nombre por favor");

// Variables (Ubicaciones en memoria, espacio en memoria)
// Constantes: No cambian mediante la ejecución
let nombre = "Raul lopez Najar";
alert(nombre);
console.warn(nombre);

var dato = 150;
var datoplus = 200;
// const suma = 1500;
var suma = dato + datoplus;
console.log(suma);

// operación aritmética del área de un circulo
// let radio = prompt("Ingresa el radio del círculo");
// const pi =3.1416;
// operacion = pi * (radio * radio) /2;
// console.warn(operacion);
// Operaciones aritméticas
let n1 =parseInt( prompt("Ingresa el valor de 1"));
let n2 = parseInt( prompt("Ingresa el valor de 2"));

let sumaa = n1 + n2;
let resta = n1 - n2;
let multi = n1 * n2;
let division = n1 / n2;
console.log("El valor de la suma es: "+ sumaa,"El valor de la resta es: "+ resta,"El valor de la multiplicacion es: "+ multi,"El valor de la division es: "+ division);
