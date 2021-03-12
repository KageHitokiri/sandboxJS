"use strict"

/**
 * Funciones anónimas
 */

function sumame(num1,num2, sumaYMuestra, sumaPorDos) {
    var sumar = num1+num2;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
sumame(5,10, 
    function(dato){
        console.log("La suma es: "+dato)
},
    function(dato){
        console.log("La suma por dos es :"+dato*2);
});