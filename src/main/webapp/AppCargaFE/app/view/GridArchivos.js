Ext.define('AppCargaFE.view.GridArchivos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridarchivos',
    itemId: 'gridarchivos',
    xtype: 'gridarchivos',
    store: 'StoreArchivos',
    poscol: null,   
    autoScroll: true,
    habilitaMenu: false,
    height:410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        var storeConcGasto = Ext.create('AppCargaFE.store.StoreConcGasto');  
        var storeCalendario = Ext.create('AppCargaFE.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppCargaFE.store.StorePeriodo'); 
        
        
        storeConcGasto.load();
                
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
        var sellAction = Ext.create('Ext.Action', {
            iconCls: 'delete-icon',
            text: 'Quitar Todos',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("deSelectAll", widget, me.poscol);
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
         var validaSat = Ext.create('Ext.Action', {
            iconCls: 'icon-sat',
            text: 'Valida SAT',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("validaSat", widget,me.poscol);
            }
        });
        var relacionPol = Ext.create('Ext.Action', {
            iconCls: 'icon-relacion',
            text: 'Polizas Relacionadas',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionaPolExistente", widget,me.poscol);
            }
        });
        
        var relacionarPoliza = Ext.create('Ext.Action', {
            iconCls: 'poliza-icon',
            text: 'Relacionar Poliza',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionarPoliza", widget,me.poscol);
            }
        });
        
        var quitarRelacionPoliza = Ext.create('Ext.Action', {
            iconCls: 'poliza-icon',
            text: 'Quitar Relacion Poliza',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                        
                me.fireEvent("quitarRelacionPoliza", widget,me.poscol);
            }
        });

        var combo = new Ext.form.ComboBox({
            displayField: 'GNOMBRE',
            valueField: 'NO_CASO',
            typeAhead: true,
            minChars: 0,
            editable: false,
            store: storeConcGasto,
            allowBlank: false,
            getListParent: function() {
                return this.el.up('.x-menu');
            },
            
             listeners: {
                        scope: this,
                        select: function(value) {
                                                        
                            this.fireEvent("actIdConGasto", value,me.column);
                             storeConcGasto.removeAll();
                            combo.clearValue();
                            storeConcGasto.load();
                            
                        }
            },
            iconCls: 'no-icon'
        });
         var dateMenu = Ext.create('Ext.menu.DatePicker', {
             name: 'dtFechaTabMst',
            format: 'd/m/Y',
            altFormats: 'd/m/Y',
                        scope: this,
                         handler: function(dp, date){
                             this.fireEvent("actFechaPol", date,me.column2);                           
                        }
           
         });

        function onItemClick(item){
            
            storeConcGasto.removeAll();
            combo.clearValue();
            storeConcGasto.load();
          
        
        }

        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                relacionPol,
                ,'-',
                buyAction,
                sellAction,
                , '-',
                relacionarPoliza,
                , '-',
                quitarRelacionPoliza,
                , '-',
                validaSat,
                , '-',
                 {
                    text: 'Prepoliza',                   
                    iconCls: 'dolar-icon',
                    menu: {
                        showSeparator: false,
                        items: [
                           combo
                        ]
                    }
                },
                 {
                    text: 'Fecha Poliza',                   
                   iconCls: 'fecha-icon',
                    menu:dateMenu 
                       
                }              
                
            ]
        });
        Ext.apply(me, {
             features: [
               filters
            ],
            plugins: [
                cellEditing2
            ],
              multiColumnSort: true,
            
            
            
       
             multiSelect:true,
            tbar: [
                {
                        iconCls: 'converter-icon',
                            text: 'PREPOLIZA...',
                            handler: function(btn) {                                
                                me.fireEvent("verConvertidor", btn);
                            }   
                },
                   {
                    xtype: 'combobox',
                    id: 'cboCalendarioFe',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFe',
                    itemId: 'cboCalendarioFe',
                    displayField: 'CALENDARIO',
                    valueField: 'CALENDARIO',              
                    typeAhead: true,
                    minChars: 0,
                   // size:2,
                   width:150,
                   labelWidth:60,
                    editable:false,
                    store: storeCalendario,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            
                             if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboPeriodoFe').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                          
                        }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboPeriodoFe',
                    fieldLabel: 'Periodo',
                    name: 'cboPeriodoFe',
                    itemId: 'cboPeriodoFe',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    labelWidth:50,
                    width:115,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFe').getValue(),Ext.getCmp('cboPeriodoFe').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFe').getValue();
                
                    }
                     }
                },
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersArch", btn);
                            }
                  },
                 {
                     iconCls: 'download-sat',
                    text: 'Descarga Sat',
                    itemId: 'btnDescargaSat',
                    id: 'btnDescargaSat',
                    name: 'btnDescargaSat',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("descargaSat", btn);
                    }

                },
                {
                    iconCls: 'reload-icon',
                    text: 'Recargar Conceptos',
                    itemId: 'btnRecargarStore',
                    id: 'btnRecargarStore',
                    name: 'btnRecargarStore',
                    scope: this,
                    handler: function(btn) {
                       storeConcGasto.removeAll();                           
                            storeConcGasto.load({
                                callback: function(val, val2) {

                                }
                            });                        
                    }
                },
                {
                    xtype: 'splitbutton',
                    text: 'Ver...',
                    iconCls: 'see-icon',
                    menu: [
               
                {
                    iconCls: 'poliza-icon',
                    text: 'Ver Poliza',
                    itemId: 'btnVerPoliza',
                    id: 'btnVerPoliza',
                    name: 'btnVerPoliza',
                    scope: this,
                    handler: function(btn) {
                        me.fireEvent("verPoliza", btn);
                    }

                },
                {
                    iconCls: 'xml-icon',
                    text: 'Ver XML',
                    itemId: 'btnVerXML',
                    id: 'btnVerXML',
                    name: 'btnVerXML',
                    handler: function(btn) {
                        me.fireEvent("verXML", btn);
                    }

                },
                {
                    iconCls: 'pdf-icon',
                    text: 'Ver PDF',
                    itemId: 'btnVerPDF',
                    id: 'btnVerPDF',
                    name: 'btnVerPDF',
                    handler: function(btn) {
                        me.fireEvent("verPDF", btn);
                    }

                }]
            },
            '-',
             {
                    xtype: 'splitbutton',
                    text: 'Archivo...',
                    iconCls: 'directory-icon',
                    menu: [
               
                {
                    iconCls: 'add-icon',
                    text: 'Agregar Archivo',
                    itemId: 'btnAddArchivo',
                    id: 'btnAddArchivo',
                    name: 'btnAddArchivo',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("addArchivo", btn);
                    }
                },
             
                        {
                    iconCls: 'delete-icon',
                    text: 'Borrar XML',
                    itemId: 'btndelArchivo',
                    id: 'btndelArchivo',
                    name: 'btndelArchivo',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deleteArchivo", btn);
                    }
                }
                ]
            },
              
                 
                '-',
                
                      {
                    xtype: 'splitbutton',
                    text: 'Generar Polizas...',
                    iconCls: 'poliza-icon',
                    menu: [
               
                             {
                                iconCls: 'save-icon',
                                text: 'Poliza por Factura',
                                itemId: 'btnGuardarArchivos',
                                id: 'btnGuardarArchivos',
                                name: 'btnGuardarArchivos',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivos", btn);
                                }

                            },
                            {

                                iconCls: 'save-icon',
                                text: 'Poliza por Múltiples Facturas',
                                itemId: 'btnGuardarArchivosMult',
                                id: 'btnGuardarArchivosMult',
                                name: 'btnGuardarArchivosMult',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivosMult", btn);
                                }

                            }
                ]
            },
                
