console.log("Hola chavalos")

// area = (b*a)/2

class Triangulo {
    constructor(b,a){
        this.b =b;
        this.a =a;
    }
};

console.warn(Triangulo.name);


var triang = new Triangulo(20,7);
var triang2 =new Triangulo(6,7);
console.log(triang);
console.log("la altura es: "+triang.a);

class Area {
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    // getter
    get area(){
        return this.CalcularArea();
    }
    // Metodo / Function
    CalcularArea() {
        return ((this.base*this.altura)/2);
    }
}
var figura = new Area(10,8);
console.log(figura.area);


// HERENCIA
class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    comer(){
        console.log(this.nombre +" está comiendo... desde la Super Clase")
    }
    hablar(){
        console.log(this.nombre +" está hablando... desde la Super Clase")
    }
    dormir(){
        console.log(this.nombre +" está durmiendo... desde la Super Clase")
    }
}

class perro extends Animal {
    comer(){
        console.log(this.nombre +" está comiendo...desde su clase")
    }
    }



const dog = new perro ("Saggy");
dog.comer();
dog.hablar();
dog.dormir();
class gato extends Animal{
    maullar(){
        console.log(this.nombre+" está maullando...")
    }
}
const cat = new gato("Bola de nieve ");
cat.maullar();
cat.dormir();
cat.comer();