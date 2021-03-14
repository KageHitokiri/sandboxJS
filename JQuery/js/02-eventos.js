'use strict'

window.addEventListener('load',()=>{
    $(document).ready(function(){
        alert("Event loaded");
    })

    let box;
    let nameInput;

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

    /**
     * Click & DoubleClick
     */

    box.click(function(){
        $(this).css('background','ligthblue')
                .css('color','purple');
    });
    box.dblclick(function(){
        $(this).css('background','pink')
                .css('color','orange');
    });
    /**
     * Focus y blur
     */
    nameInput = $('#name');
    nameInput.focus(function(){
        $(this).css('border','2px solid green');
    });

    nameInput.blur(function(){
        $(this).css('border','1px solid transparent');
        $('#data').text($(this).val()).show();
    });
})