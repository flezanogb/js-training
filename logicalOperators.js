if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {

	//console.log(a+' / '+b);

//*
		if (a==true || b==true) {
		    //console.log('verdadero en 1 '+a+' : '+b);	    
		    return true;
		} 
    	else {
//    		console.log('verdadero en 3: '+a+' : '+b);
    		return false;
    	}
//*/

    },

    and : function(a, b) {

	//console.log(a+' / '+b);

		if (a==false && b==false) {
		    //console.log('falso en 1');	    
		    return false;
		} 
		else if (a==true && b==false) {
    		//console.log('falso en 2');
    		return false;
    	}    	
    	else {
    		//console.log('verdadero en 3: '+a+' : '+b);
    		return true;
    	}

    }
  };
});
