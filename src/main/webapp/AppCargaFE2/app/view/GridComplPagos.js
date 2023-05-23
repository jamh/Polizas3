Ext.define('AppCargaFE2.view.GridComplPagos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcomplpagos',
    itemId: 'gridcomplpagos',
    xtype: 'gridcomplpagos',
    store: 'StoreComplPagos',
    poscol: null,   
    autoScroll: true,
    habilitaMenu: false,
    height:410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
      //  var storeConcGasto = Ext.create('AppCargaFE2.store.StoreConcGasto');  
        var storeCalendario = Ext.create('AppCargaFE2.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppCargaFE2.store.StorePeriodo');
         var storePeriodoFin = Ext.create('AppCargaFE2.store.StorePeriodo');
        
        
    //    storeConcGasto.load();
                
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
//        var sellAction = Ext.create('Ext.Action', {
//            iconCls: 'delete-icon',
//            text: 'Quitar Todos',
//            disabled: false,
//            handler: function(widget, event) {
//                me.fireEvent("deSelectAll", widget, me.poscol);
//            }
//        });
//
//        var buyAction = Ext.create('Ext.Action', {
//            iconCls: 'checkall-icon',
//            text: 'Seleccionar todos',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//
//                me.fireEvent("selectAll", widget, me.poscol);
//            }
//        });
//        var relacionPol = Ext.create('Ext.Action', {
//            iconCls: 'icon-relacion',
//            text: 'Polizas Relacionadas',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("relacionaPolExistenteCXC", widget,me.poscol);
//            }
//        });
//         var validaSat = Ext.create('Ext.Action', {
//            iconCls: 'icon-sat',
//            text: 'Valida SAT',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("validaSat", widget,me.poscol);
//            }
//        });
//        var relacionarPoliza = Ext.create('Ext.Action', {
//            iconCls: 'poliza-icon',
//            text: 'Relacionar Poliza',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("relacionarPoliza", widget,me.poscol);
//            }
//        });
//        
//        var quitarRelacionPoliza = Ext.create('Ext.Action', {
//            iconCls: 'poliza-icon',
//            text: 'Quitar Relacion Poliza',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                        
//                me.fireEvent("quitarRelacionPoliza", widget,me.poscol);
//            }
//        });
//
//        var combo = new Ext.form.ComboBox({
//            displayField: 'GNOMBRE',
//            valueField: 'NO_CASO',
//            typeAhead: true,
//            minChars: 0,
//            editable: false,
//            store: storeConcGasto,
//            allowBlank: false,
//            getListParent: function() {
//                return this.el.up('.x-menu');
//            },
//            
//             listeners: {
//                        scope: this,
//                        select: function(value) {
//                                                        
//                            this.fireEvent("actIdConGasto", value,me.column);
//                             storeConcGasto.removeAll();
//                            combo.clearValue();
//                            storeConcGasto.load();
//                            
//                        }
//            },
//            iconCls: 'no-icon'
//        });
//         var dateMenu = Ext.create('Ext.menu.DatePicker', {
//             name: 'dtFechaTabMst',
//            format: 'd/m/Y',
//            altFormats: 'd/m/Y',
//                        scope: this,
//                         handler: function(dp, date){
//                             this.fireEvent("actFechaPol", date,me.column2);                           
//                        }
//           
//         });

      

//        var contextMenu = Ext.create('Ext.menu.Menu', {
//            items: [
//                relacionPol
//                ,'-',
//                buyAction,
//                sellAction,
//                , '-',
//                relacionarPoliza,
//                , '-',
//                quitarRelacionPoliza,
//                , '-',
//                validaSat,
//                , '-',
//                 {
//                    text: 'Prepoliza',                   
//                    iconCls: 'dolar-icon',
//                    menu: {
//                        showSeparator: false,
//                        items: [
//                           combo
//                        ]
//                    }
//                },
//                 {
//                    text: 'Fecha Poliza',                   
//                   iconCls: 'fecha-icon',
//                    menu:dateMenu 
//                       
//                }              
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
                
//                
//                 {
//                    xtype: 'splitbutton',
//                    text: 'PREPOLIZA...',
//                  //  iconCls: 'see-icon',
//                    menu: [
////               
//                {
//                        iconCls: 'converter-icon',
//                            text: 'PREPOLIZA...',
//                            handler: function(btn) {                                
//                                me.fireEvent("verConvertidorCompl", btn);
//                            }   
//                },
                
//               
//               
//            ]
           // },
                
                
                   {
                    xtype: 'combobox',
                    id: 'cboCalendarioFeCompl',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCompl',
                    itemId: 'cboCalendarioFeCompl',
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
                            Ext.getCmp('cboPeriodoFeCompl').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                            
                             Ext.getCmp('cboPeriodoFeFinCompl').clearValue();
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
                    id: 'cboPeriodoFeCompl',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCompl',
                    itemId: 'cboPeriodoFeCompl',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    labelWidth:50,
                    width:105,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                         me.fireEvent("buscaPorFechaCompl",  Ext.getCmp('cboCalendarioFeCompl').getValue(),Ext.getCmp('cboPeriodoFeCompl').getValue(),Ext.getCmp('cboPeriodoFeFinCompl').getValue());
                           
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCompl').getValue();
                
                    }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboPeriodoFeFinCompl',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoFeFinCompl',
                    itemId: 'cboPeriodoFeFinCompl',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    labelWidth:50,
                    width:105,
                    editable:false,
                    store: storePeriodoFin,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           me.fireEvent("buscaPorFechaCompl",  Ext.getCmp('cboCalendarioFeCompl').getValue(),Ext.getCmp('cboPeriodoFeCompl').getValue(),Ext.getCmp('cboPeriodoFeFinCompl').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCompl').getValue();
                
                    }
                     }
                },
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersArchCompl", btn);
                            }
                  },
