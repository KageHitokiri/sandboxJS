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
    $('.selectionableList').selectable();
})