Ext.define('AppPortalFolio.view.GridErpFecomprobantes', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griderpfecomprobantes',
    itemId: 'griderpfecomprobantes',
    xtype: 'griderpfecomprobantes',
    flex: 1,
    title: 'Portal Carga Facturas',
    store: 'StoreErpFecomprobantes',
    split: true,
    collapsible: true,
    autoScroll: true,
    initComponent: function () {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';

        var encode = true;
        var local = false;



        Ext.apply(this, {
            plugins: 'gridfilters',
            //multiSelect: true,

            listeners: {
                columnresize: function (ct, column, width, eOpts) {
                    me.fireEvent("changeColumn", ct, column, width, eOpts);
                },
                viewready: function (grid) {


                }
            },
            tbar: [
                {
                    iconCls: 'clean-filter-icon',
                    //text: 'Limpiar Filtros',
                    handler: function (btn) {
                        me.fireEvent("limpiaFiltros", btn);
                    }
                },
                '->',
//                {
//                    xtype: 'splitbutton',
//                    text: 'Descarga...',
//                    iconCls: 'download-sat',
//                    menu: [
//                        {
//                            iconCls: 'csv-icon',
//                            text: 'Ver Excel',
//                            itemId: 'btnVerExcel',
//                            id: 'btnVerExcel',
//                            name: 'btnVerExcel',
//                            handler: function (btn) {
//                                me.fireEvent("verExcel", btn);
//                            }
//
//                        },
//                        {
//                            iconCls: 'pdf-icon',
//                            text: 'Ver PDF',
//                            itemId: 'btnVerPDF',
//                            id: 'btnVerPDF',
//                            name: 'btnVerPDF',
//                            handler: function (btn) {
//                                me.fireEvent("verPDF", btn);
//                            }
//
//                        }]
//                },

              {
                 //   iconCls: 'delete-icon',
                    text: 'Editar Datos Bancarios',
                    itemId: 'btnEditBanc',
                    id: 'btnEditBanc',
                    hidden:false,
                    name: 'btnEditBanc',
                    scope: this,
                    handler: function (btn) {
                        this.fireEvent("addDatBanc", btn);
                    }
                },
              
              
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Salir',
                    itemId: 'btnBorrarProv',
                    id: 'btnBorrarProv',
                    name: 'btnBorrarProv',
                    scope: this,
                    handler: function (btn) {
                        this.fireEvent("exitApp", btn);
                    }
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'colCOMPANIA',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Compania',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUMERO',
                    name: 'NUMERO',
                    id: 'colNUMERO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Id',
                    hidden: false,
                    width:65
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FOLIO',
                    name: 'FOLIO',
                    id: 'colFOLIO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Folio',
                    hidden: false,
                    width:65
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SERIE',
                    name: 'SERIE',
                    id: 'colSERIE',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Serie',
                    hidden: false,
                    width:60
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    id: 'colFECHA',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Fecha Factura',
                    hidden: false,
                    flex: 1
                },                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TIPO_DE_COMPROBANTE',
                    name: 'TIPO_DE_COMPROBANTE',
                    id: 'colTIPO_DE_COMPROBANTE',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'TipoDecomprobante',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CONDICIONES_DE_PAGO',
                    name: 'CONDICIONES_DE_PAGO',
                    id: 'colCONDICIONES_DE_PAGO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'CondicionesDepago',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MONEDA',
                    name: 'MONEDA',
                    id: 'colMONEDA',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Moneda',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MOTIVO_DESCUENTO',
                    name: 'MOTIVO_DESCUENTO',
                    id: 'colMOTIVO_DESCUENTO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'MotivoDescuento',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'XML',
                    name: 'XML',
                    id: 'colXML',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Xml',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_CAP',
                    name: 'FECHA_CAP',
                    id: 'colFECHA_CAP',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Fecha Recepcion',
                    hidden: false,
                    flex: 1
                },
                {
                    menuDisabled: true,
                    sortable: false,
                    xtype: 'actioncolumn',
                    text: '',
                    id: 'bloqueoColumn',
                    width: 30,
                    tdCls: 'x-change-cell',
                    items: [
                        {
                            getClass: function (v, meta, rec) {
                                
                                
                           
                                if (rec.get('ESTATUS_CXP')==='PAG') {
                                    return 'img-green';
                                }  else if (rec.get('ESTATUS_CXP') === 'PAR') {
                                    return 'img-wait';
                                } else if (Ext.isEmpty(rec.get('ESTATUS_CXP'))) {
                                    return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP') === 'TES') {
                                     return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP') === 'IMP') {
                                     return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP') === 'CANF') {
                                     return 'img-red';
                                 } else if (rec.get('ESTATUS_CXP') === 'CAN') {
                                   return 'img-red';

                                 } else if (rec.get('ESTATUS_CXP') === 'REMB') {
                                     return 'img-wait';

                                 } else if (rec.get('ESTATUS_CXP') === 'ANT') {
                                    return 'img-wait';

                                 } else if (rec.get('ESTATUS_CXP') === 'FG') {
                                    return 'img-wait';
    
                                        }else{
                                            
                                             return 'img-wait';
                                           
                                        }

                            },
                            getTip: function (v, meta, rec) {
                                
                                 if (rec.get('ESTATUS_CXP')==='PAG') {
                                    return 'Factura Pagada';
                                }  else if (rec.get('ESTATUS_CXP') === 'PAR') {
                                    return 'Factura en espera';
                                } else if (Ext.isEmpty(rec.get('ESTATUS_CXP'))) {
                                    return 'Factura en espera';
                                 } else if (rec.get('ESTATUS_CXP') === 'TES') {
                                     return 'Factura en espera';
                                 } else if (rec.get('ESTATUS_CXP') === 'IMP') {
                                     return 'Factura en espera';
                                 } else if (rec.get('ESTATUS_CXP') === 'CANF') {
                                     return 'Factura cancelada';
                                 } else if (rec.get('ESTATUS_CXP') === 'CAN') {
                                   return 'Factura cancelada';

                                 } else if (rec.get('ESTATUS_CXP') === 'REMB') {
                                     return 'Factura en espera';

                                 } else if (rec.get('ESTATUS_CXP') === 'ANT') {
                                    return 'Factura en espera';

                                 } else if (rec.get('ESTATUS_CXP') === 'FG') {
                                    return 'Factura en espera';
    
                                        }else{
                                            
                                             return 'Factura en espera';
                                           
                                        }
                                

                                
                            },
                            handler: function (grid, rowIndex, colIndex) {
                                var rec = grid.getStore().getAt(rowIndex);

                            }
                        }]
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PDF',
                    name: 'PDF',
                    id: 'colPDF',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Pdf',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DIR_PDF',
                    name: 'DIR_PDF',
                    id: 'colDIR_PDF',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'DirPdf',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DIR_XML',
                    name: 'DIR_XML',
                    id: 'colDIR_XML',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'DirXml',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RFC',
                    name: 'RFC',
                    id: 'colRFC',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Rfc',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'UUID',
                    name: 'UUID',
                    id: 'colUUID',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Uuid',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_VENC_CXP',
                    name: 'FECHA_VENC_CXP',
                    id: 'colFECHA_VENC_CXP',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'FechaVenccxp',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MONEDA_PAGO',
                    name: 'MONEDA_PAGO',
                    id: 'colMONEDA_PAGO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'MonedaPago',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TIPO_CAMBIO',
                    name: 'TIPO_CAMBIO',
                    id: 'colTIPO_CAMBIO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'TipoCambio',
                    hidden: true,
                    align: 'right',
                    renderer: function (value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.number(value, '0,000.00') + '</span>';
                        }
                    },
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DESCUENTO',
                    name: 'DESCUENTO',
                    id: 'colDESCUENTO',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Descuento',
                    hidden: false,
                    align: 'right',
                    renderer: function (value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.number(value, '0,000.00') + '</span>';
                        }
                    },
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    id: 'colSUBTOTAL',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Subtotal',
                    hidden: false,
                    align: 'right',
                    renderer: function (value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.number(value, '0,000.00') + '</span>';
                        }
                    },
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL_LETRA',
                    name: 'TOTAL_LETRA',
                    id: 'colTOTAL_LETRA',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'TotalLetra',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    id: 'colTOTAL',
                    sortable: true,
                    filter: {
                        type: 'string'
                    },
                    header: 'Total',
                    hidden: false,
                    align: 'right',
                    renderer: function (value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.number(value, '0,000.00') + '</span>';
                        }
                    },
                    flex: 1
                }
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreErpFecomprobantes',
                    listeners: {
                        scope: this,
                        change: function (col, pageData, eOpts) {
                            if (!Ext.isEmpty(pageData)) {
                                this.fireEvent("recargaPagina", pageData.currentPage);
                            }
                        }
                    },
                    id: 'statusDetalle',
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



