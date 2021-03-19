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
     */
    $('.selectionableList').sortable({
        /**
         * update: nos permite lanzar funciones cuando se actualiza la lista
         */
        update: function(event, ui) {
            console.log("Ha cambiado la lista");
        }
    });
})