'use strict'

$(document).ready(()=>{
    console.log("hola");
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
})