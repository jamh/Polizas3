Ext.define('AppOrdenCompra.view.GridDetOrdenCompra', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griddetordencompra',
    itemId: 'griddetordencompra',
    xtype: 'griddetordencompra',
    flex: 1,
     title: 'Lineas de Orden de Compra',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StoreDetOrdenCompra',
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



        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

         var storeProductos=Ext.create('AppOrdenCompra.store.StoreProductos');

//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 2
//
//        });

        var relacionarFacturas= Ext.create('Ext.Action', {
                    iconCls: 'icon-relacion',
                    text: 'Relacionar Facturas',
                    disabled: false,
                    handler: function(widget, view, rec, node, index) {
                        me.fireEvent("relacionaFacturas");
                    }
                });
                
                var enviarFacturasCXP= Ext.create('Ext.Action', {
                    iconCls: 'checkall-icon',
                    text: 'Envia Facturas a CXP',
                    disabled: false,
                    handler: function(widget, view, rec, node, index) {
                        me.fireEvent("enviaFacturasCXP");
                    }
                });
                
                var addFactura = Ext.create('Ext.Action', {
                    iconCls: 'xml-icon',
                    text: 'Cargar Factura Nacional',
                    disabled: false,
                    handler: function(widget, view, rec, node, index) {
                        me.fireEvent("addFactura");
                    }
                });
                
                 var addFacturaExt = Ext.create('Ext.Action', {
                    iconCls: 'xml-icon',
                    text: 'Cargar Factura Extranjera',
                    disabled: false,
                    handler: function(widget, view, rec, node, index) {
                        me.fireEvent("addFacturaExt");
                    }
                });
                
                var contextMenu = Ext.create('Ext.menu.Menu', {
                items: [


                    relacionarFacturas,
                    enviarFacturasCXP,
                    '-',
                    addFactura,
                    '-',
                    addFacturaExt


                ]
        });
        

        Ext.apply(me, {
            features: [filters],
            plugins: [
                cellEditing2
            ],
            tbar: [
  
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function (btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersMstOrdenDet", btn);
                    }
                },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarDetOrden',
                    id: 'btnAgregarDetOrden',
                    name: 'btnAgregarDetOrden',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addDetOrden", btn, cellEditing2);
                    }


                },
                {
                  iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarDetOrden',
                    id: 'btnGuardarDetOrden',
                    name: 'btnGuardarDetOrden',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveDetOrden", btn);
                    }

                },
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarOrdenDet',
                    id: 'btnBorrarOrdenDet',
                    name: 'btnBorrarOrdenDet',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaOrdenDet", btn);
                    }
                },
                {
                //  iconCls: 'save-icon',
                    text: 'Cerrar',
                    itemId: 'btnCerrarDetOrden',
                    id: 'btnCerrarDetOrden',
                    name: 'btnCerrarDetOrden',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cerrarDetOrden", btn);
                    }

                },
                {
                //  iconCls: 'save-icon',
                    text: 'Abrir',
                    itemId: 'btnAbrirDetOrden',
                    id: 'btnAbrirDetOrden',
                    name: 'btnAbrirDetOrden',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("abrirDetOrden", btn);
                    }

                }
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
                    id: 'detOrdenID',
                    sortable: true,
                    header: 'ID',
                    hidden: false,
                    flex: 1
                },
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'LINEA',
                    name: 'LINEA',
                    id: 'detOrdenLinea',
                    sortable: true,
                    header: 'Linea',
                    filterable: true,
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ORDEN_COMPRA',
                    name: 'ID_ORDEN_COMPRA',
                    id: 'detOrdenID_ORDEN_COMPRA',
                    sortable: true,
                    header: 'ID_ORDEN_COMPRA',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'detOrdenCOMPANIA',
                    sortable: true,
                    header: 'COMPANIA',
                    hidden: true,
                    flex: 1
                },
                {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'Facturas',
                    itemId:'bienColumnFacturas',
                    name:'bienColumnFacturas',
                    id:'bienColumnFacturas',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (rec.get('FACT_REL') > 0) {
                            return 'factura-valida';
                        } else {
                            return '';
                        }

                    },                    
