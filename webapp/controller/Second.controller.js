sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Second", {
        onInit: function () {


            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView3").attachMatched(this._onRouteMatched, this);



          //  this.getOwnerComponent().getRouter("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },
        onBeforeRendering: function () {
             
        } ,onAfterRendering: function() {
	
        }
,
        onSumbit: function () {
            //this.getOwnerComponent().getRouter().navTo("RouteView4");
        },
        onSecondNav: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },



        // _onRouteMatched: function () {
        //     var empid = this.getOwnerComponent().getModel().getProperty("/empId");
        //     var empname = this.getOwnerComponent().getModel().getProperty("/empName");
        //     var empSkills = this.getOwnerComponent().getModel().getProperty("/empSkills");
        //     var empdesc = this.getOwnerComponent().getModel().getProperty("/empDesc");
        //     var email = this.getOwnerComponent().getModel().getProperty("/Email");
        //     var phone = this.getOwnerComponent().getModel().getProperty("/Phone");
        //     var aRelations = this.getOwnerComponent().getModel().getProperty("/aRelations");


        //     this.getView().byId("idTxt").setText(empid);
        //     this.getView().byId("Nametxt").setText(empname);
        //     this.getView().byId("desctxt").setText(empdesc);
        //     this.getView().byId("Emailtxt").setText(email);
        //     this.getView().byId("Phonetxt").setText(phone);
        //     this.getView().byId("Skillstxt").setText(empSkills);
        //     this.getView().byId("aRelations").setText(aRelations);

        // }

    });
});