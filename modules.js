if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {

		var myApp = ( function(str1, str2) {

			//Propiedades / Variables - Privadas
	    	var foo = 'Module Pattern';
		  	var bar = 'ver 1.0';	
		 
		 	//Metodo - Funcion privado
			var sum = function( param1, param2 ) {
			    return param1 + param2;
			}
	
		    return {
		      myMessage: function(){
		        return foo + ' ' + bar;
		      }
		    }
		    		
		})();

    }
  };
});

