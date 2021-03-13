"use strict" 

window.addEventListener("load", () =>{

    /**
     * Permite almacenar información información mientras dure la sesión
     * Memoria de Front End
     */

    /**
     *Comprueba la compatibilidad de LocalStorage
     */
    if (typeof(Storage)!= "undefined") {
        console.log("Local Storage disponible");
    } else {
        console.log("Local Storage no disponible");
    }
    /**
     * Almacenar datos en LocalStorage
     */

    localStorage.setItem("Titulo", "Golden Sun");
    /**
     * Recuperar datos de LocalStorage
     */
    document.querySelector("#gamesContainer").innerHTML=localStorage.getItem("Titulo");

    /**
     * Guardar objetos JSON en el LS
     */

    let user = {
        nombre: "Carlos",
        email: "skhcri@gmail.com",
        web: null
    };
    /**
     * Convertimos el objeto a JsonString
     */
    localStorage.setItem("Usuario", JSON.stringify(user));
    /**
     * Recuperar un JsonString en objeto de nuevo
     */
    let userJS = JSON.parse(localStorage.getItem("Usuario"));
    console.log(userJS);
    document.querySelector("#userData").append("Nombre de usuario: "+userJS.nombre);
    /**
     * Limpiamos toda la memoria del LocalStorage
     */
    localStorage.clear();
})