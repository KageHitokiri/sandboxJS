"use strict"

alert("Hola, yo soy una ventana emergente");

var confirmation = confirm("Y yo... ¿Soy una ventana de confirmación?");
var resultado = prompt("Hola usuario, ¿Que edad tienes?");

console.log ("El usuario tiene "+resultado+" años");
if (confirmation) {
    console.log("Y dice que sí es una ventana de confirmación");
    console.log("Evidentemente, tiene razón");
} else {
    console.log("Y dice que no es una ventana de confirmación");
    console.log("Obviamente, está equivocado");}