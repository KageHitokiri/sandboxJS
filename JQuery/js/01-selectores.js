"use strict"

window.addEventListener("load",()=>{
    $(document).ready(function(){
        console.log("Locked'n'Loaded!");
    })

    /**
     * Selector ID
     */
    var rojo;
    var amarillo;
    var verde;
    var zebra;
    var parrafos;
    let search;

    rojo = $("#parrafoRojo");
    amarillo = $("#parrafoAmarillo");
    verde = $("#parrafoVerde");

    rojo.css("background","red")
        .css("color","white");
    console.log("Ahora el idRojo tiene fondo rojo");

    amarillo.css("background","yellow");
    verde.css("background","lightgreen")
        .css("color","blue");

    /**
     * Selectores de clase
     */

    zebra =$(".zebra");
    //var borderlessCSS = $(".borderless");
    console.log(zebra);

    zebra.css("border", "3px dashed black");
    $(".borderless").click(function(){
        console.log("Has hecho click");
        $(this).addClass("zebra");
    });
    /**
     * Selectores de etiqueta
     */
    
    parrafos =$("p").css("cursor","pointer");

    parrafos.click(function(){
        let that = $(this);
        if(!that.hasClass("pequeño")) {
            that.addClass("pequeño");
        } else {
            that.removeClass("pequeño");
        }
        
    });
    /**
     * Selectores de atributo
     */

    $('[title="Google"]').css('background', '#afafaf');
    $('[title="GitHub"]').css('background','#000000')
                        .css('color','white');
    /**
     * Otros
     */
    $('p,a').addClass("margenSuperior");

    

    search = $('#containerBox .resaltado');
    console.log(search);
                    
})