//                 {
//                     iconCls: 'download-sat',
//                    text: 'Descarga Sat',
//                    itemId: 'btnDescargaSat',
//                    id: 'btnDescargaSat',
//                    name: 'btnDescargaSat',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("descargaSat", btn);
//                    }
//
//                },
                
                
                
                {
                    xtype: 'splitbutton',
                    text: 'Ver...',
                    iconCls: 'see-icon',
                    menu: [
               
                 {
                    iconCls: 'xml-icon',
                    text: 'Ver XML',
                    itemId: 'btnVerXMLPagCompl',
                    id: 'btnVerXMLPagCompl',
                    name: 'btnVerXMLPagCompl',
                    handler: function(btn) {
                        me.fireEvent("verXMLPagCompl", btn);
                    }

                }
                
//                {
//                     iconCls: 'csv-icon',
//                    text: 'Descarga',
//                    itemId: 'btnDescargaCXCpag',
//                    id: 'btnDescargaCXCpag',
//                    name: 'btnDescargaCXCpag',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("decargaCXCpag", btn);
//                    }
//
//                },
//                {
//                     iconCls: 'csv-icon',
//                    text: 'Descarga Todo',
//                    itemId: 'btnDescargaCXC',
//                    id: 'btnDescargaCXC',
//                    name: 'btnDescargaCXC',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("decargaCXC", btn);
//                    }
//
//                }
            ]
            }

           

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIACompl',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO',
                    hidden: false,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO',
                    id: 'arNUMEROCompl',
                    sortable: true,
                    header: 'Numero',
                    width: 40
                    
                 
                  
                },
                {
                    dataIndex: 'FOLIO',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO',
                    id: 'arFOLIOCompl',
                    sortable: true,
                    header: 'Folio',
                    width: 50
                    
                },
                 
                {
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'arFECHACompl',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                },
               
                        
                {
                    dataIndex: 'RFC_RECEPTOR',
                    name: 'RFC_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_RECEPTORCompl',
                    sortable: true,
                    header: 'RFC Receptor',
                    width: 100
                    
                },
                {
                    dataIndex: 'NOMBRE_RECEPTOR',
                    name: 'NOMBRE_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_RECEPTORCompl',
                    sortable: true,
                    header: 'Nombre Receptor',
                    width: 180
                },
                
                {
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_EMISORCompl',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
                
                {
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_EMISORCompl',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                },
                {
                    dataIndex: 'DESCRIPCION',
                    name: 'colDescripcion',
                     filterable: true,
                    hidden: true,
                    id: 'colDescripcionCompl',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                
                {
                    dataIndex: 'FECHA_PAGO',
                    name: 'FECHA_PAGO',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'arFECHA_PAGOCompl',
                    sortable: true,
                    header: 'Fecha Pago',
                    width: 100
                },
               
                {
                    dataIndex: 'MONTO',
                    name: 'MONTO',
                    hidden: false,
                    id: 'arMONTOCompl',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Monto Pagado',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    width: 100
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'FLAG_POLIZA',
                    id: 'FLAG_POLIZACompl',
                    
                      listeners: {
                       // scope: this,
                       // beforecheckchange: function(col, index, checked) {                         
                       //  this.fireEvent("beforecheckPoliza", index, checked);
                       // }
                     }
                  
                    
                },
                {
                    dataIndex: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                     filterable: true,
                    
                    hidden: false,
                    id: 'arTIPO_POLIZACompl',
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
                    dataIndex: 'FECHA_POL',
                    name: 'FECHA_POL',
                    id: 'arFECHA_POLCompl',
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
                    dataIndex: 'NUMERO_POL',
                    name: 'NUMERO_POL',
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    hidden: false,
                    id: 'arNUMERO_POLCompl',
                    sortable: true,
                    header: 'Numero Poliza',
                    width: 100
                }
                
                              
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreComplPagos',
                    listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            msgOut("en cambio de pagina");
                            msgOut("pageDate:",pageData);
                           // msgOut(pageData.currentPage);
                          if(!Ext.isEmpty(pageData)){
                          this.fireEvent("recargaPaginaCompl",pageData.currentPage) ;
                         }
                        }
                     }
                })
            ],
            viewConfig: {
                  getRowClass: function(record) {
                    var c = record.get('ESTATUSV');
              //      msgOut("cell:"+c);
                    if (c === '2') {
                         // msgOut("ENTRO"+c);
                        return 'notValidSat';
                    } 
                    if (c === '1') {
                        return 'price-rise';
                    }
                    if(c === '0'){
                         return 'price-fall';
                    }
                },
                
                stripeRows: true,
                listeners: {
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
//                              me.column = 'NOMIDCONCGASTO';
//                              me.column2 = 'FECHA_POL';
//                                           
//                        e.preventDefault();
//
//                    }
                }
            }

        });


        this.callParent(arguments);
    }



});


