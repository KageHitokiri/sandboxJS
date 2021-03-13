"use strict"

window.addEventListener("load", () =>{
    /**
     * Timers
     */
    var firstTimeOut
    firstTimeOut = setTimeout(()=>{
        let boldText = document.querySelector("p");
        boldText.style.fontWeight="bold";
    }, 1000)

    function interval (setTime=500){
        /**
         * SetInterval
         * El código ocurre cada x milisegundos
         */
        let time;
        time = setInterval(function(){
            console.log("Set interval ejecutado");
    
            let text = document.querySelector("p");
            if (text.style.color=="black") {
                text.style.color="red";    
            } else if (text.style.color=="red") {
                text.style.color="blue";    
            } else {
                text.style.color="black";    
            } 
            
        }, setTime);
        return time;
    };
    let time = interval();
    let stopButton;
    let restartButton;

    stopButton = document.querySelector("#stopButton");
    restartButton = document.querySelector("#restartButton");

    stopButton.addEventListener("click",()=>{
        alert("Has detenido el parpadeo");
        clearInterval(time);
    })

    restartButton.addEventListener("click",()=>{
        alert("Has reiniciado el parpadeo");
        interval();
    })
  
})