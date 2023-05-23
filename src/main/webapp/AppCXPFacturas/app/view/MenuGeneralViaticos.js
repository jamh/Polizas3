Ext.define('AppCXPFacturas.view.MenuGeneralViaticos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.menugeneralviaticos',
    itemId: 'menugeneralviaticos',
    xtype: 'menugeneralviaticos',
    title: 'Buscar Viaticos',
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
        var storePeriodoFinal = Ext.create('AppCXPFacturas.store.StorePeriodo'); 
        var verCXP = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"F", "nombre":"Fecha Factura"},
                    {"clave":"P", "nombre":"Fecha Pago"}
                 
                ]
            });
      


        Ext.apply(this, {
            items: [
               
                {
                    xtype: 'combobox',
                    id: 'cboCalendarioFeCxpViaticos',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCxpViaticos',
                    itemId: 'cboCalendarioFeCxpViaticos',
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
                            Ext.getCmp('cboPeriodoFeCxpViaticos').clearValue();
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
                    id: 'cboPeriodoFeCxpViaticos',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCxpViaticos',
                    itemId: 'cboPeriodoFeCxpViaticos',
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
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpViaticos').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeCxpViaticosFinal',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoFeCxpViaticosFinal',
                    itemId: 'cboPeriodoFeCxpViaticosFinal',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    //labelWidth:50,
                    //width:115,
                    editable:false,
                    store: storePeriodoFinal,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFinal.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpViaticos').getValue();
                
                    }
                     }
                }
                
                 
            ],
            buttons: [
                {
                    text: 'Buscar',
                    action: 'buscar',
                    itemId: 'buscaViaticos',
                    scope: this,
                    handler: function(btn) {

                        var form = this.getForm();
                        if (form.isValid()) {

                            this.fireEvent("buscaPorFechaViaticos",  Ext.getCmp('cboCalendarioFeCxpViaticos').getValue(),Ext.getCmp('cboPeriodoFeCxpViaticos').getValue(),Ext.getCmp('cboPeriodoFeCxpViaticosFinal').getValue());
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


