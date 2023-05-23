Ext.define('AppOrdenCompra.view.GridOrdenCompra', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridordencompra',
    itemId: 'gridordencompra',
    xtype: 'gridordencompra',
    flex: 1,
     title: 'Orden de Compra',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StoreOrdenCompra',
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
       var storeCalendario = Ext.create('AppOrdenCompra.store.StoreCalendario');
       var storePeriodo = Ext.create('AppOrdenCompra.store.StorePeriodo');
       var storeCC = Ext.create('AppOrdenCompra.store.StoreCC');
       var storeProveedor=Ext.create('AppOrdenCompra.store.StoreProveedor');
       var storeAlmacen=Ext.create('AppOrdenCompra.store.StoreAlmacen');
       
       
       
   
       var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
       
            clicksToEdit: 1
        });


//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 2
//
//        });

        Ext.apply(me, {
            features: [filters],
            plugins: [
                cellEditing2
            ],
            tbar: [
                {
                   // iconCls: 'cancel-icon',
                    text: 'Ver Pedidos',
                    itemId: 'btnVerPedido',
                    id: 'btnVerPedido',
                    name: 'btnVerPedido',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("verPedidos", btn);
                    }

                },
  
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function (btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersMstOrden", btn);
                    }
                },
                
                
                 {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarOrden',
                    id: 'btnAgregarOrden',
                    name: 'btnAgregarOrden',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addOrden", btn, cellEditing2);
                    }


                },
                
                 {
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarOrden',
                    id: 'btnGuardarOrden',
                    name: 'btnGuardarOrden',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveOrden", btn,cellEditing2);
                    }

                },
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarOrden',
                    id: 'btnBorrarOrden',
                    name: 'btnBorrarOrden',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaOrden", btn);
                    }
                },
                {
                    iconCls: 'pdf-icon',
                    text: 'Imprimir Orden',
                    itemId: 'btnVerOrden',
                    id: 'btnVerOrden',
                    name: 'btnVerOrden',
                    handler: function(btn) {
                        me.fireEvent("verOrden", btn);
                    }

                },
                 '-',
                {
                    iconCls: 'checkall-icon',
                    text: 'Autorizar Orden',
                    itemId: 'btnAutorizaOrden',
                    id: 'btnAutorizaOrden',
                    name: 'btnAutorizaOrden',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("autorizaOrden", btn);
                    }

                },
                {
                    //iconCls: 'checkall-icon',
                    text: 'Cancela Autorizacion',
                    itemId: 'btnAutorizaOrdenCan',
                    id: 'btnAutorizaOrdenCan',
                    name: 'btnAutorizaOrdenCan',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("canAutorizaOrden", btn);
                    }

                },
                {
                    iconCls: 'cancel-icon',
                    text: 'Cancela Orden',
                    itemId: 'btnCanEstOrden',
                    id: 'btnCanEstOrden',
                    name: 'btnCanEstOrden',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("estatusCanOrden", btn);
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
                    id: 'ordenID',
                    sortable: true,
                    header: 'ID',
                    filterable: true,
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'ordenCOMPANIA',
                    sortable: true,
                    header: 'COMPANIA',
                    hidden: true,
                    flex: 1
                },



                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ESTATUS',
                    name: 'ESTATUS',
                    id: 'ordenESTATUS',
                    sortable: true,
                    header: 'ESTATUS',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ESTATUS_NOM',
                    name: 'ESTATUS_NOM',
                    id: 'ordenESTATUS_NOM',
                    sortable: true,
                    header: 'ESTATUS_NOM',
                    hidden: false,
                    filterable: true,
                    flex: 1,
                    renderer: function(value) {
                        if (value === 'PAGADO') {
                            return '<span style="color:green;font-weight: bold">PAGADO</span>';
                        } else if (value === 'AUTORIZADO') {
                            return '<span style="color:gold;font-weight: bold">AUTORIZADO</span>';
                         } else if (value === 'CANCELADO') {
                            return '<span style="color:red;font-weight: bold">CANCELADO</span>';
                         } else if (value === 'PENDIENTE') {
                            return '<span style="color:blue;font-weight: bold">PENDIENTE</span>';
                        } else {
                            return value;
                        }

                    }
                },
                
                
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RFC',
                    name: 'RFC',
                    id: 'ordenRFC',
                    sortable: true,
                    header: 'Proveedor',
                    filterable: true,
                    hidden: false,
                    flex: 1,
                     field: {
                            xtype: 'combobox',
                            name: 'cboRfcOrden',
                            id: 'cboRfcOrden',
                            allowBlank: false,
                            readOnly: false,
                            hidden:true,
        //                    enforceMaxLength: true,
        //                     maxLength: 36,
                             store: storeProveedor,
                                minChars: 3,
                                displayField: 'NOMBRE',
                                valueField: 'RFC',
                                typeAhead: false,
                                validateOnChange: true,
                                hideTrigger: false,

                                listConfig: {
                                    loadingText: 'Buscando...',
                                    emptyText: 'No se encontro el Empleado.',
                                    getInnerTpl: function() {
                                        return '<span style="color:green;font-weight: bold">{RFC}</span><h3>{NOMBRE}</h3>';
                                    }
                                },
                                listeners: {
                                    scope: this,
                                    select: function(value) {

    
                                       // Ext.getCmp('ordenID_PROVEEDOR').setValue(value.valueModels[0].data.ID_CLIENTE);
        //                     
                                       this.fireEvent("enviaIdProveedor", value.valueModels[0].data.ID_CLIENTE);
                                    },
                               beforequery: function(queryEvent, eOpts) {


                                    //    storeEmpleados.proxy.extraParams.rfc = '';

                            }









                                },
                                  pageSize: 10

                        
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_PROVEEDOR',
                    name: 'ID_PROVEEDOR',
                    id: 'ordenID_PROVEEDOR',
                    sortable: true,
                    header: 'ID_PROVEEDOR',
                    hidden: true,
                    flex: 1
                    
                   
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'USUARIO_AUTORIZO',
                    name: 'USUARIO_AUTORIZO',
                    id: 'ordenUSUARIO_AUTORIZO',
                    sortable: true,
                    header: 'USUARIO_AUTORIZO',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'USUARIO_COMPRADOR',
                    name: 'USUARIO_COMPRADOR',
                    id: 'ordenUSUARIO_COMPRADOR',
                    sortable: true,
                    header: 'USUARIO_COMPRADOR',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMBRE',
                    name: 'NOMBRE',
                    id: 'ordenNOMBRE',
                    sortable: true,
                    filterable: true,
                    header: 'Nombre',
                    hidden: false,
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtNombreOrden',
                        id: 'txtNombreOrden'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DESCRIPCION',
                    name: 'DESCRIPCION',
                    id: 'ordenDESCRIPCION',
                    sortable: true,
                    filterable: true,
                    header: 'Descripcion',
                    hidden: false,
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtDESCRIPCIONOrden',
                        id: 'txtDESCRIPCIONOrden'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CONDICIONES_PAGO',
                    name: 'CONDICIONES_PAGO',
                    id: 'ordenCONDICIONES_PAGO',
                    sortable: true,
                    filterable: true,
                    header: 'CONDICIONES PAGO',
                    hidden: false,
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtCondicionesOrden',
                        id: 'txtCondicionesOrden'
                    }
                },
               
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_ORDEN',
                    name: 'FECHA_ORDEN',
                    id: 'ordenFECHA_ORDEN',
                    sortable: true,
                    header: 'Fecha Orden',
                    format: 'd/m/Y',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    flex: 1,
                    renderer: // Ext.util.Format.dateRenderer('d/m/Y'),
                            function (value) {
                                if (Ext.isDate(value)) {
                                    return   Ext.Date.format(value, 'd/m/Y');
                                } else {
                                    return  value;
                                }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                            },
                    editor: {
                        xtype: 'datefield',
                        format: 'd/m/Y'
                    }


                },
               
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_REQUERIDA',
                    name: 'FECHA_REQUERIDA',
                    id: 'ordenFECHA_REQUERIDA',
                    sortable: true,
                    header: 'Fecha Requerida',
                    format: 'd/m/Y',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    flex: 1,
                    renderer: // Ext.util.Format.dateRenderer('d/m/Y'),
                            function (value) {
                                if (Ext.isDate(value)) {
                                    return   Ext.Date.format(value, 'd/m/Y');
                                } else {
                                    return  value;
                                }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                            },
                    editor: {
                        xtype: 'datefield',
                        format: 'd/m/Y'
                    }


                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CLASIFICACION',
                    name: 'CLASIFICACION',
                    id: 'ordenCLASIFICACION',
                    sortable: true,
                    header: 'CLASIFICACION',
                    hidden: false,
                    filterable: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    id: 'ordenTOTAL',
                    sortable: true,
                    header: 'TOTAL',
                    hidden: true,
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
                    flex: 1//,
