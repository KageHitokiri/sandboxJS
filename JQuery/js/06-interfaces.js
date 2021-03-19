'use strict'

$(document).ready(()=>{
    console.log("hola");

    let launchEffect = $('#launchEffect');
    let effectsDiv = $('#effects');

    /**
     * draggable
     * Permite mover y reposicionar el elemento
     */
    $('.elemento').draggable();

    /**
     * Resizable
     */
    $('.elemento').resizable();

    /**
     * Seleccionar elementos
     */
    //$('.selectionableList').selectable();
    /**
     * Reordenar elementos de una lista
     * No puede usarse a la vez que selectable()
     */
    $('.selectionableList').sortable({
        /**
         * update: nos permite lanzar funciones cuando se actualiza la lista
         */
        update: function(event, ui) {
            console.log("Ha cambiado la lista");
        }
    });

    /**
     * Drop
     * Necesitamos un elemento draggable
     * drop: 
     *  lanza la función cuando dejamos un elemento dentro del $(this)
     */
    $('#movedElement').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Hay algo dentro dle área");
        }
    });

    /**
     * Efectos
     * toggle
     *  toggle('effect', ms)
     *      ms = valor en milisegundos, tiene valor por defecto
     *  effect
     *      fade
     *          El contenedor (des)aparece en los ms insertados
     *      explode
     *          Realiza una animación de "explosión"
     *      blind
     *          Efecto "persiana"
     *      slide
     *          Efecto "Puerta corredera"
     * effect('effect',ms)
     *      effect permite usar efectos no nativos con jquery
     * fadeToggle(ms) = toggle('fade', ms)
     * 
     */

    launchEffect.click(function(){
        //effectsDiv.fadeToggle(2000);
        //effectsDiv.effect('explode',500);
        //effectsDiv.toggle('blind',1000);
        //effectsDiv.toggle('slide',1000);
        effectsDiv.toggle('shake', 500);
    })

    /**
     * Tooltip
     * muestra el valor del atributo "title" de la etiqueta
     */

    $(document).tooltip();

    /**
     * Dialog
     */
    $('#launchPopup').click(()=>{
        $('#popup').dialog();
    })
    
})