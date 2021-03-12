"use strict"

/**
 * Funciones
 */

function calculadora(number1, number2, operator){
    let result;
    
    if (operator=="+"){
        result = number1+number2;
    } else if (operator=="-") {
        result = number1-number2;
    } else if (operator=="*") {
        result = number1*number2;
    } else if (operator=="/") {
        result = number1/number2;
    } else {
        return "Operador inválido";
    }
    return result;
}

let test =calculadora(5,2,"*");
console.log(test);
