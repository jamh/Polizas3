Ext.define('AppCargaFE2.view.GridPolRelCXC', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpolrelcxc',
    itemId: 'gridpolrelcxc',
    xtype: 'gridpolrelcxc',
    store: 'StorePolRelCXC',
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
                    itemId: 'btnVerPolizacxc',
                    id: 'btnVerPolizacxc',
                    name: 'btnVerPolizacxc',
                    scope: this,
                    handler: function(btn) {
                        me.fireEvent("verPoliza2CXC", btn);
                    }

                },
                '-',
               
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Relacion',
                    itemId: 'btnQuitarRelacionpolcxc',
                    id: 'btnQuitarRelacionpolcxc',
                    name: 'btnQuitarRelacionpolcxc',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraFERelacionPolCXC", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_REL',
                    name: 'COMPANIA_REL',
                    id: 'polCOMPANIA_RELCXC',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                
                {
                    dataIndex: 'NUM_POL_REL',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUM_POL_REL',
                    id: 'polNUM_POL_RELCXC',
                    sortable: true,
                    header: 'Numero',
                    width: 150
                },
               
                {
                    dataIndex: 'FECHA_POL_REL',
                    name: 'FECHA_POL_REL',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'polFECHA_POL_RELCXC',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                     
                 
                },
                {
                    dataIndex: 'TIPO_POL_REL',
                     filterable: true,
                    name: 'TIPO_POL_REL',
                    hidden: false,
                    id: 'polTIPO_POL_RELCXC',
                    sortable: true,
                    header: 'Tipo Poliza',
                    width: 150
                  
                 
                },

                {
                    dataIndex: 'NOMBRE_REL',
                    name: 'NOMBRE_REL',
                     filterable: true,
                    hidden: false,
                    id: 'polNOMBRE_RELCXC',
                    sortable: true,
                    header: 'Nombre',
                    width: 150
                    
                 
                },

            

                {
                    dataIndex: 'CARGOS_REL',
                    name: 'CARGOS_REL',
                    hidden: false,
                    id: 'polCARGOS_RELCXC',
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
                    dataIndex: 'ABONOS_REL',
                    name: 'ABONOS_REL',
                    hidden: false,
                    id: 'polABONOS_RELCXC',
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
                    store: 'StorePolRelCXC'
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


