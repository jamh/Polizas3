Ext.define('AppCargaFE.view.FormPolMult', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpolmult',
    itemId: 'formpolmult',
    xtype: 'formpolmult',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

            var storeTipoPoliza = Ext.create('AppCargaFE.store.StoreTipoPoliza');
         
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    id: 'cboTipoPolizaFEMult',
                    fieldLabel: 'Tipo de Poliza',
                    name: 'cboTipoPolizaFEMult',
                    itemId: 'cboTipoPolizaFEMult',
                    displayField: 'NOMBRE1',
                    valueField: 'TIPO_POLIZA',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeTipoPoliza,
                    allowBlank: false,
                    listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           
                        }
                     }
                },
                  {
                    xtype: 'datefield',
                    name: 'fechaFeMult',
                    id: 'fechaFeMult',
                    fieldLabel: 'Fecha',
                    width: 350,
                    colspan: 2,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    allowBlank: false//,
                    //renderer: Ext.Date.dateFormat(new Date(), 'd/m/Y')
                }

            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("savePolMult", btn);
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







