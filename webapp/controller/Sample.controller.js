sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox'
], function (Controller, MessageBox) {
    'use strict';

    return Controller.extend("shubham.project1.controller.Sample", {
        onInit: function () {

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView2").attachMatched(this.onPattenMatched, this);
        },

        onPattenMatched: function (oEvent) {
            var primearyKey = oEvent.getParameter('arguments').prdid;
            this.getView().bindElement("/Products(" + primearyKey + ")");

        },

        onUpdate: function () {
            var PId = this.getView().byId("ProductId_").getValue().trim();

          //  var ReleaseDatee = this.getView().byId("ReleaseDate").getValue();
            
            var payload = {
                ID: this.getView().byId("ProductId_").getValue(),
                Name: this.getView().byId("ProductName_").getValue(),
                Description: this.getView().byId("ProdDes_").getValue(),
                Price: this.getView().byId("Price_").getValue(),
                Rating: this.getView().byId("Rating_").getValue(),
                ReleaseDate: this.getView().byId("ReleaseDatee").getValue()
            };
            console.log(payload);
            var oModel = this.getOwnerComponent().getModel();
            var csrfToken = oModel.getHeaders()['x-csrf-token'];
            oModel.update("/Products( " + PId + ")", payload, {
                Headers: {
                    "x-csrf-token": csrfToken
                },
                success: function () {
                    MessageBox.show("The Product has beeen Sucessfully Update", MessageBox.Icon.success, "Product Created");
                },
                error: function (oError) {
                    console.log(oError);
                    MessageBox.show("Some Error is comming check Intrenet Connectivity", MessageBox.Icon.success, "Oops");

                }
            })

        },
        onBack: function () {

            var oNavContainer = this.getView().getParent();
            oNavContainer.back();
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },
        onNavBack: function () {
            var oNavContainer = this.getView().getParent();
            oNavContainer.back();
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },

        login: function () {
            //    this.getOwnerComponent().getRouter().navTo("RouteView4");


        }

    });
});