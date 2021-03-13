"use strict"

/**
 * Arrays
 */

var nombre = "Carlos";
var nombres = ["Carlos", "Saúl", "Andrea", "Aarón","Antonio"];
var lenguajes = new Array("Java","JavaScript","TypeScript");

console.log(nombre);
console.log(nombres[nombres.length-1]);
console.log(lenguajes[lenguajes.length-1]);
/*
let elemento;

do {
    elemento = parseInt(prompt("Introduce un número entre 0 y 3",0));
} while (elemento<=0 && elemento>=3);

alert(nombres[elemento]);

document.write("Los alumnos son<br/>");
for (let i = 0; i<nombres.length;i++) {
    document.write("<li>"+nombres[i]+"</li>");
}
*/
document.write("Los alumnos son<br/>");
nombres.forEach((elemento, index)=>{
    document.write("<li>"+(index+1)+": "+elemento+"</li>");
})
