sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Second", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView3").attachMatched(this._onRouteMatched, this);



            // this.getOwnerComponent().getRouter("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },
        onSumbit: function () {
            //this.getOwnerComponent().getRouter().navTo("RouteView4");
        },


        _onRouteMatched: function () {
            var empid = this.getOwnerComponent().getModel().getProperty("/empId");
            var empname = this.getOwnerComponent().getModel().getProperty("/empName");
            var empSkills = this.getOwnerComponent().getModel().getProperty("/empSkills");
            var empdesignation = this.getOwnerComponent().getModel().getProperty("/empDesignation");
            var email = this.getOwnerComponent().getModel().getProperty("/Email");
            var phone = this.getOwnerComponent().getModel().getProperty("/empphone");


            this.getView().byId("idTxt").setText(empid);
            this.getView().byId("Nametxt").setText(empname);
            this.getView().byId("desctxt").setText(empdesignation);
            this.getView().byId("Emailtxt").setText(email);
            this.getView().byId("Phonetxt").setText(phone);
            this.getView().byId("Skillstxt").setText(empSkills);

        }

    });
});