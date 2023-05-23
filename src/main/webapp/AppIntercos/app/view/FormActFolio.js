Ext.define('AppIntercos.view.FormActFolio', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formactfolio',
    itemId: 'formactfolio',
    xtype: 'formactfolio',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

            var storeFolio = Ext.create('AppIntercos.store.StoreFolioTes');
         
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    id: 'cboFolioTes',
                    fieldLabel: 'Folio',
                    name: 'cboFolioTes',
                    itemId: 'cboFolioTes',
                    displayField: 'FOLIO',
                    valueField: 'FOLIO',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeFolio,
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
                    text: 'Continuar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("actFolTes", btn);
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







