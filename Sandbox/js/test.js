'use strict'

window.addEventListener('load',()=>{
    let itFollowsButton = $('#itFollowsButton');

    itFollowsButton.click(function(){
        if ($(this).html=='Mostrar el puntero'){
            $(this).html('Ocultar el puntero');
        } else {
            $(this).html('Mostrar el puntero');
        }
    });
})



