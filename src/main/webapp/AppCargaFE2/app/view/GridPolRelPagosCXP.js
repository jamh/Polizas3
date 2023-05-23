Ext.define('AppCargaFE2.view.GridPolRelPagosCXP', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpolrelpagoscxp',
    itemId: 'gridpolrelpagoscxp',
    xtype: 'gridpolrelpagoscxp',
    store: 'StorePolRelPagosCXP',
    autoScroll: true,

    height:410,
    
    initComponent: function() {
        var me = this;
        
         var encode = true;
        var local = false;

        var filters = {
            ftype: 'filters',
            encode: encode,
            local: local,
            filters: [{
                    type: 'boolean',
                    dataIndex: 'visible'
                }]
        };
        
         var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
     
        Ext.apply(me, {
             features: [
               filters
            ],
            plugins: [
                cellEditing2
            ],
           
             multiSelect:true,
            tbar: [
//                {
//                        iconCls: 'converter-icon',
//                            text: 'Convertidor...',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("verConvertidor", btn);
//                            }   
//                },
                 '->',
             

                {
                    iconCls: 'poliza-icon',
                    text: 'Ver Poliza',
                    itemId: 'btnVerPolizaPagoCXP',
                    id: 'btnVerPolizaPagoCXP',
                    name: 'btnVerPolizaPagoCXP',
                    scope: this,
                    handler: function(btn) {
                        me.fireEvent("verPolizaPagosCXP", btn);
                    }

                },
                '-',
               
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Relacion',
                    itemId: 'btnQuitarRelacionpolPagosCxp',
                    id: 'btnQuitarRelacionpolPagosCxp',
                    name: 'btnQuitarRelacionpolPagosCxp',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraFERelacionPolPagosCXP", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_REL_PAGOS',
                    name: 'COMPANIA_REL_PAGOS',
                    id: 'polCOMPANIA_REL_PAGOS_CXP',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                
                {
                    dataIndex: 'NUM_POL_REL_PAGOS',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUM_POL_REL_PAGOS',
                    id: 'polNUM_POL_REL_PAGOS_CXP',
                    sortable: true,
                    header: 'Numero',
                    width: 150
                },
               
                {
                    dataIndex: 'FECHA_POL_REL_PAGOS',
                    name: 'FECHA_POL_REL_PAGOS',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'polFECHA_POL_REL_PAGOS_CXP',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                     
                 
                },
                {
                    dataIndex: 'TIPO_POL_REL_PAGOS',
                     filterable: true,
                    name: 'TIPO_POL_REL_PAGOS',
                    hidden: false,
                    id: 'polTIPO_POL_REL_PAGOS_CXP',
                    sortable: true,
                    header: 'Tipo Poliza',
                    width: 150
                  
                 
                },

                {
                    dataIndex: 'NOMBRE_REL_PAGOS',
                    name: 'NOMBRE_REL_PAGOS',
                     filterable: true,
                    hidden: false,
                    id: 'polNOMBRE_REL_PAGOS_CXP',
                    sortable: true,
                    header: 'Nombre',
                    width: 150
                    
                 
                },

            

                {
                    dataIndex: 'CARGOS_REL_PAGOS',
                    name: 'CARGOS_REL_PAGOS',
                    hidden: false,
                    id: 'polCARGOS_REL_PAGOS_CXP',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Cargos',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    width: 100
                },
                {
                    dataIndex: 'ABONOS_REL_PAGOS',
                    name: 'ABONOS_REL_PAGOS',
                    hidden: false,
                    id: 'polABONOS_REL_PAGOS_CXP',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Abonos',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    width: 100
                } 


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StorePolRelPagosCXP'
                })
            ],
            
              viewConfig: {
                  getRowClass: function(record) {

                },
                
                stripeRows: true
              }

        });


        this.callParent(arguments);
    }



});


