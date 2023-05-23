Ext.define('AppOrdenCompra.view.GridArchivosPedidosLinea', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridarchivospedidoslinea',
    itemId: 'gridarchivospedidoslinea',
    xtype: 'gridarchivospedidoslinea',
    flex: 1,
     title: 'Archivos Pedidos',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StorePedidosArchivosLinea',
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
                
                '->',
                
                {
                            iconCls: 'pdf-icon',
                            text: 'Ver Archivos',
                            itemId: 'imprimirPedidoArchivosLinea',
                            id: 'imprimirPedidoArchivosLinea',
                            name: 'imprimirPedidoArchivosLinea',
                            handler: function(btn) {
                                me.fireEvent("verArchivosPedidosLinea", btn);
                            }                            
                        }

             
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
                    id: 'pedidosArchivosIDLinea',
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
                    dataIndex: 'NOMBRE',
                    name: 'NOMBRE',
                    id: 'pedidosArchivosNOMBRELinea',
                    sortable: true,
                    header: 'Producto',
                    filterable: true,
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DESCRIPCION',
                    name: 'DESCRIPCION',
                    id: 'pedidosArchivosDESCRIPCIONLinea',
                    sortable: true,
                    header: 'Producto',
                    filterable: true,
                    hidden: false,
                    flex: 1
                }



            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StorePedidosArchivosLinea'
                })

            ]

        });


        this.callParent(arguments);
    }
    


});
