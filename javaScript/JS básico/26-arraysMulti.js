"use strict"

let categorias = ["Acción", "Terror", "RPG"];
let titulos = ["Final Fantasy 14", "Golden Sun", "Silent Hill"];
let juegos = [categorias, titulos];
//let titulo;
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


var index = titulos.indexOf("Final Fantasy 14");
console.log(index);
console.log(titulos);
if (index > -1) {
    titulos.splice(index,1);
}
juegosString = juegos.join();

console.log(juegosString);

console.log(titulos.sort());
console.log(titulos)
console.log(titulos.reverse());
console.log(titulos)
*/
let precios = [20,1,5,7,9,10,50];
let search;
search = titulos.findIndex(titulo => titulo == "Silent Hill");
console.log(search);
search = precios.some(precio => precio >= 15);
console.log(search);