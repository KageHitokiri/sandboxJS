"use strict"

/**
 * Transformación de texto
 */

let number = 5;
let text1 = "Hola, me llamo";
let name1 = "";
let dato;

dato = number;
console.log(typeof(dato));

dato = dato.toString();
console.log(typeof(dato));

dato = text1.toUpperCase();
console.log(dato);
console.log(text1);

if (name1.length==0) {
    name1=prompt("Introduce tu nombre");
}
console.log(name1.length);
dato = text1.concat(" "+name1);
document.write(dato.slice(5));