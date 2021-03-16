'use strict'

window.addEventListener('load',()=>{
    let itFollowsHideButton = $('#itFollowsHideButton');
    let itFollowsShowButton = $('#itFollowsShowButton');

    itFollowsHideButton.click(function(){
        $(this).hide();
        itFollowsShowButton.show();
    });
    itFollowsShowButton.click(function(){
        $(this).hide();
        itFollowsHideButton.show();
    })
})
