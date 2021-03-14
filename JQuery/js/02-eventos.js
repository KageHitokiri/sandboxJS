'use strict'

window.addEventListener('load',()=>{
    $(document).ready(function(){
        alert("Event loaded");
    })

    let box;

    /**
     * mouseover y mouseout
     */

    box = $('#containerBox');
    /*
    box.mouseover(function(){
        $(this).css('background','red');
    });
    box.mouseout(function(){
        $(this).css('background','yellow');
    });
    */

    /**
     * Hover
     */
    function switchToRed(){
        $(this).css('background','red');
    };
    function switchToGreen(){
        $(this).css('background','yellow');
    };
    box.hover(switchToRed, switchToGreen);
})