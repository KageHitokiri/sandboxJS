"use strict"

let categorias = ["Acción", "Terror", "RPG"];
let titulos = ["Final Fantasy 14", "Golden Sun", "Silent Hill"];
let juegos = [categorias, titulos];
let titulo;
let juegosString;
/*
console.log(juegos[1][2]);
*/
juegos.push("GoldenEye");
console.log(juegos);

/*
do {
    titulo = prompt(`
    Introduce un juego en el array<br>
    Introduce un número para terminar
    `);
    if(isNaN(titulo)) {
        juegos.push(titulo);
    }
}while (isNaN(titulo));
console.log(juegos);
juegos.pop();
console.log(juegos);
*/

var index = titulos.indexOf("Final Fantasy 14");
console.log(index);
console.log(titulos);
if (index > -1) {
    titulos.splice(index,1);
}
juegosString = juegos.join();
console.log(juegosString);