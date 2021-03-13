"use strict"

window.addEventListener("load",()=>{
    /**
     * Fetch y peticiones a servicios / apis REST
     */
    var usersDiv;
    var studentDiv;
    usersDiv= document.querySelector("#usersContainer");
    studentDiv = document.querySelector("#studentContainer");

    getUsers() 
        .then(data => data.json())
        .then(data => {
            listedUsers(data);
            return getInfo();            
    })
    .then(data => {
        console.log(data);
        studentDiv.innerHTML = data;
    })

    function getUsers(url ="https://jsonplaceholder.typicode.com/users"){
        return fetch(url);
    }

    function getInfo(){
        let alumno = {
            nombre: "Carlos",
            apellidos: "Ramos",
            url: null}

            return new Promise((resolve, reject)=>{
                let alumnoString;
                
                setTimeout(()=>{
                    alumnoString = JSON.stringify(alumno);
                if (typeof alumnoString!= "string") {
                    return reject("Error!");
                } 
                return resolve(alumnoString);
                }, 1000);                
        });
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