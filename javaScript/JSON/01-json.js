"use strict"

window.addEventListener("load", () =>{
    let juego;
    let juegos;
    let gamesContainer;
    /**
     * 
     */
    gamesContainer = document.querySelector("#gamesContainer");
    juego = {
        titulo: "Golden Sun",
        año: 2001,
        desarrolladora: "Camelot",
        plataforma: "GameBoy Advance"
    };

    

    juegos = [
        {titulo: "Cyberpunk 2077", año: 2020, desarrolladora: "CDPR", plataforma: "PC/PS4/PS5/Xbox 360/Xbox Series X"},
        juego
    ];

    for (let index in juegos) {
        let p = document.createElement("p");
        p.append("Título: "+juegos[index].titulo+" Año: "+juegos[index].año);
        gamesContainer.append(p);
    }
    console.log(juegos);
})