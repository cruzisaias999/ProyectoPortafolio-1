var pass = 12345;

var passrandom = pass * Math.random();

console.log("Contraseña parceada: " + passrandom);

console.log("Valor original: " + pass);

document.getElementById("pass").innerHTML = "Contraseña loca: " + passrandom;

// console.log(Math.random());

// Valores math

// perimetro de un circulo 2*PI*r

console.log(Math.PI);
var radio = prompt("Ingresa el radio del circulo");
var perimetro = 2 * Math.PI * radio;
document.getElementById("resultado").innerHTML = "El perimetro es: " + Math.round(perimetro);

// Area de un circulo PI*r^2

console.log(Math.pow(3,2));
var area = Math.PI * Math.pow(radio,2);
document.getElementById("area").innerHTML = "El area es: " + Math.round(area);

// Buscar minimos y maximos

console.log ("El valor minimo es: " + Math.min(1,45,32,27,32,14,43,2,3,7,-23));
console.log ("El valor absoluto es: " + Math.abs(Math.min(1,45,32,27,32,14,43,2,3,7,-23)));