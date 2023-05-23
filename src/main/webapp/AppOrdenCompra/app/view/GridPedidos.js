Ext.define('AppOrdenCompra.view.GridPedidos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpedidos',
    itemId: 'gridpedidos',
    xtype: 'gridpedidos',
    flex: 1,
     title: 'Pedidos',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StorePedidos',
    initComponent: function () {
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



       // var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
     
       
       
   
//       var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
//       
//            clicksToEdit: 1
//        });


//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 2
//
//        });

        Ext.apply(me, {
            features: [filters],
            plugins: [
           //     cellEditing2
            ],
            tbar: [
                
                                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function (btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersPedidos", btn);
                    }
                },
                '->',
                                 {
                    iconCls: 'add-icon',
                    text: 'Agregar Orden de Compra',
                    itemId: 'btnAgregarOrdenPedido',
                    id: 'btnAgregarOrdenPedido',
                    name: 'btnAgregarOrdenPedido',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addOrdenPedido");
                    }


                }
                 
                
                //
                ////,

//                 {
//                    iconCls: 'add-icon',
//                    text: 'Agregar',
//                    itemId: 'btnAgregarOrden',
//                    id: 'btnAgregarOrden',
//                    name: 'btnAgregarOrden',
//                    scope: this,
//                    handler: function(btn) {
//
//                        this.fireEvent("addOrden", btn, cellEditing2);
//                    }
//
//
//                }
//                  {
//                    xtype: 'checkboxfield',
//                    boxLabel: 'Buscar Remotamente',
//                    name: 'copiBuscar',
//                   // dock: 'bottom',
//                    inputValue: '0',
//                    id: 'copiBuscar',
//                    itemId: 'copiBuscar'                    
//                },

             
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID',
                    name: 'ID',
                    id: 'pedidosID',
                    sortable: true,
                    header: 'Id',
                    filter: {
                        type: 'numeric'
                    },
                    filterable: true,
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMBRE_PRODUCT',
                    name: 'NOMBRE_PRODUCT',
                    id: 'pedidosNOMBRE_PRODUCT',
                    sortable: true,
                    header: 'Producto',
                    filterable: true,
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CANTIDAD',
                    name: 'CANTIDAD',
                    id: 'pedidosCANTIDAD',
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    sortable: true,
                    header: 'Cantidad',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CTO_CTO',
                    name: 'CTO_CTO',
                    id: 'pedidosCTO_CTO',
                    filterable: true,
                    sortable: true,
                    header: 'Cto cto',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CTO_CTO',
                    name: 'CTO_CTO',
                    id: 'pedidosCTO_CTO',
                    filterable: true,
                    sortable: true,
                    header: 'Cto cto',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMBRE_CONCEPTO',
                    name: 'NOMBRE_CONCEPTO',
                    id: 'pedidosNOMBRE_CONCEPTO',
                    filterable: true,
                    sortable: true,
                    header: 'Gasto',
                    hidden: false,
                    flex: 1
                },
                
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_ENTREGA',
                    name: 'FECHA_ENTREGA',
                    id: 'pedidosFECHA_ENTREGA',
                    filterable: true,
                    sortable: true,
                    header: 'Fecha Entrega',
                    hidden: false,
                    flex: 1,
                    format: 'd/m/Y',
                    filter: {
                        type: 'date'
                    }
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'FLAG_ID_GENERA',
                    name:'FLAG_ID_GENERA',
                    id: 'FLAG_ID_GENERA',
                    
                      listeners: {
                        scope: this,
                        beforecheckchange: function(col, index, checked) { 
                            
                        
                        }
                     }
                  
                    
                }



            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StorePedidos'
                })

            ]

        });


        this.callParent(arguments);
    }
    


});
