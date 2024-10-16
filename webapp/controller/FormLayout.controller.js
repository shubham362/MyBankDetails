sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Sorter"
], function (Controller, MessageBox) {
    'use strict';

    return Controller.extend("shubham.project1.controller.FormLayout", {
        onInit: function () {

        },
        onAdd: function () {
            var row = new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Input(),
                    new sap.m.Input(),
                    new sap.m.Input(),
                    new sap.m.Input(),
                    new sap.m.Button({
                        text: "delete",

                        press: this.onRemove.bind(this)  // Bind to the controller's delete function
                    })

                ]
            });
            this.getView().byId("CategoriesTable").addItem(row);

        },
        onRemove: function () {
            var oTable = this.byId("CategoriesTable");

            // Get the first row (index 0) and remove it
            var oRow = oTable.getItems()[0];  // This retrieves the first row

            if (oRow) {
                oTable.removeItem(oRow);  // Remove the row from the table
                oRow.destroy();  // Destroy the row to free memory
            }
        },
        onNavBack: function () {
            var oNavContainer = this.getView().getParent();
            oNavContainer.back();
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },
        onBack: function () {

            var oNavContainer = this.getView().getParent();
            oNavContainer.back();
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },

        onSave: function () {


            // var aSupplier = [ ];

            //     //read the suppiler records

            // var aRows = this.getView().byId("CategoriesTable").getItems();
            // for (var i = 0; i < aRows; i++){
            //     var supObj = {
            //         ID: supObj[i].getAggregation("cells")[0].getValue(),
            //         Name: supObj[i].getAggregation("cells")[1].getValue(),
            //         // Address: supObj[i].getAggregation("cells")[0].getValue(),


            //     };
            //     supObj.push(supObj);
            // }

            var sDateTimeValue = this.getView().byId("ReleaseDate").getValue();
            var payload = {


                ID: this.getView().byId("ProductId").getValue(),
                Name: this.getView().byId("ProductName").getValue(),
                Description: this.getView().byId("ProdDes").getValue(),
                Price: this.getView().byId("Price").getValue(),
                Rating: this.getView().byId("Rating").getValue(),
                ReleaseDate: sDateTimeValue
                //  Supplier:aSupplier
            };


            console.log(payload);
            var oModel = this.getOwnerComponent().getModel();
            oModel.create("/Products", payload, {
                success: function () {

                    MessageBox.show("New Product has beeen Sucessfully Create", MessageBox.Icon.success, "Product Created");
                    this.onCancel();
                    oModel.refresh(true);
                }.bind(this),
                error: function () {
                    MessageBox.show("Sonme Error is comming check Intrenet Connectivity", MessageBox.Icon.success, "Oops");
                    // this.onCancel();
                }
            })

        },
        // "ID": 0,
        // "Name": "Bread",
        // "Description": "Whole grain bread",
        // "ReleaseDate": "/Date(694224000000)/",
        // "DiscontinuedDate": null,
        // "Rating": 4,
        // "Price": "2.5"
        onCancel: function () {
            this.getView().byId("ProductId").setValue(" "),
                this.getView().byId("ProductName").setValue(" "),
                this.getView().byId("ProdDes").setValue(" "),
                this.getView().byId("Price").setValue(" "),
                this.getView().byId("Rating").setValue(" ")
        },

        Bsumbit: function () {



            this.getOwnerComponent().getRouter().navTo("RouteView3");

            // var empId = this.getView().byId("EmpID").getValue();
            // var empName = this.getView().byId("emp2").getValue();
            // var empSkills = this.getView().byId("emp3").getValue();
            // var empDesignation = this.getView().byId("emp4").getValue();
            // var Email = this.getView().byId("emp5").getValue();
            // var empphone = this.getView().byId("emp6").getValue();

            // this.getOwnerComponent().getModel().setProperty("/empId", empId);
            // this.getOwnerComponent().getModel().setProperty("/empName", empName);
            // this.getOwnerComponent().getModel().setProperty("/empSkills",empSkills);
            // this.getOwnerComponent().getModel().setProperty("/empDesignation",empDesignation);
            // this.getOwnerComponent().getModel().setProperty("/Email", Email);
            // this.getOwnerComponent().getModel().setProperty("/empphone", empphone);


            //validation For inputbo

            // // this code is for emplyee Id
            // if (empId === "") {
            //     this.getView().byId("EmpID").setValueState("Error");
            //     this.getView().byId("EmpID").setValueStateText("Employee Id is mandatory Please fill it");
            // } else {
            //     this.getView().byId("EmpID").setValueState("None");
            //     var empIdExp = /^[0-9]+$/;
            //     if (!empId.match(empIdExp) || empId.length !== 8) {
            //         this.getView().byId("EmpID").setValueState("Error");
            //         this.getView().byId("EmpID").setValueStateText("Employee Id is not valid");

            //     }
            // }
            // // This code is for Employee Name
            // if (empName === "") {
            //     this.getView().byId("emp2").setValueState("Error");
            //     this.getView().byId("emp2").setValueStateText("Employee Id is mandatory Please fill it");
            // } else {
            //     this.getView().byId("emp2").setValueState("None");
            //     var empNameExp = /^[A-Z]+$/;
            //     if (!empName.match(empNameExp)) {
            //         this.getView().byId("emp2").setValueState("Error");
            //         this.getView().byId("emp2").setValueStateText("Employee Name should be only alphabaytes of length 20");

            //     }
            // }
            //             // This code is for Employee Phone
            //             if (empphone === "") {
            //                 this.getView().byId("emp6").setValueState("Error");
            //                 this.getView().byId("emp6").setValueStateText("Employee Id is mandatory Please fill it");
            //             } else {
            //                 this.getView().byId("emp6").setValueState("None");
            //                 var empPhoneExp = /^[A-Z]+$/;
            //                 if (!empphone.match(empPhoneExp)) {
            //                     this.getView().byId("emp6").setValueState("Error");
            //                     this.getView().byId("emp6").setValueStateText("Employee Name should be only alphabaytes of length 20");

            //                 }
            //             }
            //             // This code is for Employee Designation
            //             if (empDesignation === "") {
            //                 this.getView().byId("emp4").setValueState("Error");
            //                 this.getView().byId("emp4").setValueStateText("Employee Id is mandatory Please fill it");
            //             } else {
            //                 this.getView().byId("emp4").setValueState("None");
            //                 var empDesignationExp = /^[A-Z]+$/;
            //                 if (!empDesignation.match(empDesignationExp)) {
            //                     this.getView().byId("emp4").setValueState("Error");
            //                     this.getView().byId("emp4").setValueStateText("Employee Name should be only alphabaytes of length 20");

            //                 }
            //             }
            //             // This code is for Employee Skills
            //             if (empSkills === "") {
            //                 this.getView().byId("emp3").setValueState("Error");
            //                 this.getView().byId("emp3").setValueStateText("Employee Id is mandatory Please fill it");
            //             } else {
            //                 this.getView().byId("emp3").setValueState("None");
            //                 var empSkillsExp = /^[A-Z]+$/;
            //                 if (!empName.match(empSkillsExp)) {
            //                     this.getView().byId("emp3").setValueState("Error");
            //                     this.getView().byId("emp3").setValueStateText("Employee Name should be only alphabaytes of length 20");

            //                 }
            //             }
            //             // This code is for Employee Email
            //             if (Email === "") {
            //                 this.getView().byId("emp5").setValueState("Error");
            //                 this.getView().byId("emp5").setValueStateText("Employee Id is mandatory Please fill it");
            //             } else {
            //                 this.getView().byId("emp5").setValueState("None");
            //                 var empEmailExp = /^[A-Z]+$/;
            //                 if (!Email.match(empEmailExp)) {
            //                     this.getView().byId("emp5").setValueState("Error");
            //                     this.getView().byId("emp5").setValueStateText("Employee Name should be only alphabaytes of length 20");

            //                 }
            //             }

        }

    });
});