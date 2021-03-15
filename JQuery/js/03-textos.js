'use strict'

window.addEventListener('load',()=>{

    reloadLinks();

    $('#addButton')
        /**
         * Elimina el atributo seleccionado
         */
        .removeAttr('disabled')
        .click(function(){
        let newLink;
        newLink = $('#addLink').val();
        //console.log(newLink);
        /**
         * .html sobreescribe el contenido
         * .append lo añade al final
         * .prepend lo añade al principio
         */
        $('#addLink').val('');
        $('#linksMenu').append('<li><a href="'+newLink+'"</a></li>');
        reloadLinks();
        
    });

    //console.log($('a').length);

    function reloadLinks(){
        $('a').each(function(index){
            let that;
            let links;
            
            that = $(this);
            links= that.attr('href');
            
            //console.log(that.attr('href'));
            //Abre los enlaces en una pestaña nueva
            that.attr('target','_blank');
            
            that.text(links);
        });
    }
})