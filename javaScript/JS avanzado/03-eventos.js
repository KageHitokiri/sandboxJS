"use strict"

/**
 * Eventos de ratón
 */
/**
 * Click
 */
let button = document.querySelector("#pushMeButton");
button.addEventListener("click", function(){
    switchColor();
});

function switchColor() {
    let buttonBackground = button.style.background;
    if (buttonBackground=="green") {
        button.style.background="yellow";
    } else if (buttonBackground=="yellow") {
        button.style.background="red";
    } else if (buttonBackground=="red") {
        button.style.background="blue";
    } else if (buttonBackground=="blue") {
        button.style.background="grey";
    } else if (buttonBackground=="grey") {
        button.style.background="pink";
    } else {
        button.style.background="green"
    }
    return true;
}
/**
 * MouseOver
 */
button.addEventListener("mouseover", function(){
    button.style.color="purple";
})
/**
 * MouseOut
 */
button.addEventListener("mouseout", function(){
    button.style.border="dotted";
})