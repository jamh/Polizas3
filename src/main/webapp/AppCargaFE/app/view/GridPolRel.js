Ext.define('AppCargaFE.view.GridPolRel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpolrel',
    itemId: 'gridpolrel',
    xtype: 'gridpolrel',
    store: 'StorePolRel',
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
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("cleanFiltersFE", btn);
                            }
                  },

                 
                '-',
                {
                    iconCls: 'poliza-icon',
                    text: 'Ver Poliza',
                    itemId: 'btnVerPolizaPol',
                    id: 'btnVerPolizaPol',
                    name: 'btnVerPolizaPol',
                    scope: this,
                    handler: function(btn) {
                        me.fireEvent("verPoliza2", btn);
                    }

                },
                '-',
               
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Relacion',
                    itemId: 'btnQuitarRelacionpol',
                    id: 'btnQuitarRelacionpol',
                    name: 'btnQuitarRelacionpol',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraFERelacionPol", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_REL',
                    name: 'COMPANIA_REL',
                    id: 'polCOMPANIA_REL',
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
                    id: 'polNUM_POL_REL',
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
                    id: 'polFECHA_POL_REL',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                     
                 
                },
                {
                    dataIndex: 'TIPO_POL_REL',
                     filterable: true,
                    name: 'TIPO_POL_REL',
                    hidden: false,
                    id: 'polTIPO_POL_REL',
                    sortable: true,
                    header: 'Tipo Poliza',
                    width: 150
                  
                 
                },

                {
                    dataIndex: 'NOMBRE_REL',
                    name: 'NOMBRE_REL',
                     filterable: true,
                    hidden: false,
                    id: 'polNOMBRE_REL',
                    sortable: true,
                    header: 'Nombre',
                    width: 150
                    
                 
                },

            

                {
                    dataIndex: 'CARGOS_REL',
                    name: 'CARGOS_REL',
                    hidden: false,
                    id: 'polCARGOS_REL',
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
                    id: 'polABONOS_REL',
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
                    store: 'StorePolRel'
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


