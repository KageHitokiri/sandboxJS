"use strict"

/**
 * Funciones
 */

function calculadora(number1, number2=3, operator = "+"){
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

let test =calculadora(5,2);
console.log(test);

test =calculadora(10,5,"-");
console.log(test);

test =calculadora(3);
console.log(test);