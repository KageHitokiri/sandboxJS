"use strict"

let edad = 0;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de llegar a la mayoría de edad";
    break;
    case 0:
        imprime ="Acabas de nacer";
    break;
    default:
        imprime = "Edad no registrada";
    break;
}
console.log(imprime);