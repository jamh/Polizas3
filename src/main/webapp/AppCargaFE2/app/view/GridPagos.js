Ext.define('AppCargaFE2.view.GridPagos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpagos',
    itemId: 'gridpagos',
    xtype: 'gridpagos',
    store: 'StorePagos',
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
        
        var sellActionGuarda = Ext.create('Ext.Action', {
            iconCls: 'save-icon',
            text: 'Pago Total',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("pagoAll", widget, me.poscol);
            }
        });
        
        var sellActionParGuarda = Ext.create('Ext.Action', {
            iconCls: 'save-icon',
            text: 'Pago Parcial',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("pagoAllPar", widget, me.poscol);
            }
        });
        
        var sellActionCanPago = Ext.create('Ext.Action', {
            iconCls: 'delete-icon',
            text: 'Eliminar Pagos',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("cancelPagoAll", widget, me.poscol);
            }
        });
        
        var relacionPol = Ext.create('Ext.Action', {
            iconCls: 'icon-relacion',
            text: 'Polizas Relacionadas',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionaPolExistentePagosCXP", widget,me.poscol);
            }
        });
       
     
       var lblEstatusPago = new Ext.form.Display({
            id: 'lblEstatusPago',
            name: 'lblEstatusPago',
            value: '<span style="color:black;">Estatus Pago</span>'

        });
        
         var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                relacionPol,
                '-',
                sellActionGuarda,
                '-',
                sellActionParGuarda,
                '-',
                sellActionCanPago
                         
                
            ]
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
                
                 {
                        iconCls: 'converter-icon',
                            text: 'PREPOLIZA PAGO...',
                            handler: function(btn) {                                
                                me.fireEvent("verConvertidorPagoCXP", btn);
                            }   
                },
                '-',
                
                 lblEstatusPago,
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersPagos", btn);
                            }
                  },
                   {
                    xtype: 'combobox',
                    id: 'cboCalendarioPagosCXP',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioPagosCXP',
                    itemId: 'cboCalendarioPagosCXP',
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
                            Ext.getCmp('cboPeriodoPagosCXP').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                            
                             Ext.getCmp('cboPeriodoPagosCxpFin').clearValue();
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
                    id: 'cboPeriodoPagosCXP',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoPagosCXP',
                    itemId: 'cboPeriodoPagosCXP',
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
                           
                           me.fireEvent("buscaPorFechaPagosCXP",  Ext.getCmp('cboCalendarioPagosCXP').getValue(),Ext.getCmp('cboPeriodoPagosCXP').getValue(),Ext.getCmp('cboPeriodoPagosCxpFin').getValue() );
                           
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosCXP').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoPagosCxpFin',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoPagosCxpFin',
                    itemId: 'cboPeriodoPagosCxpFin',
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
                           
                           me.fireEvent("buscaPorFechaPagosCXP",  Ext.getCmp('cboCalendarioPagosCXP').getValue(),Ext.getCmp('cboPeriodoPagosCXP').getValue(),Ext.getCmp('cboPeriodoPagosCxpFin').getValue() );
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosCXP').getValue();
                
                    }
                     }
                },
                 '-',
                  {
                    xtype: 'splitbutton',
                    text: 'Descargar...',
                    iconCls: 'csv-icon',
                    menu: [
                   
                 {
                     iconCls: 'csv-icon',
                    text: 'Descarga',
                    itemId: 'btnDescargaPagosPagCXP',
                    id: 'btnDescargaPagosPagCXP',
                    name: 'btnDescargaPagosPagCXP',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaPagosPgCXP", btn);
                    }

                },
                {
                     iconCls: 'csv-icon',
                    text: 'Descarga Todo',
                    itemId: 'btnDescargaPagosCXP',
                    id: 'btnDescargaPagosCXP',
                    name: 'btnDescargaPagosCXP',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaPagosCXP", btn);
                    }

                }
                    ]},
                
                  '-',
                   {
                    xtype: 'splitbutton',
                    text: 'Generar Polizas...',
                    iconCls: 'poliza-icon',
                    menu: [
               
                       
                            {
                                iconCls: 'save-icon',
                                text: 'Poliza Pagos',
                                itemId: 'btnGuardarArchivosPagosCXP',
                                id: 'btnGuardarArchivosPagosCXP',
                                name: 'btnGuardarArchivosPagosCXP',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivosPagosCXP", btn);
                                }

                            }
                ]
            }
             
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIAPagos',
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
                    id: 'arNUMEROPagos',
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
                    dataIndex: 'NOMBRE',
                    hidden: false,
                     filterable: true,
                    name: 'NOMBRE',
                    id: 'arNOMBREPagos',
                    sortable: true,
                    header: 'Nombre',
                    width: 200

                },
                {
                    dataIndex: 'RFC',
                    hidden: false,
                     filterable: true,
                    name: 'RFC',
                    id: 'arRFCPagos',
                    sortable: true,
                    header: 'Rfc',
                    width: 150

                },
                 {
                    dataIndex: 'NOMBRE',
                    hidden: false,
                     filterable: true,
                    name: 'NOMBRE',
                    id: 'arNOMBREPagos',
                    sortable: true,
                    header: 'Nombre',
                    width: 500

                },
                {
                    dataIndex: 'FOLIO',
                    hidden: false,
                     filterable: true,
                    name: 'FOLIO',
                    id: 'arFOLIOPagos',
                    sortable: true,
                    header: 'Folio',
                    width: 200

                },
                {
                    dataIndex: 'MONEDA',
                    hidden: false,
                     filterable: true,
                    name: 'MONEDA',
                    id: 'arMONEDAPagos',
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
                    id: 'arFECHAPagos',
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
                    id: 'arSUBTOTALPagos',
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
                    id: 'arTOTALPagos',
                    sortable: true,
                    header: 'Total',
                    width: 100,
                    renderer: this.money

                },
                
                 {
                    dataIndex: 'ESTATUS_CXP',
                    name: 'arESTATUS_CXPPagos',
                    hidden: false,
                    id: 'arESTATUS_CXPPagos',
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
                    

//                    
//                    field: {
//                        xtype: 'combobox',
//                        id: 'cboTipoPago',
//                        name: 'cboTipoPago',
//                        itemId: 'cboTipoPago',
//                        displayField: 'NOMBRE_PAGO',
//                        valueField: 'ID_PAGO',
//                        typeAhead: true,
//                        minChars: 0,
//                        editable: false,
//                        store: storePago,
//                        allowBlank: false,
//                        
//                        listeners: {
//                            select: function(value) {
//                               // me.fireEvent("setConcGastoCXP", value.valueModels[0].data.NO_CASO);
//                            }
//                        }
//                     
//
//                    },
                  
                
                },
                 {
                    dataIndex: 'NO_CASO_PAGOS',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NO_CASO_PAGOS',
                    id: 'NO_CASO_PAGOS',
                    sortable: true,
                    header: 'No Caso',
                    width: 50
                },
                
                {
                    dataIndex: 'IDCONCGASTO_PAGOS',
                    name: 'colIDCONCGASTO_PAGOS',
                    hidden: true,
                    id: 'colIDCONCGASTO_PAGOS',
                    sortable: true,
                    header: 'IDCONCGASTO_PAGOS',
                    width: 280
                },
                  {
                    dataIndex: 'NOMIDCONCGASTOPAGOS',
                    name: 'NOMIDCONCGASTOPAGOS',
                    hidden: false,
                    id: 'NOMIDCONCGASTOPAGOS',
                    sortable: true,
                    header: 'Prepoliza',
                    
                    
                    field: {
                        xtype: 'combobox',
                        id: 'cboConcGastoPagosCXP',
                        name: 'cboConcGastoPagosCXP',
                        itemId: 'cboConcGastoPagosCXP',
                        displayField: 'GNOMBRE',
                        valueField: 'NO_CASO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeConcGasto,
                        allowBlank: false,
                        listeners: {
                            select: function(value) {
                                me.fireEvent("setConcGastoPago", value.valueModels[0].data.NO_CASO);
                            }
                        }


                    },
                     renderer: function(value) {

                        var index = storeConcGasto.find('NO_CASO', value);
                        
                       if (index > -1) {
                            var record = storeConcGasto.getAt(index);
                            return record.get('GNOMBRE');
                        }else{
                            return value;
                            
                        }

                    },
                    width: 250
                },
               
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'FLAG_POLIZA_PAGO',
                    id: 'FLAG_POLIZA_PAGO',
                    
                      listeners: {
                       // scope: this,
                       // beforecheckchange: function(col, index, checked) {                         
                       //  this.fireEvent("beforecheckPoliza", index, checked);
                       // }
                     }
                  
                    
                },
                {
                    dataIndex: 'TIPO_POLIZA_PAGO',
                    name: 'TIPO_POLIZA_PAGO',
                     filterable: true,
                    
                    hidden: false,
                    id: 'arTIPO_POLIZA_PAGO',
                    sortable: true,
                    header: 'Tipo Poliza',
                    width: 100,
                              renderer: function(value) {
                        if(value==='D'){
                            return 'D-DIARIO';
                        }else if(value==='E'){
                            return 'E-EGRESOS';
                        }else if(value==='I'){
                            return 'I-INGRESOS';
                        }else{
                             return value;
                        }

                    }
                },
                {
                    dataIndex: 'FECHA_POL_PAGO',
                    name: 'FECHA_POL_PAGO',
                    id: 'arFECHA_POL_PAGO',
                    sortable: true,
                    header: 'Fecha Poliza',
                    width: 120,
                     format:'d/m/Y',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    flex: 1,
                    renderer:function(value) {
                                if(Ext.isDate(value)){
                                    return   Ext.Date.format(value, 'd/m/Y');
                                }else {
                            return  value;
                        }

                    },                    
                     editor: {
                        xtype: 'datefield',
                        format: 'd/m/Y'                                        
                    }
                
                },
                {
                    dataIndex: 'NUMERO_POL_PAGO',
                    name: 'NUMERO_POL_PAGO',
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    hidden: false,
                    id: 'arNUMERO_POL_PAGO',
                    sortable: true,
                    header: 'Numero Poliza',
                    width: 100
                },
                
