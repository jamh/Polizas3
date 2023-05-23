Ext.define('AppCXPFacturas.view.MenuGeneralIntercos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.menugeneralintercos',
    itemId: 'menugeneralintercos',
    xtype: 'menugeneralintercos',
    title: 'Buscar Intercos',
    region: 'west',
//    frame: true,
//    bodyPadding: 5,
//    bodyStyle: 'padding: 5px;',
    collapsed:true,
    split: true,
    collapsible: true,
    
    layout: 'anchor',
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    initComponent: function() {
       var storeCalendario = Ext.create('AppCXPFacturas.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppCXPFacturas.store.StorePeriodo');
        var storePeriodoFin = Ext.create('AppCXPFacturas.store.StorePeriodo'); 
 
      


        Ext.apply(this, {
            items: [
               
                {
                    xtype: 'combobox',
                    id: 'cboCalendarioFeCxpInt',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCxpInt',
                    itemId: 'cboCalendarioFeCxpInt',
                    displayField: 'CALENDARIO',
                    valueField: 'CALENDARIO',              
                    typeAhead: true,
                    minChars: 0,
                   // size:2,
                  // width:150,
                  // labelWidth:60,
                    editable:false,
                    store: storeCalendario,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            
                             if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboPeriodoFeCxpInt').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                          
                        }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeCxpInt',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCxpInt',
                    itemId: 'cboPeriodoFeCxpInt',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    //labelWidth:50,
                    //width:115,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpInt').getValue();
                
                    }
                     }
                },
                
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeCxpFinInt',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoFeCxpFinInt',
                    itemId: 'cboPeriodoFeCxpFinInt',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    //labelWidth:50,
                    //width:115,
                    editable:false,
                    store: storePeriodoFin,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpInt').getValue();
                
                    }
                     }
                }
            ],
            buttons: [
                {
                    text: 'Buscar',
                    action: 'buscar',
                    itemId: 'buscar22Int',
                    scope: this,
                    handler: function(btn) {

                        var form = this.getForm();
                        if (form.isValid()) {

                            this.fireEvent("buscaPorFechaInt",  Ext.getCmp('cboCalendarioFeCxpInt').getValue(),Ext.getCmp('cboPeriodoFeCxpInt').getValue(),Ext.getCmp('cboPeriodoFeCxpFinInt').getValue());
                            //this.fireEvent("buscarMaestro", btn, Ext.getCmp('cboAno22').getValue(), Ext.getCmp('cboTipoPoliza22').getValue());
                        }

                    }
                }
            ]

        });

        this.callParent(arguments);
    }

}
);


