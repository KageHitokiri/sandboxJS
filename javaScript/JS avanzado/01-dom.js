"use strict"

/**
 * DOM
 * Document Object Model
 */

var basicBox;

function colorSwift(color) {
    basicBox.style.background = color;    
}

/**
 * Conseguir elementos por su ID
 */


//basicBox = document.getElementById("basicBox");

basicBox = document.querySelector("#basicBox");

/**
 * Conseguir elementos por su tag
 */

let allDivs = document.getElementsByTagName("div");
let contenido = allDivs[2];
contenido.innerHTML = "Nadie piensa en el 2º";
contenido.style.margin = "5px";
contenido.style.color = "green";

console.log(allDivs);

let value;
for(value in allDivs) {
    if (typeof allDivs[value].textContent=="string") {
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(allDivs[value].textContent);
        parrafo.append(texto);
        document.querySelector("#miSection").appendChild(texto);
    }
}
console.log(allDivs);

/**
 * Conseguir elementos por su clase
 */


/**
 * Código
 */
 basicBox.innerHTML = "Pero no!";
 basicBox.style.background = "red";
 basicBox.style.padding = "10px";
 basicBox.style.border = "solid";
 basicBox.className = "TestingClass";
 
 colorSwift("grey");
 
 console.log(basicBox);