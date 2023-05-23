Ext.define('AppIntercos.view.GridCxpOtros', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcxpotros',
    itemId: 'gridcxpotros',
    xtype: 'gridcxpotros',
    store: 'StoreCxpOtros',
    poscol: null,
    autoScroll: true,
    habilitaMenu: false,
    height: 410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        var storeConCxp = Ext.create('AppIntercos.store.StoreConceptoCXP');
        var storeCto = Ext.create('AppIntercos.store.StoreCto');
        var storeCalendario = Ext.create('AppIntercos.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppIntercos.store.StorePeriodo'); 
        
        var verCXP = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"F", "nombre":"Fecha Factura"},
                    {"clave":"P", "nombre":"Fecha Pago"}
                 
                ]
            });
        

        storeConCxp.load();
        storeCto.load();


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
        var sellAction = Ext.create('Ext.Action', {
            iconCls: 'delete-icon',
            text: 'Quitar Todos',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("deSelectAll", widget, me.poscol);
            }
        });

         var tesoreria= Ext.create('Ext.Action', {
            iconCls: 'add-icon',
            text: 'Crear Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("validaPagosOtros", widget,me.poscol);
            }
        });
        
        var cancelaFactura= Ext.create('Ext.Action', {
            iconCls: 'cancel-icon',
            text: 'Cancelar Factura',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("cancelaFactura", widget,me.poscol);
            }
        });
        var agregarRelfactXOtras= Ext.create('Ext.Action', {
            iconCls: 'icon-relacion',
            text: 'Relacionar con Facturas',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionaFacturas", 'O');
            }
        });
        
        var quitarRelfactXOtras= Ext.create('Ext.Action', {
            iconCls: 'icon-quitarrelacion',
            text: 'Quitar Relacion',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("quitarRelacionaFacturas", 'O');
            }
        });
        
        var agregarFactFolio= Ext.create('Ext.Action', {
            iconCls: 'edit-icon',
            text: 'Agregar a Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("actualizaFolioOtros", widget,me.poscol);
            }
        });

        var reutilzarFolio= Ext.create('Ext.Action', {
            iconCls: 'dolar-icon',
            text: 'Copiar Folio',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("copiaFolio", widget,me.poscol);
            }
        });
        
        var gReembolso= Ext.create('Ext.Action', {
            //iconCls: 'add-icon',
            text: 'Generar Reembolso',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("generaReembolsoOtras", widget,me.poscol);
            }
        });
        var buyAction = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Seleccionar todos',
            disabled: false,
            handler: function(widget, view, rec, node, index) {

                me.fireEvent("selectAll", widget, me.poscol);
            }
        });



        var combo = new Ext.form.ComboBox({
            displayField: 'NOMBRE_CONCEPTO',
            valueField: 'CONCEPTO',
            id:'cxpConceptoCbo',
            name:'cxpConceptoCbo',
            typeAhead: true,
            minChars: 0,
            editable: false,
            store: storeConCxp,
            allowBlank: false,
            getListParent: function() {
                return this.el.up('.x-menu');
            },
            listeners: {
                scope: this,
                select: function(value) {

                    this.fireEvent("actIdConcepto", value, me.column);
                    storeConCxp.removeAll();
                    combo.clearValue();
                    storeConCxp.load();

                }
            },
            iconCls: 'no-icon'
        });

        var comboCC = new Ext.form.ComboBox({
            displayField: 'NOMBRE_CTO',
            valueField: 'CTO',
            typeAhead: true,
            minChars: 0,
            editable: false,
            store: storeCto,
            allowBlank: false,
            getListParent: function() {
                return this.el.up('.x-menu');
            },
            listeners: {
                scope: this,
                select: function(value) {

                    this.fireEvent("actIdCC", value, me.column3);
                    storeCto.removeAll();
                    comboCC.clearValue();
                    storeCto.load();

                }
            },
            iconCls: 'no-icon'
        });
        var dateMenu = Ext.create('Ext.menu.DatePicker', {
            name: 'dtFechaTabMst',
            format: 'd/m/Y',
            altFormats: 'd/m/Y',
            scope: this,
            handler: function(dp, date) {
   
                this.fireEvent("actFechaCxp", date, me.column2);

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
                agregarRelfactXOtras,
                '-',
                quitarRelfactXOtras,
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
                },
                

                {
                    xtype: 'splitbutton',
                    text: 'Ver...',
                    iconCls: 'see-icon',
                    menu: [

                    
                        {
                            iconCls: 'add-icon',
                            text: 'Agregar CXP',
                            itemId: 'addCXPOtros',
                            id: 'addCXPOtros',
                            name: 'addCXPOtros',
                            handler: function(btn) {
                                me.fireEvent("addCXP", btn);
                            }                            
                        },
                        
                        {
                            iconCls: 'pdf-icon',
                            text: 'Imprimir Documento',
                            itemId: 'imprimirRemAnt',
                            id: 'imprimirRemAnt',
                            name: 'imprimirRemAnt',
                            handler: function(btn) {
                                me.fireEvent("imprimirReembolso", btn);
                            }                            
                        }
                        
                        
                      
                    
                    ]
                },
//             
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar Registro',
                    itemId: 'btndelArchivoOtros',
                    id: 'cxpbtndelArchivoOtros',
                    name: 'btndelArchivoOtros',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deleteArchivoOtros", btn);
                    }
                },

                '-',
                {
                    iconCls: 'reload-icon',
                    text: '',
                    itemId: 'btnRecargaCxpOtros',
                    id: 'btnRecargaCxpOtros',
                    tooltip :'Recargar Datos',
                    name: 'btnRecargaCxpOtros',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargaCXPOtros", btn);
                    }

                },
                '-',
                {
                    iconCls: 'save-icon',
                    text: 'Guardar Cambios',
                    itemId: 'btnGuardarArchivosOtros',
                    id: 'btnGuardarArchivosOtros',
                    name: 'btnGuardarArchivosOtros',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardarCXPOtros", btn);
                    }

                }



            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_OTROS',
                    name: 'COMPANIA_OTROS',
                    id: 'cxpCOMPANIA_OTROS',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_OTROS',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_OTROS',
                    id: 'cxpNUMERO_OTROS',
                    sortable: true,
                    header: 'Numero',
                    width: 40,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                       var numerorel = record.data.NUMERO_RELACION_OTRAS;
                        
                      
                            
                       if (!Ext.isEmpty(numerorel)) { 
                  
                        
                          metaData.tdAttr = 'style="background-color:#04B4AE;color:black;"';
                          return value;
                                 
                        }else{
                            return value;
        
                        }
                        

                      }
                },
                {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'Validacion',
                    itemId:'bienColumnOtros',
                    name:'bienColumnOtros',
                    id:'bienColumnOtros',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (!Ext.isEmpty(rec.get('NUMERO_RELACION_OTRAS'))) {
                            return 'icon-relacion';
                        } else {
                            return 'factura-mal';
                        }

                    },                    
                    getTip: function(v, meta, rec) {
                        
                        if (!Ext.isEmpty(rec.get('NUMERO_RELACION_OTRAS'))) {
                            return 'Existen Facturas Relacionada';
                        } else {
                            return 'Sin relacion';
                        }
                        
                 
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
             
                {
                    dataIndex: 'NOMBRE_T_GASTO_OTROS',
                    hidden: false,
                    filterable: true,
                    name: 'NOMBRE_T_GASTO_OTROS',
                    id: 'cxpNOMBRE_T_GASTO_OTROS',
                    sortable: true,
                    header: 'Tipo Gasto',
                    width: 100,
                    renderer: function(value) {
                     
                            
                                return '<span style="color:blue">'+value+'</span>';
                    }        
                },
                
    
                {
                    dataIndex: 'FECHA_OTROS',
                    name: 'FECHA_OTROS',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_OTROS',
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
                    dataIndex: 'RFC_EMISOR_OTROS',
                    name: 'RFC_EMISOR_OTROS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpRFC_EMISOR_OTROS',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
               
                {
                    dataIndex: 'NOMBRE_EMISOR_OTROS',
                    name: 'NOMBRE_EMISOR_OTROS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpNOMBRE_EMISOR_OTROS',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                    
                    
                    
                    
                },
                {
                    dataIndex: 'DESCRIPCION_OTROS',
                    name: 'DESCRIPCION_OTROS',
                    filterable: true,
                    hidden: true,
                    id: 'cxpDESCRIPCION_OTROS',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                
                {
                    dataIndex: 'SUBTOTAL_OTROS',
                    name: 'SUBTOTAL_OTROS',
                    hidden: false,
                    id: 'cxpSUBTOTAL_OTROS',
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
                    dataIndex: 'TOTAL_OTROS',
                    name: 'TOTAL_OTROS',
                    hidden: false,
                    id: 'cxpTOTAL_OTROS',
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
                    dataIndex: 'CONCEPTO_OTROS',
                    name: 'CONCEPTO_OTROS',
                    hidden: false,
                    id: 'cxpCONCEPTO_OTROS',
                    sortable: true,
                    header: 'Concepto',
                    field: {
                        xtype: 'combobox',
                        id: 'cboCxpConceptoOtros',
                        name: 'cboCxpConceptoOtros',
                        itemId: 'cboCxpConceptoOtros',
                        displayField: 'NOMBRE_CONCEPTO',
                        valueField: 'CONCEPTO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeConCxp,
                        allowBlank: false//,


                    },
                    renderer: function(value) {

                        var index = storeConCxp.find('CONCEPTO', value);
                        if (index > -1) {
                            var record = storeConCxp.getAt(index);
                           msgOut("-----------------------------------------"); 
                            msgOut("index"+index);
                            msgOut("record"+record);
                            msgOut("nombre concepto"+record.get('NOMBRE_CONCEPTO'));
                            msgOut("concepto"+value);
                           msgOut("-----------------------------------------"); 
                            
                            return record.get('NOMBRE_CONCEPTO');
                        }

                    },
                    width: 200
                },
                {
                    dataIndex: 'NOMCC_OTROS',
                    name: 'NOMCC_OTROS',
                    hidden: false,
                    id: 'cxpCC_OTROS',
                    sortable: true,
                    header: 'Centro Costo',
                    field: {
                        xtype: 'combobox',
                        id: 'cboCxpCCOtros',
                        name: 'cboCxpCCOtros',
                        itemId: 'cboCxpCCOtros',
                        displayField: 'NOMBRE_CTO',
                        valueField: 'CTO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeCto,
                        allowBlank: false
                    },
                    renderer: function(value) {

                        var index = storeCto.find('CTO', value);
                        if (index > -1) {
                            var record = storeCto.getAt(index);
                            return record.get('NOMBRE_CTO');
                        }

                    },
                    width: 250
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CXP_FECHA_OTROS',
                    name: 'CXP_FECHA_OTROS',
                    id: 'cxpCXP_FECHA_OTROS',
                    itemId: 'cxpCXP_FECHA_OTROS',
                    sortable: true,
                    header: 'Fecha Venc',
                    format: 'd/m/Y',
                    filterable: true,
                    width: 100,
                    filter: {
                        type: 'date'
                    },
                    //flex: 1,
                    renderer: // Ext.util.Format.dateRenderer('d/m/Y'),
                            function(value) {
                                if (Ext.isDate(value)) {
                                    return   Ext.Date.format(value, 'd/m/Y');
                                } else {
                                    return  value;
                                }

                            },
                    editor: {
                        xtype: 'datefield',
                        format: 'd/m/Y'
                    }


                },
                {
                    dataIndex: 'ESTATUS_CXP_OTROS',
                    name: 'ESTATUS_CXP_OTROS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpEstatusOtros',
                    sortable: true,
                    header: 'Estatus',
                    width: 100,
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
                            
                         } else if (value === 'FG') {
                            return '<span style="color:#380B61;font-weight: bold">Folio Generado</span>';
                         

                        } else {
                            return value;
                        }

                    }

                },
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_CAP_OTROS',
                    name: 'FECHA_CAP_OTROS',
                    id: 'cxpFECHA_CAP_OTROS',
                    itemId: 'cxpFECHA_CAP_OTROS',
                    sortable: true,
                    header: 'Fecha Recepcion',
                    format: 'd/m/Y',
                    filterable: true,
                    width: 100,
                    filter: {
                        type: 'date'
                    }


                }



            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreCxpOtros',
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


