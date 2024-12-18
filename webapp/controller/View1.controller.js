sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    function (Controller) {
        "use strict";

        return Controller.extend("shubham.project1.controller.View1", {
            onInit: function () {


                let OData = {
                    "accountdetails": { 
                        "accountnum": "00000000009",
                        "name": "Techtutsindia",
                        "ifsc": "0000001",
                        "customerid": "12345",
                        "address": {
                            "city": "Manhattan ",
                            "postalcode": "000000",
                            "housenumber": "001",
                            "street": "Wall Street",
                            "state": "New York",
                            "country": "USA"
                        }
                    },
                    "carddetails": [
                        {
                            "cardtype": "debit card",
                            "cardnumber": "0000000000001",
                            "cardcompany": "Visa card",
                            "assignmentdate": "assigned on 23 Aug 2017",
                            "state": true,
                            "infoState":"Warning"
                        },
                        {
                            "cardtype": "credit card",
                            "cardnumber": "0000000000003",
                            "cardcompany": "master card",
                            "assignmentdate": "assigned on 20 Oct 2020",
                            "infoState":"Success",
                            "state": false
                        },
                        {
                            "cardtype": "debit card",
                            "cardnumber": "0000000000002",
                            "cardcompany": "master card",
                            "assignmentdate": "assigned on 23 Aug 2017",
                            "infoState":"Error",
                            "state": true
                        },{
                            "cardtype": "debit card",
                            "cardnumber": "0000000000002",
                            "cardcompany": "master card",
                            "assignmentdate": "assigned on 23 Aug 2017",
                            "infoState":"Error",
                            "state": true
                        }
                    ]

                };

                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(OData);
                this.getView().setModel(oModel, "oBankDetails");



            },

            tap: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView5");
            },

            onOpenBankDetails: function () {
                if (!this.MoreBankDetail) {
                    this.MoreBankDetail = this.loadFragment(
                        { name: "shubham.project1.view.fragments.MoreBankDetail" }
                    );
                }
                this.MoreBankDetail.then(
                    function (ODialog) {
                        ODialog.open();

                    });
            },
            onCloseBankDetails: function () {
                this.byId("MoreBankDetail").close();

            }



            // onReadData:function() {
            //     var ODataModel =   this.getownerComponent().getModel();
            //     ODataModel.read("/Products",{
            //       success:function(O){
            //           debugger;
            //       },
            //       errot:function(oEvent){
            //           debugger;
            //       }
            //     });

            //   }








        });
    });
