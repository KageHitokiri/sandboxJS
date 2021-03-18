'use strict'

/**
 * https://reqres.in/
 */

$(document).ready(()=>{
    /**
     * Load
     * divID.load('enlace');
     */

    //$('#containerBox').load('https://reqres.in/');
    /**
     * Get
     */

    $.get('https://reqres.in/api/users?page=2', {page:3}, function(response){
        console.log(response);
        response.data.forEach((element, index)=>{
            $('#containerBox').append("<p>"+(index+1)+": "+element.first_name+" "+element.last_name+". Email: "+element.email+"</p>");
        });
    });

    /**
     * Post
     */

    $('#postForm').submit((e)=>{
        e.preventDefault();
        
        var user = {
            name    : $('#nameInputText').val(),
            web     : $('#webInputText').val()
        }
        //console.log(user);
        /*
        $.post('https://reqres.in/api/users?page=2', user, function(response){
            console.log(response);
        });
        */
    /**
     * $.ajax
     * type: 
     *  tipo de petición
     * url: 
     *  Enlace al que se realiza la petición
     * dataType: 
     *  tipo de los datos
     * data: 
     *  variable de datos
     * beforeSend:()=> 
     *  Se realiza antes de realizar la petición
     * success:()=> 
     *  Se ejecuta cuando la petición se ha realizado
     * error:()=> 
     *  Se ejecuta si hay algun error en la petición
     * timeout:number
     *  number=Valor en milisegundos
     *  Tiempo maximo para que se resuelva la petición
     *  Si transcurre ese tiempo, lanza error
     */
        $.ajax({
            type        :'POST',
            url         :$(this).attr('action'),
            data        :user,
            beforeSend  :function(){
                console.log("Enviando usuario...");
            },
            success     :function(response){
                console.log(response);
            },
            error       :function(){
                console.log("Se ha liado, pollito");
            },
            timeout     :2000
        })
        /**
         * Añadimos un return false para evitar que nos redirija
         * De no estar, nos redirigirá a reqres
         */

        return false;
    });


})