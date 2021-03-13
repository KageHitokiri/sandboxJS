"use strict"

window.addEventListener("load",()=>{
    /**
     * Fetch y peticiones a servicios / apis REST
     */
    var usersDiv;
    usersDiv= document.querySelector("#usersContainer");
        
    getUsers() 
        .then(data => data.json())
        .then(data => {
            listedUsers(data)            
    }) 

    function getUsers(url ="https://jsonplaceholder.typicode.com/users"){
        return fetch(url);
    }

    function listedUsers(users) {
        users.map((user, i)=> {
            let nombre = document.createElement("h2");
            nombre.innerHTML = i+": "+user.username;
            usersDiv.append(nombre);
            console.log(nombre);
        })
    }
})