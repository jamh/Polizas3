Ext.define('AppProveedores.view.GridProductos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridproductos',
    itemId: 'gridproductos',
    xtype: 'gridproductos',
    title: 'Productos',
    store: 'StoreProducto',
    split: true,
    collapsible: true,
    autoScroll: true,
    
    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';
      
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
     
        Ext.apply(this, {
            features: [
                filters
               
            ],
            multiSelect: true,

            listeners: {
                columnresize: function(ct, column, width, eOpts) {
                   
                },
                viewready: function(grid) {
                    

                }
            },
            tbar: [

               
                '->',
   
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarProdc',
                    id: 'btnAgregarProdc',
                    name: 'btnAgregarProdc',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("agregarProducto", btn);
                    }


                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarProdc',
                    id: 'btnBorrarProdc',
                    name: 'btnBorrarProdc',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaProducto", btn);
                    }
                }
            ],
            columns: [

                {
                    xtype: 'gridcolumn',
                    header: 'Compania',
                    name: 'COMPANIA',
                    id: 'proProCOMPANIA',
                    dataIndex: 'COMPANIA',
                    sortable: true,
                    hidden: true,
                    flex:1
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Proveedor',
                    name: 'PROVEEDOR',
                    id: 'proPROVEEDOR',
                    dataIndex: 'PROVEEDOR',
                    sortable: true,
                    hidden: false,
                    flex:1
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Id Producto',
                    name: 'ID_PRODUCTO',
                    id: 'proID_PRODUCTO',
                    dataIndex: 'ID_PRODUCTO',
                    sortable: true,
                    hidden: true,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    name: 'NOMBRE',
                    id: 'proProNOMBRE',
                    dataIndex: 'NOMBRE',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Codigo',
                    name: 'CODIGO',
                    id: 'proCODIGO',
                    dataIndex: 'CODIGO',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Codigo Proveedor',
                    name: 'CODIGO_PROVEEDOR',
                    id: 'proCODIGO_PROVEEDOR',
                    dataIndex: 'CODIGO_PROVEEDOR',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                
                {
                    xtype: 'gridcolumn',
                    header: 'Unidad Medida',
                    name: 'UNIDAD_MEDIDA',
                    id: 'proUNIDAD_MEDIDA',
                    dataIndex: 'UNIDAD_MEDIDA',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Precio Sin Iva',
                    name: 'PRECIO_SIN_IVA',
                    id: 'proPRECIO_SIN_IVA',
                    dataIndex: 'PRECIO_SIN_IVA',
                    sortable: true,
                    hidden: false,
                    flex:3
                }
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreProducto',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            if(!Ext.isEmpty(pageData)){
                                 this.fireEvent("recargaPagina",pageData.currentPage) ;
                            }
                        }
                     },
                    id: 'statusDetalleProct',
                    items: [
                    //    '->',
                     //   bandera

                    ]
                })

            ],
            
            viewConfig: {
                  
                
            }



        });


        this.callParent(arguments);
    }



}
);



