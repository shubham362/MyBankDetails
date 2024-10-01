sap.ui.define([
    'sap/ui/core/mvc/Controller',
      
], function(Controller ) {
    'use strict';
    
    return Controller.extend("shubham.project1.controller.Sample", {
        onInit: function() {

            var odata = {
                "aEmployees":[
        {
        "empid":"10001",
        "empName":"Shubham Kshirsagar",
        "empDesignation":"Analyst",
        "empSkills":"Abap",
        "Email":"shubhamkshirsagar770@gmail.com",
        "empLoc":"Nagpur"
         }, {
            "empid":"10001",
            "empName":"Rohan K",
            "empDesignation":"Analyst",
            "empSkills":"Abap",
            "Email":"shubhamkshirsagar770@gmail.com",
            "empLoc":"Nagpur"
             }, {
                "empid":"10001",
                "empName":"Raju Desai",
                "empDesignation":"Analyst",
                "empSkills":"Abap",
                "Email":"shubhamkshirsagar770@gmail.com",
                "empLoc":"Nagpur"
                 }, 
                 {
                    "empid":"10001",
                    "empName":"Arman Khan",
                    "empDesignation":"Analyst",
                    "empSkills":"Abap",
                    "Email":"shubhamkshirsagar770@gmail.com",
                    "empLoc":"Nagpur"
                     }, 
                     {
                        "empid":"10001",
                        "empName":"Teju Rat",
                        "empDesignation":"Analyst",
                        "empSkills":"Abap",
                        "Email":"shubhamkshirsagar770@gmail.com",
                        "empLoc":"Nagpur"
                         },
                          {
                            "empid":"10001",
                            "empName":"Badhsha Sheik",
                            "empDesignation":"Analyst",
                            "empSkills":"Abap",
                            "Email":"shubhamkshirsagar770@gmail.com",
                            "empLoc":"Nagpur"
                             }, 
                             {
                                "empid":"10001",
                                "empName":"Shubham Kshirsagar",
                                "empDesignation":"Analyst",
                                "empSkills":"Abap",
                                "Email":"shubhamkshirsagar770@gmail.com",
                                "empLoc":"Nagpur"
                            }

]


            }
            let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(odata);
                this.getView().setModel(oModel, "Employee");
            
        }, 
        login: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
            
             
        }
            
      });
});