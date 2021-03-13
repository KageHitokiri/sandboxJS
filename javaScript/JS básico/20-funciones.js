"use strict"

/**
 * Funciones
 */
function add(number1, number2) {
    return number1+number2;
}
function substract(number1, number2) {
    return number1-number2;
}
function multiplication (number1, number2) {
    return number1*number2;
}
function division(number1, number2) {
    return number1/number2;
}

function calculadora(number1, number2=3, operator = "+"){
    let result;

    if (operator=="+"){
        result = add(number1,number2);
    } else if (operator=="-") {
        result = substract(number1,number2);
    } else if (operator=="*") {
        result = multiplication(number1,number2);
    } else if (operator=="/") {
        result = division(number1,number2);
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