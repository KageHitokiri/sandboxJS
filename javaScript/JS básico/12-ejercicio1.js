"use strict"
/*
Programa que pide dos numeros, nos diga cual es mayor, menor y si son iguales.
*/

let number1;
let number2;

while(isNaN(number1)){
    number1 = parseInt(prompt("Introduzca un número, por favor"));
}
while(isNaN(number2)){
    number2 = parseInt(prompt("Introduzca otro número, por favor"));
}

//console.log(typeof(number1));

if (number1==number2) {
    alert("Ambos números son iguales");
} else if (number1>number2) {
    alert(number1+" es mayor que "+number2);
} else {
    alert(number2+" es mayor que "+number1);
}