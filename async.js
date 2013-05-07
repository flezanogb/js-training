if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
       
        //*

        var results = [];        
        var obteniendoListado = $.getJSON(url, function(datos) {

            var largo = datos["people"].length;  
            var arr = datos["people"];

            $.each(arr, function(idx, lista) {
                result = lista.name;
                results.push(result);
            });   

        });   
        
        obteniendoListado.done(function() { // Esta función se ejecutará cuando la promesa esté resuelta
            lastResult = results.sort();
            console.log(lastResult.join(" "));
            //return deferred.resolve(results.join(" "));            
        });

        obteniendoListado.then(function() {
            //alert(' '+ obteniendoListado.done());
        });    

        obteniendoListado.fail(function() {
            alert('fail connect');
        });   


        //*/           
    }
  };
});


