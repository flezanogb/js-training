if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {

    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {

        var num = a * b;
        var val = num.toPrecision(1); 
        //console.log(val);
        return val;
    }
  };
});

