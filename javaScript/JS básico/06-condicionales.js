"use strict"

let nombre = "Carlos";
let edad = 37;

console.log(typeof(nombre));
console.log(typeof(edad));

if (edad >=18) {
    console.log(nombre+" es mayor de edad");
    if (edad>30) {
        console.log("Ya toca empezar a cuidarse, ¿eh?");
    }
} else {
    console.log(nombre+" es menor de edad");
}