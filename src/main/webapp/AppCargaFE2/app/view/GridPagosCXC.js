Ext.define('AppCargaFE2.view.GridPagosCXC', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpagoscxc',
    itemId: 'gridpagoscxc',
    xtype: 'gridpagoscxc',
    store: 'StorePagosCXC',
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
        
         var storePagoCXC = Ext.create('Ext.data.Store', {
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

        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
        
        var sellActionGuardaCXC = Ext.create('Ext.Action', {
            iconCls: 'save-icon',
            text: 'Pago Total',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("pagoAllCXC", widget, me.poscol);
            }
        });
        
        var sellActionParGuardaCXC = Ext.create('Ext.Action', {
            iconCls: 'save-icon',
            text: 'Pago Parcial',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("pagoAllParCXC", widget, me.poscol);
            }
        });
        
        var sellActionCanPagoCXC = Ext.create('Ext.Action', {
            iconCls: 'delete-icon',
            text: 'Eliminar Pagos',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("cancelPagoAllCXC", widget, me.poscol);
            }
        });
       
     
       var lblEstatusPago = new Ext.form.Display({
            id: 'lblEstatusPagoCXC',
            name: 'lblEstatusPago',
            value: '<span style="color:black;">Estatus Pago</span>'

        });
        
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                sellActionGuardaCXC,
                '-',
                sellActionParGuardaCXC,
                '-',
                sellActionCanPagoCXC
                         
                
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
                                me.fireEvent("verConvertidorPagoCXC", btn);
                            }   
                },
                '-',
                
                 lblEstatusPago,
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersPagosCXC", btn);
                            }
                  },
                  {
                    xtype: 'combobox',
                    id: 'cboCalendarioPagosCXC',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioPagosCXC',
                    itemId: 'cboCalendarioPagosCXC',
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
                            Ext.getCmp('cboPeriodoPagosCXC').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                            
                             Ext.getCmp('cboPeriodoPagosCxCFin').clearValue();
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
                    id: 'cboPeriodoPagosCXC',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoPagosCXC',
                    itemId: 'cboPeriodoPagosCXC',
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
                           
                           me.fireEvent("buscaPorFechaPagosCXC",  Ext.getCmp('cboCalendarioPagosCXC').getValue(),Ext.getCmp('cboPeriodoPagosCXC').getValue(),Ext.getCmp('cboPeriodoPagosCxCFin').getValue() );
                           
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosCXC').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoPagosCxCFin',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoPagosCxCFin',
                    itemId: 'cboPeriodoPagosCxCFin',
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
                           
                           me.fireEvent("buscaPorFechaPagosCXC",  Ext.getCmp('cboCalendarioPagosCXC').getValue(),Ext.getCmp('cboPeriodoPagosCXC').getValue(),Ext.getCmp('cboPeriodoPagosCxCFin').getValue() );
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioPagosCXC').getValue();
                
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
                    itemId: 'btnDescargaPagosCXCpag',
                    id: 'btnDescargaPagosCXCpag',
                    name: 'btnDescargaPagosCXCpag',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaPagosCXCpag", btn);
                    }

                },
                   {
                     iconCls: 'csv-icon',
                    text: 'Descarga Todo',
                    itemId: 'btnDescargaPagosCXC',
                    id: 'btnDescargaPagosCXC',
                    name: 'btnDescargaPagosCXC',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaPagosCXC", btn);
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
                                itemId: 'btnGuardarArchivosPagosCXC',
                                id: 'btnGuardarArchivosPagosCXC',
                                name: 'btnGuardarArchivosPagosCXC',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivosPagosCXC", btn);
                                }

                            }
                ]
            }
             
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIAPagosCXC',
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
                    id: 'arNUMEROPagosCXC',
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
                    id: 'arNOMBREPagosCXC',
                    sortable: true,
                    header: 'Nombre',
                    width: 200

                },
                {
                    dataIndex: 'RFC',
                    hidden: false,
                     filterable: true,
                    name: 'RFC',
                    id: 'arRFCPagosCXC',
                    sortable: true,
                    header: 'Rfc',
                    width: 150

                },
                 {
                    dataIndex: 'NOMBRE',
                    hidden: false,
                     filterable: true,
                    name: 'NOMBRE',
                    id: 'arNOMBREPagosCXC',
                    sortable: true,
                    header: 'Nombre',
                    width: 500

                },
                {
                    dataIndex: 'FOLIO',
                    hidden: false,
                     filterable: true,
                    name: 'FOLIO',
                    id: 'arFOLIOPagosCXC',
                    sortable: true,
                    header: 'Folio',
                    width: 200

                },
                {
                    dataIndex: 'MONEDA',
                    hidden: false,
                     filterable: true,
                    name: 'MONEDA',
                    id: 'arMONEDAPagosCXC',
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
                    id: 'arFECHAPagosCXC',
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
                    id: 'arSUBTOTALPagosCXC',
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
                    id: 'arTOTALPagosCXC',
                    sortable: true,
                    header: 'Total',
                    width: 100,
                    renderer: this.money

                },
                
                 {
                    dataIndex: 'ESTATUS_CXP',
                    name: 'arESTATUS_CXPPagos',
                    hidden: true,
                    id: 'arESTATUS_CXPPagosCXC',
                    sortable: true,
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

                    },
                    
                    
                    
                    
                    

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
                  
                    width: 100
                },
                
                                 {
                    dataIndex: 'NO_CASO_PAGOS',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NO_CASO_PAGOS',
                    id: 'NO_CASO_PAGOS_CXC',
                    sortable: true,
                    header: 'No Caso',
                    width: 50
                },
                
                {
                    dataIndex: 'IDCONCGASTO_PAGOS',
                    name: 'colIDCONCGASTO_PAGOS',
                    hidden: true,
                    id: 'colIDCONCGASTO_PAGOS_CXC',
                    sortable: true,
                    header: 'IDCONCGASTO_PAGOS',
                    width: 280
                },
                  {
                    dataIndex: 'NOMIDCONCGASTOPAGOS',
                    name: 'NOMIDCONCGASTOPAGOS',
                    hidden: false,
                    id: 'NOMIDCONCGASTOPAGOS_CXC',
                    sortable: true,
                    header: 'Prepoliza',
                    
                    
                    field: {
                        xtype: 'combobox',
                        id: 'cboConcGastoPagos_CXC',
                        name: 'cboConcGastoPagos_CXC',
                        itemId: 'cboConcGastoPagos_CXC',
                        displayField: 'GNOMBRE',
                        valueField: 'NO_CASO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeConcGasto,
                        allowBlank: false,
                        listeners: {
                            select: function(value) {
                                me.fireEvent("setConcGastoPagoCXC", value.valueModels[0].data.NO_CASO);
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
                    id: 'FLAG_POLIZA_PAGO_CXC',
                    
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
                    id: 'arTIPO_POLIZA_PAGO_CXC',
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
                    id: 'arFECHA_POL_PAGO_CXC',
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
                    id: 'arNUMERO_POL_PAGO_CXC',
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
                    id: 'txtPagoDetCXC',
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
                    id: 'txtPagoPesosDetCXC',
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
                    store: 'StorePagosCXC'
              
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


