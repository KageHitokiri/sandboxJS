'use strict'

window.addEventListener('load',()=>{

    let box;
    let nameInput;
    let dataBox;

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
    dataBox = $('#data');

    nameInput.focus(function(){
        $(this).css('border','2px solid green');
    });

    nameInput.blur(function(){
        $(this).css('border','1px solid transparent');
        dataBox.text($(this).val()).show();
    });
    /**
     * Mousedown y Mouseup
     */
    dataBox.mousedown(function(){
        $(this).css('border-color','gray')
                .css('background',"orange");
    });

    dataBox.mouseup(function(){
        $(this).css('border-color','black')
                .css('background',"white");
    });

    /**
     * Mousemove
     */

    $(document).mousemove(function(){
        //console.log(event.clientX);
        //console.log(event.clientY);
        $('body').css('cursor','none');
        $('#itFollows').css('left',event.clientX)
                        .css('top',event.clientY);

    })

})