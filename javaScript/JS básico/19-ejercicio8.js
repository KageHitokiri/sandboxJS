"use strict"

/**
 * Pide dos números por pantalla
 * Si introducimos uno mal, nos lo vuelve a pedir
 * Muestra en una alerta y por consola el resultado:
 *  sumar
 *  restar
 *  multiplicar
 *  Dividir
 */

let number1;
let number2;
let result;

do {
    number1 = parseInt(prompt("Introduzca el primer número"));
} while(isNaN(number1));
do {
    number2 = parseInt(prompt("Introduzca el segundo número"));
} while(isNaN(number2));

result = number1+number2;
alert("El resultado de la suma es: "+result);
console.log("Suma: "+result);
document.write("Suma: "+result+"<br/>")
result = number1-number2;
alert("El resultado de la resta es: "+result);
console.log("Resta: "+result);
document.write("Resta: "+result+"<br/>")
result = number1*number2;
alert("El resultado de la multiplicación es: "+result);
console.log("Multiplicación: "+result);
document.write("Multiplicación: "+result+"<br/>")
result = number1/number2;
alert("El resultado de la división es: "+result);
console.log("División: "+result);
document.write("División: "+result+"<br/>")