//                {
//                    xtype: 'gridcolumn',
//                    dataIndex: 'TIPO_CAMBIO',
//                    header: 'Tipo Cambio',
//                    name: 'txtTipoCambioPago',
//                    id: 'txtTipoCambioPago',
//                    //summaryType: 'sum',
//                    //summaryRenderer: Ext.util.Format.usMoney,
//                    width: 100,
//                    align: 'right',
//                    field: {
//                        xtype: 'numberfield',
//                        allowNegative: true,
//                        allowDecimals: true,
//                        decimalSeparator: '.'
//                    },
//                    filterable: true,
//                    filter: {
//                        type: 'numeric'
//                    }
//
//                    ,
//                    renderer: this.money
//                },
                 
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'PAGO_CXP',
                    header: 'Pago',
                    name: 'txtPagoDet',
                    id: 'txtPagoDet',
                     hidden:true,
                    //summaryType: 'sum',
                    //summaryRenderer: Ext.util.Format.usMoney,
                    width: 100,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.'
                    },
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    }

                    ,
                    renderer: this.money
                },
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOT_PESOS',
                    header: 'Pago Pesos',
                    name: 'txtPagoPesosDet',
                    id: 'txtPagoPesosDet',
                    hidden:true,
                    //summaryType: 'sum',
                    //summaryRenderer: Ext.util.Format.usMoney,
                    width: 100,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.'
                    },
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    }

                    ,
                    renderer: this.money
                }
                 
                              
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    id:'pagPagos',
                    store: 'StorePagos'
              
                })
            ],
             viewConfig: {
                  getRowClass: function(record) {

                },
                
                stripeRows: true,
                listeners: {
                    itemcontextmenu: function(view, rec, node, index, e) {                  
                        e.stopEvent();
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
                        
                       
                            me.habilitaMenu = true;
 
                           //   me.column = 'NOMIDCONCGASTO';
                           //   me.column2 = 'FECHA_POL';
                                           
                        e.preventDefault();

                    }
                }
            }

        
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


