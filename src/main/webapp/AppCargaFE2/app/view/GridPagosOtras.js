Ext.define('AppCargaFE2.view.GridPagosOtras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpagosotras',
    itemId: 'gridpagosotras',
    xtype: 'gridpagosotras',
    store: 'StorePagosOtras',
    poscol: null,  
     split: true,
    collapsible: true,
    //title: 'Pagos',
    autoScroll: true,
    habilitaMenu: false,
    flex:1,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        
        var storeCalendario = Ext.create('AppCargaFE2.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppCargaFE2.store.StorePeriodo');
        var storePeriodoFin = Ext.create('AppCargaFE2.store.StorePeriodo');
        var storeConcGasto = Ext.create('AppCargaFE2.store.StoreConcGasto');
        
         var storePago = Ext.create('Ext.data.Store', {
            fields: ['ID_PAGO', 'NOMBRE_PAGO'],
                data : [
                    {"ID_PAGO":"PAR", "NOMBRE_PAGO":"Pago Parcial"},
                    {"ID_PAGO":"PAG", "NOMBRE_PAGO":"Pago Total"}
                   
                 
                ]
            });
            
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

        var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        });
//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 1
//        });
//        
//        var sellActionGuarda = Ext.create('Ext.Action', {
//            iconCls: 'save-icon',
//            text: 'Pago Total',
//            disabled: false,
//            handler: function(widget, event) {
//                me.fireEvent("pagoAll", widget, me.poscol);
//            }
//        });
//        
//        var sellActionParGuarda = Ext.create('Ext.Action', {
//            iconCls: 'save-icon',
//            text: 'Pago Parcial',
//            disabled: false,
//            handler: function(widget, event) {
//                me.fireEvent("pagoAllPar", widget, me.poscol);
//            }
//        });
//        
//        var sellActionCanPago = Ext.create('Ext.Action', {
//            iconCls: 'delete-icon',
//            text: 'Eliminar Pagos',
//            disabled: false,
//            handler: function(widget, event) {
//                me.fireEvent("cancelPagoAll", widget, me.poscol);
//            }
//        });
//        
//        var relacionPol = Ext.create('Ext.Action', {
//            iconCls: 'icon-relacion',
//            text: 'Polizas Relacionadas',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("relacionaPolExistentePagosCXP", widget,me.poscol);
//            }
//        });
//       
//     
       var lblEstatusPago = new Ext.form.Display({
            id: 'lblEstatusPagoOtras',
            name: 'lblEstatusPagoOtras',
            value: '<span style="color:black;">Estatus Pago</span>'

        });
//        
//         var contextMenu = Ext.create('Ext.menu.Menu', {
//            items: [
//                relacionPol,
//                '-',
//                sellActionGuarda,
//                '-',
//                sellActionParGuarda,
//                '-',
//                sellActionCanPago
//                         
//                
//            ]
//        });
       
        Ext.apply(me, {
             features: [
               filters
            ],
            plugins: [
                cellEditing2
            ],
             multiSelect:true,
            tbar: [
                
//                 {
//                        iconCls: 'converter-icon',
//                            text: 'PREPOLIZA PAGO...',
//                            handler: function(btn) {                                
//                                me.fireEvent("verConvertidorPagoCXP", btn);
//                            }   
//                },
            
                 lblEstatusPago,
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersPagosOtras", btn);
                            }
                  },
                   {
                    xtype: 'combobox',
                    id: 'cboCalendarioPagosOtras',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioPagosOtras',
                    itemId: 'cboCalendarioPagosOtras',
                    displayField: 'CALENDARIO',
                    valueField: 'CALENDARIO',              
                    typeAhead: true,
                    minChars: 0,
                   // size:2,
                   width:130,
                   labelWidth:60,
                    editable:false,
                    store: storeCalendario,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            
                             if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboPeriodoPagosOtras').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                            
                             Ext.getCmp('cboPeriodoPagosOtrasFin').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodoFin.removeAll();
                            storePeriodoFin.proxy.extraParams.calendario = valor.value;
                            storePeriodoFin.load({
                                callback: function(val, val2) {

                                }
                            });
                          
                        }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboPeriodoPagosOtras',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoPagosOtras',
                    itemId: 'cboPeriodoPagosOtras',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    labelWidth:90,
                    width:190,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           me.fireEvent("buscaPorFechaPagosOtras",  Ext.getCmp('cboCalendarioPagosOtras').getValue(),Ext.getCmp('cboPeriodoPagosOtras').getValue(),Ext.getCmp('cboPeriodoPagosOtrasFin').getValue() );
                           
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosOtras').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoPagosOtrasFin',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoPagosOtrasFin',
                    itemId: 'cboPeriodoPagosOtrasFin',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    labelWidth:90,
                    width:190,
                    editable:false,
                    store: storePeriodoFin,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           me.fireEvent("buscaPorFechaPagosOtras",  Ext.getCmp('cboCalendarioPagosOtras').getValue(),Ext.getCmp('cboPeriodoPagosOtras').getValue(),Ext.getCmp('cboPeriodoPagosOtrasFin').getValue() );
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosOtras').getValue();
                
                    }
                     }
                }//,
