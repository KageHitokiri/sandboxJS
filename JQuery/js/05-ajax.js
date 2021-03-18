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
})