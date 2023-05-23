Ext.define('AppCargaFE2.view.FormPolMultCXP', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpolmultcxp',
    itemId: 'formpolmultcxp',
    xtype: 'formpolmultcxp',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

            var storeTipoPoliza = Ext.create('AppCargaFE2.store.StoreTipoPoliza');
         
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    id: 'cboTipoPolizaFEMultCXP',
                    fieldLabel: 'Tipo de Poliza',
                    name: 'cboTipoPolizaFEMultCXP',
                    itemId: 'cboTipoPolizaFEMultCXP',
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
                    name: 'fechaFeMultCXP',
                    id: 'fechaFeMultCXP',
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
                        this.fireEvent("savePolMultCXP", btn);
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







