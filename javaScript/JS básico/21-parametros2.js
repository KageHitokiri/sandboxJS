"use strict"

/**
 * Parametros rest y spread
 */

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log("Resto de frutas: "+restoDeFrutas);
}
listadoFrutas("Manzana","Naranja","Pera","Sandia");

let frutas = ["Limón","Aguacate"];
listadoFrutas(...frutas,"Manzana","Naranja","Pera","Sandia");