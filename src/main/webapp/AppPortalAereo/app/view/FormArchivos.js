Ext.define('AppPortalAereo.view.FormArchivos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formarchivos',
    itemId: 'formarchivos',
    xtype: 'formarchivos',
    bodyPadding: 5,
    //width: 600,
    //title:'Carga Factura Electronica',
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'UploadDocumentFE/save',
    initComponent: function() {

        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'COMPANIA',
                    id: 'idCOMPANIA',
                    hidden:true,
                    allowBlank: false,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RFC',
                    name: 'RFC',
                    id: 'archCORFC',
                    allowBlank: false,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RFC_PROV',
                    name: 'RFC_PROV',
                    id: 'archCORFCPROV',
                    allowBlank: false,
                    hidden:true,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'archCOMPANIA',
                    id: 'archCOMPANIA',
                    allowBlank: false,
                    readOnly: true
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    id: 'uploadItemFE',
                    fieldLabel: 'XML',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Archivo...'
                },

                {
                    xtype: 'filefield',
                    name: 'file2',
                    id: 'uploadItem2FE',
                    fieldLabel: 'PDF',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: true,
                    anchor: '100%',
                    buttonText: 'Archivo...'
                },
                 {
                    xtype: 'combobox',
                    name: 'archIDCONCGASTO',
                    id: 'archIDCONCGASTO',
                    allowBlank: true,
                    hidden:true,
                    typeAhead: true,
                    minChars: 0,
                    editable: false,

                    width: 350
                    
                },
                
                {
                    xtype: 'textfield',
                    fieldLabel: 'Orden Compra',
                    name: 'ORDEN_COMPRA',
                    id: 'archORDEN_COMPRA',
                    allowBlank: false,
                    hidden:false,
                    readOnly: false
                },
                {
                    xtype: 'filefield',
                    name: 'file3',
                    id: 'uploadItem3FE',
                    fieldLabel: 'Orden (Archivo)',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Archivo...'
                }
            ], //fin if item

            buttons: [
                {
                    text: 'Cargar Factura XML',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivoFE", btn);
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