//                {
//                    iconCls: 'save-icon',
//                    text: 'Guardar Cambios',
//                    itemId: 'btnGuardarArchivos',
//                    id: 'btnGuardarArchivos',
//                    name: 'btnGuardarArchivos',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("guardarArchivos", btn);
//                    }
//
//                },
                {
                    iconCls: 'polizas-icon',
                    text: 'Generar Poliza',
                    itemId: 'btnGenerarArchivo',
                    id: 'btnGenerarArchivo',
                    name: 'btnGenerarArchivo',
                    hidden: true,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("generarPoliza", btn);
                    }
                },
                {
                    iconCls: 'reload-icon',
                    text: 'Recargar XMLs',
                    itemId: 'btnRecargarArchivo',
                    id: 'btnRecargarArchivo',
                    name: 'btnRecargarArchivo', //,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargarArchivo", btn);
                    }
                }

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIA',
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
                    id: 'arNUMERO',
                    sortable: true,
                    header: 'Numero',
                    width: 40
                    
                 
                  
                },
                 {
                    menuDisabled: true,
                    sortable: false,
                    
                    xtype:'actioncolumn',
                    text: 'Validacion',
                    itemId:'bienColumn',
                    name:'bienColumn',
                    id:'bienColumn',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (rec.get('RFC_COMPANIA') === rec.get('RFC_EMISOR') || rec.get('RFC_COMPANIA') === rec.get('RFC_RECEPTOR')) {
                            return 'factura-valida';
                        } else {
                            return 'factura-mal';
                        }

                    },                    
                    getTip: function(v, meta, rec) {
                        
                         var estatusSat = rec.get('ESTATUSV');
                        
                        if (rec.get('RFC_COMPANIA') === rec.get('RFC_EMISOR') || rec.get('RFC_COMPANIA') === rec.get('RFC_RECEPTOR')) {
                            
                            if(estatusSat === '2'){
                                return rec.get('NUMERO') +' Valida. Aun no se ha comprobado por SAT';
                            }
                            if(estatusSat === '1'){
                                
                                return rec.get('NUMERO') +' Valida. Esta factura es valida en el SAT';
                                
                            }
                            if(estatusSat === '0'){
                                
                                return rec.get('NUMERO') +' Valida. Esta factura no es valida en el SAT';
                            }
                            
                        } else {
                            if(estatusSat === '2'){
                                return 'La factura:'+ rec.get('NUMERO') +' Tiene RFCs no coinciden con el rfc de la compania. Aun no se ha comprobado por SAT';
                            }
                            if(estatusSat === '1'){
                                
                                return 'La factura:'+ rec.get('NUMERO') +' Tiene RFCs no coinciden con el rfc de la compania. Esta factura es valida en el SAT';
                                
                            }
                            if(estatusSat === '0'){
                                
                                return 'La factura:'+ rec.get('NUMERO') +' Tiene RFCs no coinciden con el rfc de la compania. Esta factura no es valida en el SAT';
                            }
                            
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
                {
                    dataIndex: 'FOLIO',
                    hidden: false,
                    filterable: true,
                    
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO',
                    id: 'arFOLIO',
                    sortable: true,
                    header: 'Folio',
                    width: 50
                    
                },
                 {
                    dataIndex: 'NO_CASO',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NO_CASO',
                    id: 'NO_CASO',
                    sortable: true,
                    header: 'No Caso',
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
                    id: 'arFECHA',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                },
                {
                    dataIndex: 'SERIE',
                     filterable: true,
                     
                    name: 'SERIE',
                    hidden: false,
                    id: 'arSERIE',
                    sortable: true,
                    header: 'Serie',
                    width: 60
                },
                        
                {
                    dataIndex: 'RFC_RECEPTOR',
                    name: 'RFC_RECEPTOR',
                    
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_RECEPTOR',
                    sortable: true,
                    header: 'RFC Receptor',
                    width: 100
                    
                },
                
                {
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                    
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_EMISOR',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
                {
                    dataIndex: 'PDF',
                    name: 'PDF',
                     filterable: true,
                    hidden: true,
                    id: 'arPDF',
                    sortable: true,
                    header: 'PDF',
                    width: 100
                    
                },
                 {
                    dataIndex: 'XML',
                    name: 'XML',
                     filterable: true,
                    hidden: true,
                    id: 'arXML',
                    sortable: true,
                    header: 'XML',
                    width: 100
                    
                },
                {
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_EMISOR',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                },
                {
                    dataIndex: 'DESCRIPCION',
                    name: 'colDescripcion',
                     filterable: true,
                    hidden: true,
                    id: 'colDescripcion',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                {
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    hidden: false,
                    id: 'arSUBTOTAL',
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
                    id: 'arIVA',
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
                    id: 'arTOTAL',
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
                    dataIndex: 'NOMIDCONCGASTO',
                    name: 'colNOMIDCONCGASTO',
                    hidden: false,
                    id: 'arNOMIDCONCGASTO',
                    sortable: true,
                    header: 'Prepoliza',
                    
                    
                    field: {
                        xtype: 'combobox',
                        id: 'cboConcGasto',
                        name: 'cboConcGasto',
                        itemId: 'cboConcGasto',
                        displayField: 'GNOMBRE',
                        valueField: 'NO_CASO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeConcGasto,
                        allowBlank: false,
                        listeners: {
                            select: function(value) {
                                me.fireEvent("setConcGasto", value.valueModels[0].data.NO_CASO);
                            }
                        }


                    },
                     renderer: function(value) {

                        var index = storeConcGasto.find('NO_CASO', value);
                        
                        msgOut('indexGasto'+index);
                        
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
                    dataIndex: 'IDCONCGASTO',
                    name: 'colIDCONCGASTO',
                    hidden: true,
                    id: 'colIDCONCGASTO',
                    sortable: true,
                    header: 'IDCONCGASTO',
                    width: 280
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'FLAG_POLIZA',
                    id: 'FLAG_POLIZA',
                    
                      listeners: {
                   //     scope: this,
                      //  beforecheckchange: function(col, index, checked) {                         
                      //   this.fireEvent("beforecheckPoliza", index, checked);
                      //  }
                     }
                  
                    
                },
                {
                    dataIndex: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                     filterable: true,
                    
                    hidden: false,
                    id: 'arTIPO_POLIZA',
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
                    id: 'arFECHA_POL',
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
                    id: 'arNUMERO_POL',
                    sortable: true,
                    header: 'Numero Poliza',
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_CAP',
                    name: 'FECHA_CAP',
                    id: 'feFECHA_CAP',
                    itemId: 'feFECHA_CAP',
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
                    store: 'StoreArchivos',
                    listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            msgOut("en cambio de pagina");
                            msgOut("pageDate:",pageData);
                           // msgOut(pageData.currentPage);
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
 
                              me.column = 'NOMIDCONCGASTO';
                              me.column2 = 'FECHA_POL';
                                           
                        e.preventDefault();

                    }
                }
            }

        });


        this.callParent(arguments);
    }



});


