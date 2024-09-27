sap.ui.define([
    'sap/ui/core/mvc/Controller',
      
], function(Controller ) {
    'use strict';
    
    return Controller.extend("shubham.project1.controller.Sample", {
        onInit: function() {
             
        }, 
        login: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
            
             
        }
            
      });
});