//                    field: {
//                        xtype: 'numberfield',
//                        allowBlank: false,
//                        name: 'txtTotalOrden',
//                        id: 'txtTotalOrden'
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL_PENDIENTE',
                    name: 'TOTAL_PENDIENTE',
                    id: 'ordenTOTAL_PENDIENTE',
                    sortable: true,
                    header: 'TOTAL_PENDIENTE',
                    hidden: true,
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ALMACEN',
                    name: 'ID_ALMACEN',
                    id: 'ordenID_ALMACEN',
                    sortable: true,
                    header: 'Almacen',
                    hidden: false,
                    filterable: true,
                    flex: 1,
                      field: {
                        xtype: 'combobox',
                        name: 'txtIdAlmacenOrden',
                        id: 'txtIdAlmacenOrden',
                        store: storeAlmacen,
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
                    dataIndex: 'CTO_CTO',
                    name: 'CTO_CTO',
                    id: 'ordenCTO_CTO',
                    sortable: true,
                    header: 'C. Costos',
                    filterable: true,
                    hidden: false,
                    flex: 1,
                      field: {
                        xtype: 'combobox',
                        name: 'txtCCOrden',
                        id: 'txtCCOrden',
                        store: storeCC,
                        minChars: 1,
                        displayField: 'NOMBRE_CC',
                        valueField: 'CTO_CTO_CC',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
//                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro Centro de Costo.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CTO_CTO_CC}</span><h3>{NOMBRE_CC}</h3>';
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
                }
                
               




            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreOrdenCompra'
                })

            ]

        });


        this.callParent(arguments);
    }
    


});
