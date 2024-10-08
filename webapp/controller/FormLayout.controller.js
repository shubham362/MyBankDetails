sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';

    return Controller.extend("shubham.project1.controller.FormLayout", {
        onInit: function () {

        },

        Bsumbit: function () {

           
            this.getOwnerComponent().getRouter().navTo("RouteView5"); 

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