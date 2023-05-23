Ext.define('AppCXPFacturas.view.MenuGeneralOtros', {
    extend: 'Ext.form.Panel',
    alias: 'widget.menugeneralotros',
    itemId: 'menugeneralotros',
    xtype: 'menugeneralotros',
    title: 'Buscar Otras',
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
                    id: 'cboCalendarioFeCxpOtros',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCxpOtros',
                    itemId: 'cboCalendarioFeCxpOtros',
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
                            Ext.getCmp('cboPeriodoFeCxpOtros').clearValue();
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
                    id: 'cboPeriodoFeCxpOtros',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCxpOtros',
                    itemId: 'cboPeriodoFeCxpOtros',
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
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpOtros').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeCxpOtrosFinal',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoFeCxpOtrosFinal',
                    itemId: 'cboPeriodoFeCxpOtrosFinal',
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
                              
                               storePeriodoFinal.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpOtros').getValue();
                
                    }
                     }
                }
                
                 
            ],
            buttons: [
                {
                    text: 'Buscar',
                    action: 'buscar',
                    itemId: 'buscar22Otros',
                    scope: this,
                    handler: function(btn) {

                        var form = this.getForm();
                        if (form.isValid()) {

                            this.fireEvent("buscaPorFechaOtros",  Ext.getCmp('cboCalendarioFeCxpOtros').getValue(),Ext.getCmp('cboPeriodoFeCxpOtros').getValue(),Ext.getCmp('cboPeriodoFeCxpOtrosFinal').getValue());
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