//                 '-',
//                  {
//                    xtype: 'splitbutton',
//                    text: 'Descargar...',
//                    iconCls: 'csv-icon',
//                    menu: [
//                   
//                 {
//                     iconCls: 'csv-icon',
//                    text: 'Descarga',
//                    itemId: 'btnDescargaPagosPagCXP',
//                    id: 'btnDescargaPagosPagCXP',
//                    name: 'btnDescargaPagosPagCXP',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("decargaPagosPgCXP", btn);
//                    }
//
//                },
//                {
//                     iconCls: 'csv-icon',
//                    text: 'Descarga Todo',
//                    itemId: 'btnDescargaPagosCXP',
//                    id: 'btnDescargaPagosCXP',
//                    name: 'btnDescargaPagosCXP',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("decargaPagosCXP", btn);
//                    }
//
//                }
//                    ]},
//                
//                  '-',
//                   {
//                    xtype: 'splitbutton',
//                    text: 'Generar Polizas...',
//                    iconCls: 'poliza-icon',
//                    menu: [
//               
//                       
//                            {
//                                iconCls: 'save-icon',
//                                text: 'Poliza Pagos',
//                                itemId: 'btnGuardarArchivosPagosCXP',
//                                id: 'btnGuardarArchivosPagosCXP',
//                                name: 'btnGuardarArchivosPagosCXP',
//                                scope: this,
//                                handler: function(btn) {
//                                    this.fireEvent("guardarArchivosPagosCXP", btn);
//                                }
//
//                            }
//                ]
//            }
             
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIAPagosOtras',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    xtype: 'actioncolumn',
                    dataIndex: 'NUMERO',
                    hidden: false,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO',
                    id: 'arNUMEROPagosOtras',
                    sortable: true,
                    header: 'Numero',
                    width: 70,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                
                            var estatusCxp = record.data.ESTATUS_CXP;
                        
                     
                             if (Ext.isEmpty(estatusCxp)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 metaData.tdAttr = 'style="background-color:#C0C0C0;color:black;"';
                                  return value;
                                  
                                 
                             }else{
                                 
                                  if (estatusCxp === 'PAG') {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                    metaData.tdAttr = 'style="background-color:#04B431;color:black;"';
                                     return value;

                                }else{
                                    
                                    if (estatusCxp === 'PAR') {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                    metaData.tdAttr = 'style="background-color:#D7DF01;color:black;"';
                                     return value;

                                }
                                    
                                    
                                }
                            
                          
                                return value;
                             }

                        

                      },
                      getTip: function(v, meta, rec) {
                          
                           var estatusCxpTipo = rec.get('ESTATUS_CXP');
                        
                     
                             if (Ext.isEmpty(estatusCxpTipo)) {
                                 
                                return rec.get('NUMERO') +' La factura no tiene pagos';
                                  
                                 
                             }else{
                                 
                                  if (estatusCxpTipo === 'PAG') {
                                 
                                     return rec.get('NUMERO') +' La factura tiene un pago total';
                                }else{
                                    
                                    if (estatusCxpTipo === 'PAR') {
                                 
                                       return rec.get('NUMERO') +' La factura tiene un pago parcial';

                                }
                                    
                                    
                                }
                            
                          
                             }

                      } 
                       

                },
               
               
                {
                    dataIndex: 'RFC',
                    hidden: false,
                     filterable: true,
                    name: 'RFC',
                    id: 'arRFCPagosOtras',
                    sortable: true,
                    header: 'Rfc',
                    width: 150

                },
                 {
                    dataIndex: 'NOMBRE',
                    hidden: false,
                     filterable: true,
                    name: 'NOMBRE',
                    id: 'arNOMBREPagosOtras',
                    sortable: true,
                    header: 'Nombre',
                    width: 500

                },
                {
                    dataIndex: 'MONEDA',
                    hidden: false,
                     filterable: true,
                    name: 'MONEDA',
                    id: 'arMONEDAPagosOtras',
                    sortable: true,
                    header: 'Moneda',
                    width: 100,
                    renderer: function(value) {
               
            
                         if (value === 'MXN') {
                            return 'MXN-Pesos Mexicanos';
                        } else if (value === 'USD') {
                            return 'USD-Dolar Estadounidense';
                        


                        } else {
                            return value;
                        }


                    }

                },
                {
                    dataIndex: 'FECHA',
                    hidden: false,
                     filterable: true,
                    name: 'FECHA',
                    id: 'arFECHAPagosOtras',
                    sortable: true,
                    header: 'Fecha',
                    width: 100

                },
                 {
                    dataIndex: 'SUBTOTAL',
                    hidden: false,
                     filterable: true,
                     filter: {
                        type: 'numeric'
                    },
                    name: 'SUBTOTAL',
                    align: 'right',
                    id: 'arSUBTOTALPagosOtras',
                    sortable: true,
                    header: 'Subtotal',
                    width: 100,
                    renderer: this.money

                },
                 {
                    dataIndex: 'TOTAL',
                    hidden: false,
                     filterable: true,
                     filter: {
                        type: 'numeric'
                    },
                    align: 'right',
                    name: 'TOTAL',
                    id: 'arTOTALPagosOtras',
                    sortable: true,
                    header: 'Total',
                    width: 100,
                    renderer: this.money

                },
                
                 {
                    dataIndex: 'ESTATUS_CXP',
                    name: 'ESTATUS_CXP',
                    hidden: false,
                    id: 'arESTATUS_CXPPagosOtras',
                    sortable: true,
                    width: 200,
                    header: 'Estatus',
                    renderer: function(value) {
               
            
                        if (value === 'PAG') {
                            return '<span style="color:green;font-weight: bold">Pago Total</span>';
                        } else if (value === 'PAR') {
                            return '<span style="color:gold;font-weight: bold">Pago Parcial</span>';
                        } else if (Ext.isEmpty(value)) {
                            return '<span style="color:red;font-weight: bold">Sin Pagar</span>';
                         } else if (value === 'TES') {
                            return '<span style="color:blue;font-weight: bold">Enviado a Pagar</span>';
                         } else if (value === 'IMP') {
                            return '<span style="color:gold;font-weight: bold">Impreso</span>';
                         } else if (value === 'CANF') {
                            return '<span style="color:red;font-weight: bold">Factura Cancelada</span>';
                         } else if (value === 'CAN') {
                            return '<span style="color:brown;font-weight: bold">Cancelada</span>';
                            
                         } else if (value === 'REMB') {
                            return '<span style="color:#04B4AE;font-weight: bold">Rembolso</span>';
                            
                         } else if (value === 'ANT') {
                            return '<span style="color:#04B4AE;font-weight: bold">Anticipo</span>';
                            
                         } else if (value === 'FG') {
                            return '<span style="color:#380B61;font-weight: bold">Folio Generado</span>';
                         

                        } else {
                            return value;
                        }


                    }
                }
                              
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    id:'pagPagosOtras',
                    store: 'StorePagosOtras'
              
                })
            ]//,
//             viewConfig: {
//                  getRowClass: function(record) {
//
//                },
//                
//                stripeRows: true,
//                listeners: {
//                    itemcontextmenu: function(view, rec, node, index, e) {                  
//                        e.stopEvent();
//                        if (me.habilitaMenu) {
//                            contextMenu.showAt(e.getXY());
//                        }
//                        return false;
//                    },
//                    cellcontextmenu: function(view, cell, cellIndex, record, row, rowIndex, e) {
//                        var column = view.getHeaderByCell(cell);
//                        var position = view.getPositionByEvent(e);
//                        var columnIndex = position.column;
//                        var dataIndex = column.dataIndex;
//                        me.poscol = dataIndex;
//                        
//                       
//                            me.habilitaMenu = true;
// 
//                           //   me.column = 'NOMIDCONCGASTO';
//                           //   me.column2 = 'FECHA_POL';
//                                           
//                        e.preventDefault();
//
//                    }
//                }
//            }

        
        });


        this.callParent(arguments);
    },
     money: function(val) {
        if (val > 0) {
            return '<span style="color:blue;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        }
        return val;
    }



});


