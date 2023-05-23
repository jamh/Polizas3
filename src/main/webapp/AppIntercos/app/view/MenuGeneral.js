Ext.define('AppIntercos.view.MenuGeneral', {
    extend: 'Ext.form.Panel',
    alias: 'widget.menugeneral',
    itemId: 'menugeneral',
    xtype: 'menugeneral',
    title: 'Buscar Facturas',
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
       var storeCalendario = Ext.create('AppIntercos.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppIntercos.store.StorePeriodo');
        var storePeriodoFin = Ext.create('AppIntercos.store.StorePeriodo'); 
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
                    id: 'cboCalendarioFeCxp',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCxp',
                    itemId: 'cboCalendarioFeCxp',
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
                            Ext.getCmp('cboPeriodoFeCxp').clearValue();
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
                    id: 'cboPeriodoFeCxp',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCxp',
                    itemId: 'cboPeriodoFeCxp',
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
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxp').getValue();
                
                    }
                     }
                },
                
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeCxpFin',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoFeCxpFin',
                    itemId: 'cboPeriodoFeCxpFin',
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
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxp').getValue();
                
                    }
                     }
                },
                
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Ver por...',
                    name: 'cboverCXP',
                    id: 'cboverCXP',
                    //labelWidth:50,
                    //width:200,
                    store: verCXP,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombre',
                    valueField: 'clave',
                    allowBlank: true,
                    listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        }
                         
                     }
                }
            ],
            buttons: [
                {
                    text: 'Buscar',
                    action: 'buscar',
                    itemId: 'buscar22',
                    scope: this,
                    handler: function(btn) {

                        var form = this.getForm();
                        if (form.isValid()) {

                            this.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxpFin').getValue());
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


