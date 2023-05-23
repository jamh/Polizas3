Ext.define('AppPolizas3.view.general.FormCopy', {
    extend: 'Ext.form.Panel',
     alias: 'widget.formcopy',
    itemId:'formcopy',
    xtype: 'formcopy',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    // bodyPadding: 5,
            
        initComponent: function() {
        
        var storeTipoPolizaCopy = Ext.create('AppPolizas3.store.StoreTipoPolizaCopy');
        var storeccCopy = Ext.create('AppPolizas3.store.StoreccCopy');
        //var storeTipoPoliza = Ext.create('AppPolizas3.store.StoreTipoPoliza');
        //var storeCtoCto = Ext.create('AppPolizas3.store.StoreCC');
     

        Ext.apply(this, {
            items: [
                
//
//                {
//                    xtype: 'combobox',
//                    id: 'cboCtoCtoCopia',
//                    itemId:'cboCtoCtoCopia',
//                    store: storeccCopy,
//                    name: 'cboCtoCtoCopia',
//                    valueField: 'CTO',
//                    displayField: 'CTO_NAME',
//                    triggerAction: 'all',
//                    emptyText: 'Selecciona',
//                    fieldLabel: 'Cto. Costo',
//                    listConfig: {
//                        loadingText: 'Buscando...',
//                        emptyText: 'Calendario No encontrado.'
//                    },
//                    allowBlank: false
//                  },
                  {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo Poliza',
                    displayField: 'NOMBRE1',
                    valueField: 'TIPO_POLIZA',
                    id: 'cboCopiaTipoPoliza',
                    itemId:'cboCopiaTipoPoliza',                  
                    name: 'cboCopiaTipoPoliza',
                    store: storeTipoPolizaCopy,
                     listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'Poliza No encontrado.'
                    },
                    allowBlank: false
                },
                 {
                    xtype: 'datefield',
                    name: 'dtFechacopia',
                    id: 'dtFechacopia',
                    itemId:'dtFechacopia',    
                    fieldLabel: 'Fecha',
                    // width:350,
                    colspan: 2,
                    value: new Date(),
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    allowBlank: false
                }
               
            ], //fin if item

            buttons: [
                {
                    text: 'Copiar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("copiarPoliza",btn);
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





