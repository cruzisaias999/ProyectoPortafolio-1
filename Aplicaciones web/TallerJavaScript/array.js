//array

var animales = ["Vaca","Pollo", "Gato","Perro"];
console.log(animales);
var autos = new Array ("Vocho", "Camioneta", "Trailer");
console.log(autos);
// acceder a las posisiones
console.log(animales[0]);

// Size 
console.log(animales.length);
// sort
console.log(animales.sort());

//push
animales.push("Caballo");
console.log(animales);

// animales[6] = "Elefante";
// console.log(animales);

console.log(typeof(animales));

animales[1] ="Ratón";
console.log(animales);

var usuario = {userName:"raul", pass:"12345", typeuser:"admin"}
console.log("Tu nombre de usuario es: "+usuario["userName"]);
// console.log("Tu nombre de usuario es"+usuario);

// mostrar datos del arreglo 
var ultimo = animales [animales.length -1];
console.log(ultimo);
// add element 
var addanimal = () => animales[animales.length]= "Gato";
// metodo toString()
var arraytext = animales.toString();
console.log(arraytext);
// metodo pop() 
animales.pop();
console.log(animales);
// metodo push()
animales.push("Lobo");
console.log(animales);
// metodo shift 
animales.shift();
console.log(animales);
// metodo delete 
delete animales[3];
console.log(animales);
// metodo slice()
animales.slice(2,10);
console.log(animales);

var size = animales.length;
animales.slice(2,size);
console.log(animales);

animales.forEach(foo);

function foo (value,index,array){
    // var dato = dato + value +"<br>";
    console.log("En la posisión index "+ index + " Tenemos un ");
    console.log(value);
}