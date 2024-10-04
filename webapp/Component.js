/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "shubham/project1/model/models",
    "sap/ui/model/json/JSONModel",

],
    function (UIComponent, _Device, models, _JSONModel) {
        "use strict";

        return UIComponent.extend("shubham.project1.Component", {
            metadata: {
                manifest: "json"
            },


            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                //Model Creation
                var oModel = new sap.ui.model.json.JSONModel("model/Empmodel");
                this.setModel(oModel);
                // var FModel = sap.i.model.json.JSONModel("localService/metadata")
                // this.setModel(FModel);
                // enable routing
                this.getRouter().initialize();


                // set the device model
               // this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);