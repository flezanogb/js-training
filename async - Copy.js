if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {

       var dataString = []; 
       var listadoNombres='';

        var jqxhr = $.ajax({
            url: url,
            async: false,
            ifModified: true,
            dataType: 'json',
            success: function (data, status) {
                   
                    $.each(data.people, function(idx, lista) {
                          dataString[idx] = lista['name']; 
                    })   

                    dataString.sort();       
                    for(var i in dataString) {
                        listadoNombres += dataString[i]+' ';
                    }                        
                    
                    dataString.length;
                    //return listadoNombres;
                    //console.log(listadoNombres);
            },
            error: function() { console.log('error') }
        });


        return jqxhr;

        /*
        var listadoNombres = '';
        $.getJSON(url, function(datos) {

            var largo = datos["people"].length;  
            var arr = datos["people"];

            $.each(arr, function(idx, lista) {
                listadoNombres += lista.name+' ';                    
            });

            //listadoNombres = 'Adam Alex Matt Paul Rebecca';
            //console.log(listadoNombres);
            return listadoNombres; 
        });   

        //*/           
    }
  };
});
