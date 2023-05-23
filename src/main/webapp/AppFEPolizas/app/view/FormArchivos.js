Ext.define('AppFEPolizas.view.FormArchivos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formarchivos',
    itemId: 'formarchivos',
    xtype: 'formarchivos',
    bodyPadding: 5,
    width: 600,
    title:'Carga Factura Electronica',
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
                    name: 'archCOMPANIA',
                    id: 'archCOMPANIAFE',
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
//                {
//                    xtype: 'filefield',
//                    name: 'file',
//                    id: 'uploadItem',
//                    fieldLabel: 'XML',
//                    labelWidth: 50,
//                    msgTarget: 'side',
//                    allowBlank: false,
//                    anchor: '100%',
//                    buttonText: 'Archivo...'
//                },
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
                   // emptyText: 'Selecciona Concepto',
                    //fieldLabel: 'Concepto Gasto',
                    allowBlank: true,
                    hidden:true,
                    typeAhead: true,
                    minChars: 0,
                    editable: false,
                    //displayField: 'GNOMBRE',
                    //valueField: 'IDCONCGASTO',
                    width: 350
                    //store: storeConcepto
                }
            ], //fin if item

            buttons: [
                {
                    text: 'Procesar XML',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivoFE", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







