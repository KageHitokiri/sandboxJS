"use strict"

/**
 * Tabla de multiplicar de un número introducido por pantalla
 */

let number;
let result;

do{
    number = parseInt(prompt("Introduzca un número para ver su tabla de multiplicar"));
} while(isNaN(number));

document.write("<b>Tabla de multiplicar del "+number+"</b></br>");
for(let i = 1; i<=10; i++) {
    result =number*i;
    document.write("<p>"+number+" x "+i+": <b>"+result+"</b></p>");
}