sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Second", {
        onInit: function () {


            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView3").attachMatched(this.onPattenMatched, this);



            // this.getOwnerComponent().getRouter().getRoute("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },
        onBeforeRendering: function () {

        }, onAfterRendering: function () {

        },
        onNavBack: function () {
            var oNavContainer = this.getView().getParent();
            oNavContainer.back();
            this.getOwnerComponent().getRouter().navTo("RouteView2"); 
        } ,
        onSumbit: function () {
            // this.getOwnerComponent().getRouter().navTo("RouteView");
        },
        onSecondNav: function () {
            //     this.getOwnerComponent().getRouter().navTo("RouteView5");
        },
        onEdit: function () {
            var PrId = this.getView().byId("idTxt").getText();
            console.log(PrId);
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                prdid: PrId

            });

        },
        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },
        onDelete: function () {
            var PId = this.getView().byId("idTxt").getText();

            var oModel = this.getView().getModel();

            oModel.remove("/Products( " + PId + ")", {
                success: function () {
                    MessageToast.show("The Product has beeen Delete Sucessfully");
                    this.onBack();
                    oModel.refresh(true);
                }.bind(this),
                error: function (oError) {
                    MessageToast.show("Some Error is comming check Intrenet Connectivity");
                    console.error("Error deleting product:", oError);
                }
            })

        },


        onPattenMatched: function (oEvent) {
            // var index = oEvent.getParameter().Index;
            // this.getView().bindElement("/Products(1)");

            var primearyKey = oEvent.getParameter('arguments').prdid;
            this.getView().bindElement("/Products(" + primearyKey + ")");
            // console.log(check);
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