sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    'sap/ui/export/Spreadsheet',

], function (Controller, FilterOperator, Filter, Sorter, Spreadsheet) {
    'use strict';
    return Controller.extend("shubham.project1.controller.Binding", {
        onInit: function () {
            // var oModel = new JSONModel(sap.ui.require.toUrl("model/Empmodel.json"));
            // this.getView().setModel(oModel);

            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.getRoute("RouteView3").attachMatched(this._onRouteMatched, this);



            // this.getOwnerComponent().getRouter("RouteView3").attachedParameterMatched(this.onPattenMatched, this);
        },


        onExport: function () {
            var aCols, oRowBinding, oSettings, oSheet, oTable;

            if (!this._oTable) {
                this._oTable = this.byId('LstProd');
            }

            oTable = this._oTable;
            oRowBinding = oTable.getBinding('items');
            aCols = this.createColumnConfig();

            oSettings = {
                workbook: {
                    columns: aCols,
                    hierarchyLevel: 'Level'
                },
                dataSource: oRowBinding,
                fileName: 'Table export sample.xlsx',
                worker: false // We need to disable worker because we are using a MockServer as OData Service
            };

            oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function () {
                oSheet.destroy();
            });
        },

        createColumnConfig: function () {
            return [
                {
                    label: "ID",
                    property: "ID",
                    type: "string"
                },
                {
                    label: "Name",
                    property: "Name",
                    type: "string"
                },
                {
                    label: "Description",
                    property: "Description",
                    type: "string"
                },
                {
                    label: "ReleaseDate",
                    property: "ReleaseDate",
                    type: "Date"
                },
                {
                    label: "Rating",
                    property: "Rating",
                    type: "number"
                },
                {
                    label: "Price",
                    property: "Price",
                    type: "string"
                }
            ];
        },
        onBeforeRendering: function () {
            var oList = this.byId("LstProd");
            var oBinding = oList.getBinding("items");
            var oSorter = new sap.ui.model.Sorter("Name", false);  // false = ascending
            oBinding.sort(oSorter);
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
                var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQueryUpper);
                //var oFilter = new Filter("Name", FilterOperator.Contains, value);
                aFilter.push(oFilter);
            }
            this.getView().byId("LstProd").getBinding("items").filter(aFilter);


        },

        // onSort: function () {
        //     var oList = this.byId("LstProd"); // Replace with your list ID
        //     var oBinding = oList.getBinding("items");

        //     // Create a new sorter with the provided parameters
        //     var oSorter = new sap.ui.model.Sorter("Name", false);

        //     // Apply the sorter to the binding
        //     oBinding.sort(oSorter);
        // },
        // onAdd: function () {
        //     var row = new sap.m.ColumnListItem({
        //         cells: [
        //             new sap.m.Input(),
        //             new sap.m.Input(),
        //             new sap.m.Input(),
        //             new sap.m.Input(),
        //             new sap.m.Input(),
        //         ]
        //     });
        //     this.getView().byId("LstProd").addItem(row);

        // },
        onCreate: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
        },
        onSort: function () {
            var oSorter = new sap.ui.model.Sorter("Name", false);
            // var oSorter = new sap.ui.model.Sorter("Name", true);
            this.getView().byId("LstProd").getBinding("items").filter(oSorter);
        },

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