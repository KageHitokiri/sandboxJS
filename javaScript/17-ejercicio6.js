"use strict"

/**
 * El programa nos dice si el número es par o impar
 * 1: Ventana que nos pida el numero
 * 2: Comprueba si el número es válido
 *  2a: si no es válido, nos vuelve a pedir el número
 * 3: Muestra si el número es par o impar
 */

let number;
do {
    number = parseInt(prompt("Por favor introduce un número para comprobar si es par o impar"));
} while (isNaN(number));

document.write("El número introducido es ");
if (number%2==0) {
    document.write("<b> par </b>");
} else {
    document.write("<b> impar </b>");
}