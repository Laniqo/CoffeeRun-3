//To recieve the window object for use inside the function body and retrieves
//the constructors you defines as part of the window.App namespace
(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    //var RATE_SELECTOR = '[data-coffee="rate"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var checkList = new CheckList(CHECKLIST_SELECTOR);

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    //console.log(formHandler);

    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.coffeeOrderHandler(Validation.decafValidation);
    //formHandler.coffeeRangeHandler(Validation.rangeValidation);
})(window);
