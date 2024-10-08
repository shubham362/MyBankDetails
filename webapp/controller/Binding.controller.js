sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

], function (Controller, FilterOperator, Filter, Sorter) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Binding", {
        onInit: function () {
            // var oModel = new JSONModel(sap.ui.require.toUrl("model/Empmodel.json"));
            // this.getView().setModel(oModel);

            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.getRoute("RouteView3").attachMatched(this._onRouteMatched, this);



            // this.getOwnerComponent().getRouter("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },
        onSecChng: function (oEvent) {
            var PrId = oEvent.getParameter("listItem").getBindingContext().getProperty("ID");
            this.getOwnerComponent().getRouter().navTo("RouteView3", {
                prdid: PrId


                // alert();
                // var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                // var index = sPath.split("/", [2]);
            });


        },
        onSelectChange: function (oEvent) {
            var Select = oEvent.getParameter("selectedItem").getText();
            console.log(Select);


        },
        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var aFilter = [];
            var sQueryLower = sQuery.toLowerCase();
            var sQueryUpper = sQuery.toUpperCase();
            if (sQuery && sQuery.length > 0) {
                var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQueryLower);
                var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains,  sQueryUpper);
                //var oFilter = new Filter("Name", FilterOperator.Contains, value);
                aFilter.push(oFilter);
            }
            this.getView().byId("LstProd").getBinding("items").filter(aFilter);


        },
        onSort: function () {
            var oList = this.byId("LstProd"); // Replace with your list ID
            var oBinding = oList.getBinding("items");

            // Create a new sorter with the provided parameters
            var oSorter = new sap.ui.model.Sorter("Name", false);

            // Apply the sorter to the binding
            oBinding.sort(oSorter);
        },
        // onSort: function () {
        //     var oSorter = new  sap.ui.model.Sorter("Name", false);
        //     // var oSorter = new sap.ui.model.Sorter("Name", true);
        //     this.getView().byId("LstProd").getBinding("items").filter(oSorter);
        // },

        onChange: function (oEvent) {

            var aSelectedItems = oEvent.getSource().getSelectedItems();
            var aSelectedTexts = [];
            aSelectedItems.forEach(function (oItem) {
                aSelectedTexts.push(oItem.getText());

            });

            console.log("Selected Items: " + aSelectedTexts.join(", "));

            // var getDec = oEvent.getParameter("selectedItem");
            // for (var i = 0; i < getDec.length; i++){
            //     console.log(getDec[i].getText());


            // }
        }
    });
});