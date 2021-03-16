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

    itFollowsHideShadow.click(function(){
        $(this).hide();
        itFollowsShowShadow.show();
        itFollowsContainer.hide();
    })

    function followingShadow(){
        $(document).mousemove(function(){
            itFollowsContainer.css('left',event.clientX)
                            .css('top',event.clientY);
        })
    }
    
})
