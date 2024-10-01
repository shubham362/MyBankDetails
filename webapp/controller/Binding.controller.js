sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Binding", {
        onInit: function () {


            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.getRoute("RouteView3").attachMatched(this._onRouteMatched, this);



            //this.getOwnerComponent().getRouter("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },
    });
});