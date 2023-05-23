Ext.define('AppOrdenCompra.view.GridArchivosPedidos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridarchivospedidos',
    itemId: 'gridarchivospedidos',
    xtype: 'gridarchivospedidos',
    flex: 1,
     title: 'Archivos Pedidos',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StorePedidosArchivos',
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
                            itemId: 'imprimirPedidoArchivos',
                            id: 'imprimirPedidoArchivos',
                            name: 'imprimirPedidoArchivos',
                            handler: function(btn) {
                                me.fireEvent("verArchivosPedidos", btn);
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
                    id: 'pedidosArchivosID',
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
                    id: 'pedidosArchivosNOMBRE',
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
                    id: 'pedidosArchivosDESCRIPCION',
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
                    store: 'StorePedidosArchivos'
                })

            ]

        });


        this.callParent(arguments);
    }
    


});
