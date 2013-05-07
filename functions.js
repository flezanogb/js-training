if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    
    argsAsArray : function(fn, arr) {
      
    var cadena='';  
    var sayItCalled = true;
    cadena = fn(arr);
    
    function fn(arr) {

         var i;
         var largo = arr.length;

         for(i=0; i<largo;i++) {

             cadena += arr[i]; 

             if (i<largo-2) {
                 cadena += ', ';
             } 
         }   
      
      return cadena;
    }


    //cadena = 'Hello, Ellie!';
     //argsAsArray(fn, arr):
     
    //console.log(cadena);
    //return cadena;    

    },
    speak : function(fn, obj) {

    },

    functionFunction : function(str) {

    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
