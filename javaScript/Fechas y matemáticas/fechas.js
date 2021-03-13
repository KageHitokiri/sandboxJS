"use strict"

var date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El día es: ${day}
    La hora es: ${hour}:${minute}
`;
console.log(textoHora);