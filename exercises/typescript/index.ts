/**
 * TIPOS BASICOS
 */
// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Christian';
let saludo = `Hola me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Christian', 'Ana', 'Raul'];
//people.push(52);

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Chris');
peopleAndNumbers.push(231);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker"
comodin = { type: "Wildcard"}

//Object
let someObject: Object = { type: "Wildcard" }


/**
 * FUNCIONES
 */
function add(a: number, b: number){
    return a+b;
}

const sum = add(4, 6);

function createAdder(a:number): (number)=>number {
    return function (b: number){
        return b+a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log(addFour);
console.log(fourPlus6);


function fullname(firstname:string, lastname:string = "Tambo"): string {
    return `${firstname} ${lastname}`;
}

const christian = fullname('Christian');
console.log(christian);


/**
 * INTERFACES
 */

 enum Color {
     ColorRojo = "Rojo",
     ColorVerde = "Verde"
 }
 interface Rectangulo {
     ancho: number;
     alto: number;
     color: Color;
    }
    let rect: Rectangulo = {
        ancho: 4,
        alto: 6,
        color: Color.ColorRojo
    }

    function area(r:Rectangulo) {
        return r.alto * r.ancho;
    }

    const areaRect = area(rect);
    console.log(areaRect);

    rect.toString = function () {
        return this. color? `Un rectangulo ${this.color}`:`Un rectangulo`;
    }

    console.log(rect.toString());
    
    