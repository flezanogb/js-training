if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

            var resp = arr.indexOf(item);                       
            return resp;  
    },

    sum : function(arr) {      

        var suma=0;
        var i=0;

        for(i=0;i<arr.length;i++) {
            suma = suma + arr[i];
        }
        return suma;

    },

    remove : function(arr, item) {

    var i=0;
    //Recorremos el array en busca de todos los indices de los items buscados
    for (i=0;i<arr.length;i++) { 
      
         // Localizamos el indice del elemento en buiscado a eliminar array
         var idx = arr.indexOf(item); 

         //console.log(arr +': '+item);

         //Lo eliminamos 
         if(idx!=-1) arr.splice(idx, 1); 
     
     }

     return arr;  

    },
    
    removeWithoutCopy : function(arr, item) {

    var i=0;
    var v=arr.valueOf();

    //Recorremos el array en busca de todos los indices de los items buscados
    for (i=0;i<arr.length;i++) { 
      
         // Localizamos el indice del elemento en buscado a eliminar array
         var idx = arr.indexOf(item); 

         //console.log(arr +': '+item);

         //Lo eliminamos 
         if(idx!=-1) arr.splice(idx, 1); 
     
     }

     return v;  

    },


    append : function(arr, item) {
            
        arr.push(item) 
        return arr;
    },

    truncate : function(arr) {
       
       var i = 0;
       //console.log(arr.pop());
       arr.pop();
       return arr; 

    },

    concat : function(arr1, arr2) {

    var arr3 = [];
    var children = arr3.concat(arr1,arr2); 
    
    return children;

    },

    insert : function(arr, item, index) {

        //console.log(arr + ' : '+ item + ' : '+ index);
        arr.splice(index, 0, item);

        return arr;

    },

    count : function(arr, item) {

        var cantidadOcurrencias = 0;

        for (var i = arr.length - 1; i >= 0; i--) {

            if (arr[i] == item) {
                cantidadOcurrencias++; 
            }

        };

        return cantidadOcurrencias;
    },


    duplicates : function(arr) {

    var sorted_arr = arr.sort(); 

    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
        
    return results;

    },

    square : function(arr) {

     //console.log('ex: '+arr);  

     var newArr = new Array();
     var i=0;

     for(i=0;i<arr.length;i++) {
        newArr[i] = arr[i];
     }

     //console.log('end: '+newArr);
     return newArr;

    },

    findAllOccurrences : function(arr, target) {

        var posicionIndex = [];
        var i = 0;

        for (i=0; i<arr.length; i++) {
            if (arr[i] == target) {
                posicionIndex.push(i);                    
            }
        };
        return posicionIndex;
    }


  };
});
