"use strict"
/**
 * Evento Load
 */
window.addEventListener("load", ()=> {
        /**
     * Declaración de variables
     */
    let button = document.querySelector("#pushMeButton");
    let input = document.querySelector("#inputField")
    /**
     * Eventos de ratón
     */
    
    /**
     * Click
     */

    button.addEventListener("click", function(){
        switchColor();
        this.style.border="5px solid black";
        console.log(this);
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
    /**
     * Eventos de campo
     */

    /**
     * Focus
     */
    input.addEventListener("focus",function(){
        console.log("[Event=Focus]Estás haciendo foco al input");
    })

    /**
     * Blur
     */
    input.addEventListener("blur",function(){
        console.log("[Event=Blur]You're outta range!");
    })
    /**
     * KeyDown
     */
    input.addEventListener("keydown",function(event){
        console.log("[Event=KeyDown]Acabas de pulsar la tecla "+String.fromCharCode(event.keyCode));
    })
    /**
     * KeyPress
     */
    input.addEventListener("keypress",function(event){
        console.log("[Event=KeyPress]Estás pulsando la tecla "+String.fromCharCode(event.keyCode));
    })
    /**
     * KeyUp
     */
    input.addEventListener("keyup",function(event){
        console.log("[Event=KeyUp]Has dejado de pulsar la tecla "+String.fromCharCode(event.keyCode));
    })
}) 
