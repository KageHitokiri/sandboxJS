'use strict'

window.addEventListener('load',()=>{
    let vanishContainer;
    let animationsButton = $('#animationButton');
    let resetButton = $('#resetButton');
    let vanishContainerText = $('#vanishContainerText');

    vanishContainer = $('#vanishContainer');

    $('#showButton').hide();
    /**
     * .show(tiempo) 
     *  Muestra en el tiempo dado
        * tiempo = tiempo en milisegundos o en string
        * =>slow, fast, normal
        * =>Por defecto tiempo = 0;
     * .hide() 
     *  Oculta
     * .fadeIn() 
     *  Muestra mediante desvanecimiento
     * .fadeOut() 
     *  Oculta mediante desvanecimiento
     * .fadeTo(tiempo, opacidad)
     *  Realiza una transición a la opacidad seleccionada en el tiempo establecido
        * opacidad = 0min, 1max
     */
    $('#showButton').click(function(){
        //El propio botón $(this) en esta función, se oculta
        $(this).hide();
        $('#hideButton').show();
        //vanishContainer.show("slow");
        //vanishContainer.fadeIn('slow');
        vanishContainer.fadeTo(1000, 0.8);
    });

    $('#hideButton').click(function(){
        $(this).hide();
        $('#showButton').show();
        //vanishContainer.hide("fast");
        vanishContainer.fadeTo(200, 0.1);
    })
    /**
     * .toggle()
     * .fadeToggle()
     * .slideToggle()
        * slideUp()
        *   Oculta
        * SlideDown()
        *   Muestra
     */
    $('#allInOneButton').click(function(){
        vanishContainer.toggle('fast');
    });

    animationsButton.click(function(){
        vanishContainer.animate({
            marginLeft:'50px',
            fontSize:"40px",
            height: "150px"
        },
            5000, ()=>{
                resetButton.removeAttr('disabled');
            });
        vanishContainerText.innerHTML="test";
        
    });
    resetButton.click(function(){
        vanishContainer.animate({
            marginLeft:'0px',
            fontSize:"15px",
            height: "50px"
        },
            0,()=>{
                resetButton.attr('disabled','disabled');
            });
    });
})