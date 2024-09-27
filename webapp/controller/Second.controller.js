sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Second", {
        onInit: function() {
             
        },
        onSumbit: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
        }

        
      });
});