"use strict"

/**
 * Muestra todos los números impares
 * que hay entre dos números introducidos por el usuario
 */

var number1;
var number2;

do {
    number1 = parseInt(prompt("Introduce un número"));
} while(isNaN(number1));
do {
    number2 = parseInt(prompt("Introduce otro número"));
} while(isNaN(number2));

if (number1>number2) {
    let auxNumber = number1;
    number1 = number2;
    number2 = auxNumber;
}

document.write("Los números impares entre "+number1+" y "+number2+" son:<br/>");

for (let i = number1; i<=number2;i++) {
    if (i%2!=0) {
        document.write(i+"<br/>");
    }
}