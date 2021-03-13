"use strict"

window.addEventListener("load",()=>{
    $(document).ready(function(){
        console.log("Locked'n'Loaded!");
    })

    /**
     * Selector ID
     */
    var rojo = $("#parrafoRojo");
    var amarillo = $("#parrafoAmarillo");
    var verde = $("#parrafoVerde");

    rojo.css("background","red")
        .css("color","white");
    console.log("Ahora el idRojo tiene fondo rojo");

    amarillo.css("background","yellow");
    verde.css("background","lightgreen")
        .css("color","blue");

    
})