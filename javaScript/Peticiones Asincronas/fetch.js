"use strict"

window.addEventListener("load",()=>{
    /**
     * Fetch y peticiones a servicios / apis REST
     */
    let usuarios = [];
    var usersDiv;
    usersDiv= document.querySelector("#usersContainer");
        
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios);
            
            usuarios.map((user, i)=> {
                let nombre = document.createElement("h2");
                nombre.innerHTML = i+": "+user.username;
                usersDiv.append(nombre);
                console.log(nombre);
            })
        usersDiv.append("Fin de la lista");
    }) 
})