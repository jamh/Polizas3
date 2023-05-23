Ext.define('AppPortalAereo.view.FormIngresaPortal', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formingresaportal',
    itemId: 'formingresaportal',
    xtype: 'formingresaportal',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

             var tCuenta = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
                data : [
                    {"CLAVE":"NAC", "NOMBRE":translations.opcionIngresaPortalNac},
                    {"CLAVE":"EXT", "NOMBRE":translations.opcionIngresaPortalExt}
                    
                   
                 
                ]
            });
            
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    id: 'cboIngresaPortal',
                    fieldLabel: translations.formIngresaPortal,
                    name: 'cboIngresaPortal',
                    itemId: 'cboIngresaPortal',
                    displayField: 'NOMBRE',
                    valueField: 'CLAVE',              
                    typeAhead: true,
                    editable:false,
                    store: tCuenta,
                    allowBlank: false,
                    listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           
                        }
                     }
                }

            ], //fin if item

            buttons: [
                {
                    text: translations.btnIngresaPortal,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("ingresaPermisosPortal", btn);
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







