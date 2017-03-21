(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    var i;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No Selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        //More code to go here


        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });

            console.log(data);
            fn(data);

            this.reset();
            $('#power-ups').css('display', 'none');
            $(".cbox").attr("checked", false);
            $('#num').html('30');
            $('#num').css('background-color', 'green');


            this.elements[0].focus();

        });
    }

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function(event) {
            var emailAddress = event.target.value;
            //console.log(fn(emailAddress));
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorized email address!';
                event.target.setCustomValidity(message);
            }
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;


})(window);
