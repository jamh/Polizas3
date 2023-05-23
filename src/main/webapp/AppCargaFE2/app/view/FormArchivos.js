Ext.define('AppCargaFE2.view.FormArchivos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formarchivos',
    itemId: 'formarchivos',
    xtype: 'formarchivos',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'UploadDocumentFE/save',
    initComponent: function() {

        var storeConcepto = Ext.create('AppCargaFE2.store.StoreConcepto');

        Ext.apply(this, {
            items: [
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
                    id: 'uploadItem',
                    fieldLabel: 'XML',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Archivo...'
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    id: 'uploadItem',
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
                    id: 'uploadItem2',
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
                    emptyText: 'Selecciona Concepto',
                    fieldLabel: 'Concepto Gasto',
                    allowBlank: true,
                    hidden:true,
                    typeAhead: true,
                    minChars: 0,
                    editable: false,
                    displayField: 'GNOMBRE',
                    valueField: 'IDCONCGASTO',
                    width: 350,
                    store: storeConcepto
                },
//                    {
//                    xtype: 'textfield',
//                    fieldLabel: 'Sec',
//                    name: 'archSEC',
//                    id: 'archSEC',
//                    hidden:true,
//                    allowBlank: true,
//                    readOnly:true
//                    //vtype: 'numeroId'
//                },

                
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Generar Poliza',
                    name: 'archPoliza',
                    hidden:true,
                    inputValue: '0',
                    id: 'archPoliza'
                }

            ], //fin if item

            buttons: [
                {
                    text: 'save',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivo", btn);
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







