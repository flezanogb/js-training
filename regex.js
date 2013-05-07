if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {

    var buscar = /\d/;
    var resultado = buscar.test(str); //devuelve true

    if (resultado) {
       return true;
     } else {
       return false;
     }


    },

    containsRepeatingLetter : function(sCadena) {      
        
        var sComparador = "";
        var sRepetidos = "";
        var buscar = /\D/g; 
        
        for (var iCont = 0 ; iCont < sCadena.length ; iCont++){
            if (sComparador.indexOf(sCadena.substr(iCont,1)) == -1){
                sComparador += sCadena.substr(iCont,1);
            }else{
                if (sRepetidos.indexOf(sCadena.substr(iCont,1)) == -1)
                    sRepetidos += sCadena.substr(iCont,1);
            }
        }
        

        //*
        if (sRepetidos.length>0) {
              if(buscar.test(sRepetidos)) {
                  return true;
              } else {
                  return false;
              }

        } else {
            return false;
        }
        //*/
        
    },

    endsWithVowel : function(str) {
     
        //Debe finalizar con una vocal y comprobar tanto vocales mayusculas y minusculas
        var patronBuscado = /[aeiouAEIOU]$/;
        var resultado = patronBuscado.test(str)

        if (resultado) {
            //console.log(str+': si termina en vocal ');
            return true;
        } else {
            //console.log(str+': no termina en vocal');
            return false;
        }
    

    },

    captureThreeNumbers : function(str) {

        var resultado = str.match(/\d{3}/);

        if (resultado) {          
            return resultado[0];        
        } else {
            return false;
        }

    },

    matchesPattern : function(str) {

        // Patron valido
        var patron = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/; 
        var permitido = patron.test(str);

        //console.log(patron.test(str));
        if (permitido) {
            return true;
        } else {
            return false;
        }

    },
    isUSD : function(str) {

    /*
      expect(answers.isUSD('$132.03')).to.eql(true);
      expect(answers.isUSD('$32.03')).to.eql(true);
      expect(answers.isUSD('$2.03')).to.eql(true);
      expect(answers.isUSD('$1,023,032.03')).to.eql(true);

      expect(answers.isUSD('$20,933,209.93')).to.eql(true);
      expect(answers.isUSD('$20,933,209')).to.eql(true);
      expect(answers.isUSD('$459,049,393.21')).to.eql(true);

    //*/

    //100, 100.00, $100 or $100.00
    //var patronPermitido = /^((\$\d*)|(\$\d*\.\d{2})|(\d*)|(\d*\.\d{2}))$/;
      var patronPermitido = /^((\$\d*)|(\$\d*\.\d{2})|(\d*)|(\d*\.\d{2}))$/;

      //console.log(str);
      if(patronPermitido.test(str)) {
        return true;
      } else {
        return false;
      }

    }
  };
});
