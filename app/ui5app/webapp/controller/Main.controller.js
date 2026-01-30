sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("ui5app.controller.Main", {
    onInit: function () {
      console.log("UI5 funcionando 🎉");
    },

    onGetOrden: function () {

            // Carga Lineas
            //oView.getController().onCargaCboLineas();

            //ui5app -> Es el valor de "id": "ui5app" en el manifest.json
            this.dialogGetOrden = sap.ui.xmlfragment("getOrden", "ui5app.fragment.buscarOrden", this);
            
            this.getView().addDependent(this.dialogGetOrden);
            this.dialogGetOrden.open();
        },

    onCloseModalBuscarOrden: function (oEvent) {
            this.dialogGetOrden.destroy();
        }


  });
});