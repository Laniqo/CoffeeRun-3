(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@csu\.student$/.test(email);
        },

        //if str has 'decaf' and num is greater than 20
        // return false
        decafValidation: function(str, num) {
            if (/\bdecaf\b/.test(str)) {
                console.log('decaf is found');
                if(num < 20){
                  return false;
                }
                else {
                    return true;
                  }
            }
        }

    };


    App.Validation = Validation;
    window.App = App;
})(window);
