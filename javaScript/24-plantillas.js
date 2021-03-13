"use strict"

/**
 * Plantillas de texto
 */

var nombre = prompt("Escribe tu nombre");
var apellidos = prompt("Escribe tus apellidos");

//var texto = "Mi nombre es "+nombre+" y mis apellidos son "+apellidos;
var texto = `
    <h1> Esto es una prueba</h1>
    <h3> Mi nombre es ${nombre} </h1>
    <h3> Mis apellidos son ${apellidos}</h3>
    <h4> fin de la prueba</h4>
`;

document.write(texto);