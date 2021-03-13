"use strict"

/**
 * Muestra todos los divisores de un número introducido por el usuario
 */

var num1;

do {
    num1 = parseInt(prompt("Introduce un número para ver sus divisores"));
} while (isNaN(num1));

for (let i =1; i<=(num1/2); i++) {
    if (num1%i==0) {
        document.write(i+" es divisor de "+num1+"<br/>");
    }
}