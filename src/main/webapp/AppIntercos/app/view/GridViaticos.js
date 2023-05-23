Ext.define('AppIntercos.view.GridViaticos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridviaticos',
    itemId: 'gridviaticos',
    id: 'gridviaticos',
    xtype: 'gridviaticos',
    store: 'StoreViaticos',
    poscol: null,
    autoScroll: true,
    habilitaMenu: false,
    height: 410,
    column: null,
    column2: null,
    initComponent: function() {
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
            clicksToEdit: 1,
             listeners: {
//              'beforeedit': function(i,e) {
//                var me = this;
//                //var allowed = !!me.isEditAllowed;
//                //if (!me.isEditAllowed)
//                  //  msgOut("edit"+e.record.get('TIPO_CXP'));
//                var tipoCxp = e.record.get('TIPO_CXP');
//                
//                if (tipoCxp === 'C'){
//                    
//                     return true;
//                    
//                }
//                 if (tipoCxp === 'O'){
//                    
//                     return false;
//                    
//                }
//                
//
//              }

            }
        });
      

         var tesoreria= Ext.create('Ext.Action', {
            iconCls: 'add-icon',
            text: 'Crear Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("validaPagosViatico", widget,me.poscol);
            }
        });
        
        var gReembolso= Ext.create('Ext.Action', {
            //iconCls: 'add-icon',
            text: 'Generar Reembolso',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("generaReembolso", widget,me.poscol);
            }
        });
        
      
        var agregarFactFolio= Ext.create('Ext.Action', {
            iconCls: 'edit-icon',
            text: 'Agregar a Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("actualizaFolioViaticos", widget,me.poscol);
            }
        });

     

     

        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [

//                {
//                    text: 'Concepto',
//                    menu: {
//                        showSeparator: false,
//                        items: [
//                            combo
//                        ]
//                    }
//                },
//                {
//                    text: 'Centro de Costos',
//                    menu: {
//                        showSeparator: false,
//                        items: [
//                            comboCC
//                        ]
//                    }
//                },
//                {
//                    text: 'Fecha Venc',                   
//                    iconCls: 'fecha-icon',
//                    menu: dateMenu 
//                },
//                 , '-',
         
                tesoreria,
                '-',
                agregarFactFolio,
                '-',
                gReembolso
         
               // '-',
               // cancelaFactura
          
            ]
        });
        Ext.apply(me, {
            features: [
                filters
            ],
            plugins: [
                cellEditing2
            ],
            multiSelect: true,
            tbar: [
//                 {
//                    xtype: 'combobox',
//                    id: 'cboCalendarioFeCxpOtros',
//                    fieldLabel: 'Calendario',
//                    name: 'cboCalendarioFeCxpOtros',
//                    itemId: 'cboCalendarioFeCxpOtros',
//                    displayField: 'CALENDARIO',
//                    valueField: 'CALENDARIO',              
//                    typeAhead: true,
//                    minChars: 0,
//                   // size:2,
//                   width:150,
//                   labelWidth:60,
//                    editable:false,
//                    store: storeCalendario,
//                    allowBlank: false,
//                     listeners: {
//                        scope: this,
//                        'select': function(valor) {
//                            
//                             if (Ext.isEmpty(valor.value))
//                                return;
//                            Ext.getCmp('cboPeriodoFeCxpOtros').clearValue();
//                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
//                            storePeriodo.removeAll();
//                            storePeriodo.proxy.extraParams.calendario = valor.value;
//                            storePeriodo.load({
//                                callback: function(val, val2) {
//
//                                }
//                            });
//                          
//                        }
//                     }
//                },
//                 {
//                    xtype: 'combobox',
//                    id: 'cboPeriodoFeCxpOtros',
//                    fieldLabel: 'Periodo',
//                    name: 'cboPeriodoFeCxpOtros',
//                    itemId: 'cboPeriodoFeCxpOtros',
//                    displayField: 'PERIODO',
//                    valueField: 'PERIODO',              
//                    typeAhead: true,
//                    minChars: 0,
//                    labelWidth:50,
//                    width:115,
//                    editable:false,
//                    store: storePeriodo,
//                    allowBlank: false,
//                    readOnly:false,
//                     listeners: {
//                        scope: this,
//                        'select': function(valor) {
//                           
//                           me.fireEvent("buscaPorFechaOtros",  Ext.getCmp('cboCalendarioFeCxpOtros').getValue(),Ext.getCmp('cboPeriodoFeCxpOtros').getValue());
//                            
//                        },
//                          beforequery: function(queryEvent, eOpts) {
//                              
//                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxpOtros').getValue();
//                
//                    }
//                     }
//                },
//                
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: '',
                    tooltip :'Limpiar Filtros',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersOtro", btn);
                    }
                }
                



            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_VIATIC',
                    name: 'COMPANIA_VIATIC',
                    id: 'cxpCOMPANIA_VIATIC',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_VIATIC',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_VIATIC',
                    id: 'cxpNUMERO_VIATIC',
                    sortable: true,
                    header: 'Numero',
                    width: 40,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                       var numerorel = record.data.REEMBOLSO;
                        
                      
                            
                       if (!Ext.isEmpty(numerorel)) { 
                  
                        
                          metaData.tdAttr = 'style="background-color:#04B4AE;color:black;"';
                          return value;
                                 
                        }else{
                            return value;
        
                        }
                        

                      }
                },