//                    getTip: function(v, meta, rec) {
//                        
//                        
//                         if (rec.get('FACT_REL') === 1) {
//                            return 'Facturas Relacionadas';
//                        } else {
//                            return 'Sin Facturas';
//                        }
//                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
             
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_PRODUCTO',
                    name: 'ID_PRODUCTO',
                    filterable: true,
                    id: 'detOrdenID_PRODUCTO',
                    sortable: true,
                    header: 'Producto',
                    hidden: false,
                    flex: 1,
                      field: {
                        xtype: 'combobox',
                        name: 'txtIdProductoDetOrden',
                        id: 'txtIdProductoDetOrden',
                        store: storeProductos,
                        minChars: 1,
                        displayField: 'NOMBRE',
                        valueField: 'ID',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
//                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro Centro de Costo.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{ID}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                            
                    }
                     },
                        pageSize: 10
                    }
                    
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DESCRIPCION',
                    name: 'DESCRIPCION',
                    id: 'detOrdenDESCRIPCION',
                    sortable: true,
                    header: 'DESCRIPCION',
                    filterable: true,
                    hidden: false,
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtDescripcionDetOrden',
                        id: 'txtDescripcionDetOrden'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CANTIDAD_PEDIDA',
                    name: 'CANTIDAD_PEDIDA',
                    id: 'detOrdenCANTIDAD_PEDIDA',
                    sortable: true,
                    header: 'Cantidad Pedida',
                    hidden: false,
                    flex: 1,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    field: {
                        xtype: 'numberfield',
                        //allowBlank: true,
                        name: 'txtCantidadPedidaDetOrden',
                        id: 'txtCantidadPedidaDetOrden'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CANTIDAD_LLEGO',
                    name: 'CANTIDAD_LLEGO',
                    id: 'detOrdenCANTIDAD_LLEGO',
                    sortable: true,
                    header: 'Cantidad Llego',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    flex: 1//,
//                    field: {
//                        xtype: 'numberfield',
//                        //allowBlank: true,
//                        name: 'txtCantidadLlegoDetOrden',
//                        id: 'txtCantidadLlegoDetOrden'
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PRECIO_UNITARIO',
                    name: 'PRECIO_UNITARIO',
                    id: 'detOrdenPRECIO_UNITARIO',
                    sortable: true,
                    header: 'PRECIO_UNITARIO',
                    filterable: true,
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    filter: {
                        type: 'numeric'
                    },
                    hidden: false,
                    flex: 1//,
//                    field: {
//                        xtype: 'numberfield',
//                        //allowBlank: true,
//                        name: 'txtPrecioUnitarioDetOrden',
//                        id: 'txtPrecioUnitarioDetOrden'
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'IVA',
                    name: 'IVA',
                    id: 'detOrdenIVA',
                    sortable: true,
                    header: 'IVA',
                    filterable: true,
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    filter: {
                        type: 'numeric'
                    },
                    hidden: false,
                    flex: 1//,
//                    field: {
//                        xtype: 'numberfield',
//                        //allowBlank: true,
//                        name: 'txtIvaDetOrden',
//                        id: 'txtIvaDetOrden'
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    id: 'detOrdenTOTAL',
                    sortable: true,
                    header: 'TOTAL',
                    filterable: true,
                    align: 'right',
                    renderer: this.money,
//                    renderer: function(value) {
//                        if (Ext.isEmpty(value)) {
//                            return '0';
//                        } else {
//                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
//                        }
//                    },
                    filter: {
                        type: 'numeric'
                    },
                    hidden: false,
                    flex: 1//,
//                    field: {
//                        xtype: 'numberfield',
//                        //allowBlank: true,
//                        name: 'txtTotalDetOrden',
//                        id: 'txtTotalDetOrden'
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'IMPORTE_COTIZACION',
                    name: 'IMPORTE_COTIZACION',
                    id: 'detOrdenIMPORTE_COTIZACION',
                    sortable: true,
                    header: 'Importe Cotizacion',
                    hidden: false,
                    filterable: true,
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue;font-weight: bold">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    filter: {
                        type: 'numeric'
                    },
                    flex: 1,
                    field: {
                        xtype: 'numberfield',
                        //allowBlank: true,
                        name: 'txtImporteCotizacionOrden',
                        id: 'txtImporteCotizacionOrden'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ALMACEN',
                    name: 'ID_ALMACEN',
                    id: 'detOrdenID_ALMACEN',
                    sortable: true,
                    filterable: true,
                    header: 'Almacen',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ESTATUS',
                    name: 'ID_ESTATUS',
                    id: 'detOrdenID_ESTATUS',
                    sortable: true,
                    header: 'ID_ESTATUS',
                    filterable: true,
                    hidden: true,
                    flex: 1
                },
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOM_ESTATUS',
                    name: 'NOM_ESTATUS',
                    id: 'detOrdenNOM_ESTATUS',
                    sortable: true,
                    header: 'Estatus Almacen',
                    hidden: false,
                    flex: 1
                   
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ESTATUS_LINEA',
                    name: 'ESTATUS_LINEA',
                    id: 'detOrdenESTATUS_LINEA',
                    sortable: true,
                    header: 'Estatus Linea',
                    hidden: false,
                    flex: 1,
                    renderer: function(value) {
                        if (value === '1') {
                            return '<span style="color:green;font-weight: bold">ABIERTA</span>';
                      
                         } else if (value === '2') {
                            return '<span style="color:red;font-weight: bold">CERRADA</span>';
                      
                        } else {
                            return value;
                        }

                    }
                   
                },
                
                
                
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_PRIORIDAD',
                    name: 'ID_PRIORIDAD',
                    id: 'detOrdenID_PRIORIDAD',
                    sortable: true,
                    header: 'Prioridad',
                    hidden: false,
                    filterable: true,
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtIdPrioridadOrden',
                        id: 'txtIdPrioridadOrden'
                    }
                }
                                 
               




            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreDetOrdenCompra'
                })

            ],
            stripeRows: true,
                listeners: {
                    itemcontextmenu: function(view, rec, node, index, e) {
//                     
                        e.stopEvent();
                        //  msgOut(me.habilitaMenu);
                        if (me.habilitaMenu) {
                            contextMenu.showAt(e.getXY());
                        }
                        return false;
                    },
                    cellcontextmenu: function(view, cell, cellIndex, record, row, rowIndex, e) {
                        var column = view.getHeaderByCell(cell);
                        var position = view.getPositionByEvent(e);
                        var columnIndex = position.column;
                        var dataIndex = column.dataIndex;
                        me.poscol = dataIndex;
                        msgOut(dataIndex);
                        // if (dataIndex === 'FLAG_POLIZA') {
                        me.habilitaMenu = true;

                       // me.column = 'CONCEPTO';
                       // me.column3 = 'NOMCC';
                       // me.column2 = 'CXP_FECHA';
                        //}


                        e.preventDefault();
//                           // alert(dataIndex);
                    }
                }

        });


        this.callParent(arguments);
    },
    money: function(val,val2,val3) {
        
        console.log(val);
        console.log(val2);
        console.log(val3);
        
        
        if (val > val3.data.IMPORTE_COTIZACION) {
            
            return '<span style="color:red;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
           
        } else if (val <= 0) {
            
             return '<span style="color:green;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        }
        return val;
    }
    


});
