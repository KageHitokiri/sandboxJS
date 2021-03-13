"use strict"

/**
 * Muestra todos los números entre:
 * dos números introducidos por el usuario.
 */

let number1;
let number2;

do {
    number1 = parseInt(prompt("Introduzca un número"));
} while(isNaN(number1));

do {
    number2 = parseInt(prompt("Introduzca otro número"));
} while(isNaN(number2));

if (number1>number2) {
    let auxNumber;
    auxNumber = number1;
    number1 = number2;
    number2 = auxNumber;
}
console.log("Los números entre "+number1+" y "+number2+" son:");
for (let i = number1; i<=number2; i++) {
    console.log(i);
}