//                {
//                    menuDisabled: true,
//                    sortable: false,
//                    xtype:'actioncolumn',
//                    text: 'Validacion',
//                    itemId:'bienColumnOtros',
//                    name:'bienColumnOtros',
//                    id:'bienColumnOtros',
//                    width: 50,
//                    tdCls: 'x-change-cell',
//                    items: [
//
//                    {
//                    getClass: function(v, meta, rec) {          
//                        if (!Ext.isEmpty(rec.get('NUMERO_RELACION_OTRAS'))) {
//                            return 'icon-relacion';
//                        } else {
//                            return 'factura-mal';
//                        }
//
//                    },                    
//                    getTip: function(v, meta, rec) {
//                        
//                        if (!Ext.isEmpty(rec.get('NUMERO_RELACION_OTRAS'))) {
//                            return 'Existen Facturas Relacionada';
//                        } else {
//                            return 'Sin relacion';
//                        }
//                        
//                 
//                    },
//                    handler: function(grid, rowIndex, colIndex) {
//                        var rec =  grid.getStore().getAt(rowIndex);
//                        
//                    }
//                }]
//             } ,
             
                {
                    dataIndex: 'NOMBRE_T_GASTO_VIATIC',
                    hidden: false,
                    filterable: true,
                    name: 'NOMBRE_T_GASTO_VIATIC',
                    id: 'cxpNOMBRE_T_GASTO_VIATIC',
                    sortable: true,
                    header: 'Tipo Gasto',
                    width: 100,
                    renderer: function(value) {
                     
                            
                                return '<span style="color:blue">'+value+'</span>';
                    }        
                },
                
    
                {
                    dataIndex: 'FECHA_VIATIC',
                    name: 'FECHA_VIATIC',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_VIATIC',
                    sortable: true,
                    header: 'Fecha',
                    width: 100,
                    format: 'd/m/Y',                    
                    renderer:function(value) {
                                if (Ext.isDate(value)) {
                                    return   Ext.Date.format(value, 'd/m/Y');
                                } else {
                                    return  value;
                                }

                            }//,
//                    editor: {
//                        xtype: 'datefield',
//                        format: 'd/m/Y'
//                    }



                },
               
                {
                    dataIndex: 'RFC_EMISOR_VIATIC',
                    name: 'RFC_EMISOR_VIATIC',
                    filterable: true,
                    hidden: false,
                    id: 'cxpRFC_EMISOR_VIATIC',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
               
                {
                    dataIndex: 'NOMBRE_EMISOR_VIATIC',
                    name: 'NOMBRE_EMISOR_VIATIC',
                    filterable: true,
                    hidden: false,
                    id: 'cxpNOMBRE_EMISOR_VIATIC',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                    
                    
                    
                    
                },
                {
                    dataIndex: 'DESCRIPCION_VIATIC',
                    name: 'DESCRIPCION_VIATIC',
                    filterable: true,
                    hidden: true,
                    id: 'cxpDESCRIPCION_VIATIC',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                
                {
                    dataIndex: 'SUBTOTAL_VIATIC',
                    name: 'SUBTOTAL_VIATIC',
                    hidden: false,
                    id: 'cxpSUBTOTAL_VIATIC',
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
                    dataIndex: 'TOTAL_VIATIC',
                    name: 'TOTAL_VIATIC',
                    hidden: false,
                    id: 'cxpTOTAL_VIATIC',
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
                },
        
                {
                    dataIndex: 'NOMCC_VIATIC',
                    name: 'NOMCC_VIATIC',
                    hidden: false,
                    id: 'cxpNOMCC_VIATIC',
                    sortable: true,
                    header: 'Centro Costo',
              
                    width: 250
                },
               
                {
                    dataIndex: 'ESTATUS_CXP_VIATIC',
                    name: 'ESTATUS_CXP_VIATIC',
                    filterable: true,
                    hidden: false,
                    id: 'cxpESTATUS_CXP_VIATIC',
                    sortable: true,
                    header: 'Estatus',
                    width: 100,
                    renderer: function(value) {
                        if (value === 'PAG') {
                            return '<span style="color:green;font-weight: bold">Pago Total</span>';
                        } else if (value === 'AU') {
                            return '<span style="color:gold;font-weight: bold">Autorizado</span>';
                        } else if (value === 'CA') {
                            return '<span style="color:red;font-weight: bold">Cancelado</span>';
                        } else if (value === 'C') {
                            return '<span style="color:black;font-weight: bold">Capturado</span>';
                            
                        } else if (value === 'CAN') {
                            return '<span style="color:brown;font-weight: bold">Cancelada</span>';
                            
                        } else if (value === 'FG') {
                            return '<span style="color:blue;font-weight: bold">Folio Generado</span>';
                            
                         } else if (value === 'TES') {
                            return '<span style="color:blue;font-weight: bold">Enviado a Tesoreria</span>';
                        } else if (value === 'IMP') {
                            return '<span style="color:gold;font-weight: bold">Impreso</span>';
                        } else if (value === 'PAG') {
                            return '<span style="color:green;font-weight: bold">Pagado</span>';
                
                

                        } else {
                            return value;
                        }

                    }

                },
                {
                    dataIndex: 'NOM_BANCO_VIATIC',
                    name: 'NOM_BANCO_VIATIC',
                    hidden: false,
                    id: 'cxpNOM_BANCO_VIATIC',
                    sortable: true,
                    header: 'Banco',
              
                    width: 250,
                    renderer: function(value) {
                        if (value === 'N/A') {
                            return '<span style="color:red;font-weight: bold">No existe</span>';
                        

                        } else {
                            return value;
                        }

                    }
                },
                {
                    dataIndex: 'CUENTA_CLABE_VIATIC',
                    name: 'CUENTA_CLABE_VIATIC',
                    hidden: false,
                    id: 'cxpCUENTA_CLABE_VIATIC',
                    sortable: true,
                    header: 'Cuenta Clabe',
              
                    width: 250,
                    renderer: function(value) {
                        if (value === 'N/A') {
                            return '<span style="color:red;font-weight: bold">No existe</span>';
                        

                        } else {
                            return value;
                        }

                    }
                }
             



            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreViaticos',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                          
                         if(!Ext.isEmpty(pageData)){
                          this.fireEvent("recargaPagina",pageData.currentPage) ;
                         }
                        }
                     }
                })
            ],
            viewConfig: {
                getRowClass: function(record) {
                    var c = record.get('ESTATUSV');
                    msgOut("cell:"+c);
                    if (c === '2') {
                          msgOut("ENTRO"+c);
                        return 'notValidSat';
                    } 
                    if (c === '1') {
                        return 'price-rise';
                    }
                    if(c === '0'){
                         return 'price-fall';
                    }
                    if(c === '3'){
                        
                        return 'notFactSat';
                        
                    }
                },
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

                        me.column = 'CONCEPTO';
                        me.column3 = 'NOMCC';
                        me.column2 = 'CXP_FECHA';
                        //}


                        e.preventDefault();
//                           // alert(dataIndex);
                    }
                }
            }

        });


        this.callParent(arguments);
    }



});


