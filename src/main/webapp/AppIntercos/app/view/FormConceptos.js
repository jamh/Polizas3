Ext.define('AppIntercos.view.FormConceptos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formconceptos',
    itemId: 'formconceptos',
    xtype: 'formconceptos',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
   // url: 'UploadDocumentFE/saveCXP',
    initComponent: function() {

     
        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Concepto',
                    name: 'CONCEPTO_CONC',
                    id: 'txtConcepto',
                    allowBlank: false,
                    readOnly: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'NOMBRE_CONC',
                    id: 'txtConceptoNombre',
                    allowBlank: false,
                    readOnly: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'COMPANIA_CONC',
                    id: 'txtCompaniaConc',
                    allowBlank: true,
                    hidden:true,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta',
                    name: 'CUENTA_CONC',
                    id: 'txtCuentaConc',
                    allowBlank: true,
                    hidden:true,
                    readOnly: true
                }
               

            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaConceptos", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                         this.fireEvent("recargaGridConceptos");
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







