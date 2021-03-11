"use strict"

/**
 * Utilizando un bucle.
 * Mostrar la suma, media y resultados
 * Hasta introducir un numero negativo.
 * Mostrar la media al finalizar.
 */

var suma = 0;
var counter = 0;
var average;
var number;

do {
    do {
        number = parseInt(prompt("Por favor, introduce un número"));
    } while (isNaN(number));
    if (number>0) {
        counter++;
    suma += parseInt(number);
    console.log("total actual "+suma);
    console.log("Valores introducidos: "+counter);
    }    
} while(number>=0);
average = parseInt(suma) / parseInt(counter);
console.log("La media de los valores introducidos es: "+average);