Ext.define('AppCargaFE2.view.GridComplPagosDet', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcomplpagosdet',
    itemId: 'gridcomplpagosdet',
    xtype: 'gridcomplpagosdet',
    store: 'StoreComplPagosDet',
    poscol: null,   
    autoScroll: true,
    habilitaMenu: false,
    flex:1,
    //height:410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
      //  var storeConcGasto = Ext.create('AppCargaFE2.store.StoreConcGasto');  
    
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
//               
             
                
//               
//               
//            ]
           // },
                
            
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersArchComplDet", btn);
                            }
                  },
                   {
                    iconCls: 'xml-icon',
                    text: 'Ver XML',
                    itemId: 'btnVerXMLCompl',
                    id: 'btnVerXMLCompl',
                    name: 'btnVerXMLCompl',
                    handler: function(btn) {
                        me.fireEvent("verXMLCompl", btn);
                    }

                },
                {
                    iconCls: 'pdf-icon',
                    text: 'Ver PDF',
                    itemId: 'btnVerPDFCompl',
                    id: 'btnVerPDFCompl',
                    name: 'btnVerPDFCompl',
                    handler: function(btn) {
                        me.fireEvent("verPDFCompl", btn);
                    }

                }

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIAComplDet',
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
                    id: 'arNUMEROComplDet',
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
                    id: 'arFOLIOComplDet',
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
                    id: 'arFECHAComplDet',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                },
                {
                    dataIndex: 'TIPO_DE_COMPROBANTE',
                    name: 'TIPO_DE_COMPROBANTE',
                     filterable: true,
                    
                    hidden: false,
                    id: 'arTIPO_DE_COMPROBANTEComplDet',
                    sortable: true,
                    header: 'Tipo de Comprobante',
                    width: 100,
                              renderer: function(value) {
                        if(value==='I'){
                            return 'Ingreso';
                        }else if(value==='E'){
                            return 'Egreso';
                        }else if(value==='N'){
                            return 'Nomina';
                        }else{
                             return value;
                        }

                    }
                },
               
                        
                {
                    dataIndex: 'RFC_RECEPTOR',
                    name: 'RFC_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_RECEPTORComplDet',
                    sortable: true,
                    header: 'RFC Receptor',
                    width: 120
                    
                },
                {
                    dataIndex: 'NOMBRE_RECEPTOR',
                    name: 'NOMBRE_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_RECEPTORComplDet',
                    sortable: true,
                    header: 'Nombre Receptor',
                    width: 200
                },
                
                {
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_EMISORComplDet',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 120
                },
                
                {
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_EMISORComplDet',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 200
                },
                
               
                {
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    hidden: false,
                    id: 'arSUBTOTALComplDet',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Subtotal',
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
                    dataIndex: 'IVA',
                    name: 'IVA',
                    hidden: false,
                    id: 'arIVAComplDet',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Iva',
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
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    hidden: false,
                    id: 'arTOTALComplDet',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Total',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    width: 100
                }
              
              
                
                              
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreComplPagosDet'//,
//                    listeners: {
//                        scope: this,
//                        change: function(col, pageData, eOpts ) {   
//                            msgOut("en cambio de pagina");
//                            msgOut("pageDate:",pageData);
//                           // msgOut(pageData.currentPage);
//                          if(!Ext.isEmpty(pageData)){
//                          this.fireEvent("recargaPaginaComplDet",pageData.currentPage) ;
//                         }
//                        }
//                     }
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


