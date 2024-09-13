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
                        "state": true
                    },
                    {
                        "cardtype": "credit card",
                        "cardnumber": "0000000000003",
                        "cardcompany": "master card",
                        "assignmentdate": "assigned on 20 Oct 2020",
                        "state": false
                    },
                    {
                        "cardtype": "debit card",
                        "cardnumber": "0000000000002",
                        "cardcompany": "master card",
                        "assignmentdate": "assigned on 23 Aug 2017",
                        "state": true
                    }
                ]
                
            };
           
            let oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(OData);
            this.getView().setModel(oModel,"oBankDetails");


            
        },

        tap:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
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
