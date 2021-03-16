'use strict'

window.addEventListener('load',()=>{
    let itFollowsShowShadow = $('#itFollowsShowShadow');
    let itFollowsHideShadow = $('#itFollowsHideShadow');
    let itFollowsContainer = $('#itFollows');

    itFollowsShowShadow.click(function(){
        $(this).hide();
        itFollowsHideShadow.show();
        itFollowsContainer.show();
        followingShadow();
    });
/**
 * Buscar una forma de reiniciar el estado del cursor.
 */
    itFollowsHideShadow.click(function(){
        $(this).hide();
        itFollowsShowShadow.show();
        itFollowsContainer.hide();
        //$('body').css('cursor','pointer');
    })

    function followingShadow(){
        $(document).mousemove(function(){
            //$('body').css('cursor','none');
            itFollowsContainer.css('left',event.clientX)
                            .css('top',event.clientY);
        })
    }

})