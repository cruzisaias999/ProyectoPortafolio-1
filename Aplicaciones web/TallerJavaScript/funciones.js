// function start(){
//     console.log("Hemos arrancado con el tema de funciones")}
//     function suma(n1,n2){
//         return n1,n2;
//     }
//     console.log(suma(3,4));
//     // recibir edad 
//     function IngresaEdad (edad1,edad2){
//         prompt ("La edad que ingesaste es de:"+ edad)
//     }
//     // generar funciones
//     function entrar (){
//         console.log("Hemos detectado que tu edad es de: " + edad +" años");
//     }
//     function denegar (){
//         console.log("Eres menor de edad, no puedes entrar...")
//     }

//         var edad= "";
//     if (edad>18){
//         entrar();

//     }else{
//         denegar();
//     }

var edad = prompt ("Ingresa tu edad: ");

console.log("Tu edad es "+ edad);
function menor (){
    console.log("Vimos que eres menor de edad y tienes: "+ edad+ " años por lo que no puedes entrar: ");
}
function mayor (){
    console.log("Hemos visto que tienes: "+ edad+ " años por lo que eres mayor de edad, bienvenido...");
}
function validacion (){
    if (edad>18){
        mayor();
    }else{
        menor();
    }
}
validacion();

