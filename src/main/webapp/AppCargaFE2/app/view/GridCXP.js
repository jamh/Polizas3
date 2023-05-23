Ext.define('AppCargaFE2.view.GridCXP', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcxp',
    itemId: 'gridcxp',
    xtype: 'gridcxp',
    store: 'StoreCXP',
    poscol: null,   
    autoScroll: true,
    habilitaMenu: false,
    height:410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        var storeConcGasto = Ext.create('AppCargaFE2.store.StoreConcGasto');  
        var storeCalendario = Ext.create('AppCargaFE2.store.StoreCalendario'); 
        var storePeriodo = Ext.create('AppCargaFE2.store.StorePeriodo');
         var storePeriodoFin = Ext.create('AppCargaFE2.store.StorePeriodo');
        
        
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
                me.fireEvent("deSelectAllCXP", widget, me.poscol);
            }
        });

        var buyAction = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Seleccionar todos',
            disabled: false,
            handler: function(widget, view, rec, node, index) {

                me.fireEvent("selectAllCXP", widget, me.poscol);
            }
        });
        var relacionPol = Ext.create('Ext.Action', {
            iconCls: 'icon-relacion',
            text: 'Polizas Relacionadas',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionaPolExistenteCXP", widget,me.poscol);
            }
        });
         var validaSat = Ext.create('Ext.Action', {
            iconCls: 'icon-sat',
            text: 'Valida SAT',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("validaSatCXP", widget,me.poscol);
            }
        });
        var relacionarPoliza = Ext.create('Ext.Action', {
            iconCls: 'poliza-icon',
            text: 'Relacionar Poliza',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionarPolizaCXP", widget,me.poscol);
            }
        });
        
        var quitarRelacionPoliza = Ext.create('Ext.Action', {
            iconCls: 'poliza-icon',
            text: 'Quitar Relacion Poliza',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                        
                me.fireEvent("quitarRelacionPolizaCXP", widget,me.poscol);
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
                                                        
                            this.fireEvent("actIdConGastoCXP", value,me.column);
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
                             this.fireEvent("actFechaPolCXP", date,me.column2);                           
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
                '-',
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
             multiSelect:true,
            tbar: [
                
//                      {
//                    xtype: 'splitbutton',
//                    text: 'PREPOLIZA...',
//                  //  iconCls: 'see-icon',
//                    menu: [
               
               {
                        iconCls: 'converter-icon',
                            text: 'PREPOLIZA...',
                            handler: function(btn) {                                
                                me.fireEvent("verConvertidorCXP", btn);
                            }   
                },
                
               
               
//            ]
//            },
                
                
                   {
                    xtype: 'combobox',
                    id: 'cboCalendarioFeCXP',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendarioFeCXP',
                    itemId: 'cboCalendarioFeCXP',
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
                            Ext.getCmp('cboPeriodoFeCXP').clearValue();
                           // Ext.getCmp('cboPeriodoFe').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                            
                             Ext.getCmp('cboPeriodoCxpFin').clearValue();
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
                    id: 'cboPeriodoFeCXP',
                    fieldLabel: 'Periodo Inicial',
                    name: 'cboPeriodoFeCXP',
                    itemId: 'cboPeriodoFeCXP',
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
                           
                           me.fireEvent("buscaPorFechaCXP",  Ext.getCmp('cboCalendarioFeCXP').getValue(),Ext.getCmp('cboPeriodoFeCXP').getValue(),Ext.getCmp('cboPeriodoCxpFin').getValue() );
                           
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCXP').getValue();
                
                    }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboPeriodoCxpFin',
                    fieldLabel: 'Periodo Final',
                    name: 'cboPeriodoCxpFin',
                    itemId: 'cboPeriodoCxpFin',
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
                           
                           me.fireEvent("buscaPorFechaCXP",  Ext.getCmp('cboCalendarioFeCXP').getValue(),Ext.getCmp('cboPeriodoFeCXP').getValue(),Ext.getCmp('cboPeriodoCxpFin').getValue() );
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                               storePeriodoFin.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCXP').getValue();
                
                    }
                     }
                },
                 '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersArchCXP", btn);
                            }
                  },
                 {
                     iconCls: 'download-sat',
                    text: 'Descarga Sat',
                    itemId: 'btnDescargaSatCXP',
                    id: 'btnDescargaSatCXP',
                    name: 'btnDescargaSat',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("descargaSatCXP", btn);
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
                    itemId: 'btnVerPolizaCXP',
                    id: 'btnVerPolizaCXP',
                    name: 'btnVerPoliza',
                    scope: this,
                    handler: function(btn) {
                        me.fireEvent("verPolizaCXP", btn);
                    }

                },
                {
                    iconCls: 'xml-icon',
                    text: 'Ver XML',
                    itemId: 'btnVerXMLCXP',
                    id: 'btnVerXMLCXP',
                    name: 'btnVerXML',
                    handler: function(btn) {
                        me.fireEvent("verXMLCXP", btn);
                    }

                },
                {
                    iconCls: 'pdf-icon',
                    text: 'Ver PDF',
                    itemId: 'btnVerPDFCXP',
                    id: 'btnVerPDFCXP',
                    name: 'btnVerPDF',
                    handler: function(btn) {
                        me.fireEvent("verPDFCXP", btn);
                    }

                },
                  {
                     iconCls: 'csv-icon',
                    text: 'Descarga',
                    itemId: 'btnDescargaCXPpag',
                    id: 'btnDescargaCXPpag',
                    name: 'btnDescargaCXPpag',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaCXPpag", btn);
                    }

                },
                
                {
                     iconCls: 'csv-icon',
                    text: 'Descarga Todo',
                    itemId: 'btnDescargaCXP',
                    id: 'btnDescargaCXP',
                    name: 'btnDescargaCXP',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("decargaCXP", btn);
                    }

                }
              
            ]
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
                    itemId: 'btnAddArchivoCXP',
                    id: 'btnAddArchivoCXP',
                    name: 'btnAddArchivo',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("addArchivoCXP", btn);
                    }
                },
             
                        {
                    iconCls: 'delete-icon',
                    text: 'Borrar XML',
                    itemId: 'btndelArchivoCXP',
                    id: 'btndelArchivoCXP',
                    name: 'btndelArchivo',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deleteArchivoCXP", btn);
                    }
                },
                {
                    iconCls: 'reload-icon',
                    text: 'Recargar Conceptos',
                    itemId: 'btnRecargarStoreCXP',
                    id: 'btnRecargarStoreCXP',
                    name: 'btnRecargarStore',
                    scope: this,
                    handler: function(btn) {
                       storeConcGasto.removeAll();                           
                            storeConcGasto.load({
                                callback: function(val, val2) {

                                }
                            });                        
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
                                itemId: 'btnGuardarArchivosCXP',
                                id: 'btnGuardarArchivosCXP',
                                name: 'btnGuardarArchivosCXP',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivosCXP", btn);
                                }

                            },
                            {

                                iconCls: 'save-icon',
                                text: 'Poliza por Múltiples Facturas',
                                itemId: 'btnGuardarArchivosMultCXP',
                                id: 'btnGuardarArchivosMultCXP',
                                name: 'btnGuardarArchivosMultCXP',
                                scope: this,
                                handler: function(btn) {
                                    this.fireEvent("guardarArchivosMultCXP", btn);
                                }

                            }
                          
                ]
            },
                {
                    iconCls: 'polizas-icon',
                    text: 'Generar Poliza',
                    itemId: 'btnGenerarArchivoCXP',
                    id: 'btnGenerarArchivoCXP',
                    name: 'btnGenerarArchivo',
                    hidden: true,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("generarPolizaCXP", btn);
                    }
                },
                {
                    iconCls: 'reload-icon',
                    text: 'Recargar XMLs',
                    itemId: 'btnRecargarArchivoCXP',
                    id: 'btnRecargarArchivoCXP',
                    name: 'btnRecargarArchivo', //,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargarArchivoCXP", btn);
                    }
                }

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIACXP',
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
                    id: 'arNUMEROCXP',
                    sortable: true,
                    header: 'Numero',
                    width: 40
                    
                 
                  
                },
                 {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'Validacion',
                    itemId:'bienColumnCXP',
                    name:'bienColumn',
                    id:'bienColumnCXP',
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
                    id: 'arFOLIOCXP',
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
                    id: 'NO_CASOCXP',
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
                    id: 'arFECHACXP',
                    sortable: true,
                    header: 'Fecha',
                    width: 100
                },
                {
                    dataIndex: 'SERIE',
                     filterable: true,
                    name: 'SERIE',
                    hidden: false,
                    id: 'arSERIECXP',
                    sortable: true,
                    header: 'Serie',
                    width: 60
                },
                        
                {
                    dataIndex: 'RFC_RECEPTOR',
                    name: 'RFC_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_RECEPTORCXP',
                    sortable: true,
                    header: 'RFC Receptor',
                    width: 100
                    
                },
                {
                    dataIndex: 'NOMBRE_RECEPTOR',
                    name: 'NOMBRE_RECEPTOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_RECEPTORCXP',
                    sortable: true,
                    header: 'Nombre Receptor',
                    width: 180
                },
                
                {
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arRFC_EMISORCXP',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
                {
                    dataIndex: 'PDF',
                    name: 'PDF',
                     filterable: true,
                    hidden: true,
                    id: 'arPDFCXP',
                    sortable: true,
                    header: 'PDF',
                    width: 100
                    
                },
                 {
                    dataIndex: 'XML',
                    name: 'XML',
                     filterable: true,
                    hidden: true,
                    id: 'arXMLCXP',
                    sortable: true,
                    header: 'XML',
                    width: 100
                    
                },
                {
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'arNOMBRE_EMISORCXP',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                },
                {
                    dataIndex: 'DESCRIPCION',
                    name: 'colDescripcion',
                     filterable: true,
                    hidden: true,
                    id: 'colDescripcionCXP',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                {
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    hidden: false,
                    id: 'arSUBTOTALCXP',
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
                    id: 'arIVACXP',
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
                    id: 'arTOTALCXP',
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
                    id: 'arNOMIDCONCGASTOCXP',
                    sortable: true,
                    header: 'Prepoliza',
                    
                    
                    field: {
                        xtype: 'combobox',
                        id: 'cboConcGastoCXP',
                        name: 'cboConcGasto',
                        itemId: 'cboConcGastoCXP',
                        displayField: 'GNOMBRE',
                        valueField: 'NO_CASO',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeConcGasto,
                        allowBlank: false,
                        listeners: {
                            select: function(value) {
                                me.fireEvent("setConcGastoCXP", value.valueModels[0].data.NO_CASO);
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
                    id: 'colIDCONCGASTOCXP',
                    sortable: true,
                    header: 'IDCONCGASTO',
                    width: 280
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'FLAG_POLIZA',
                    id: 'FLAG_POLIZACXP',
                    
                      listeners: {
                        //scope: this,
                        //beforecheckchange: function(col, index, checked) {                         
                        // this.fireEvent("beforecheckPolizaCXP", index, checked);
                       // }
                     }
                  
                    
                },
                {
                    dataIndex: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                     filterable: true,
                    
                    hidden: false,
                    id: 'arTIPO_POLIZACXP',
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
                    id: 'arFECHA_POLCXP',
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
                    id: 'arNUMERO_POLCXP',
                    sortable: true,
                    header: 'Numero Poliza',
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_CAP',
                    name: 'FECHA_CAP',
                    id: 'feFECHA_CAPCXP',
                    itemId: 'feFECHA_CAPCXP',
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
                    store: 'StoreCXP',
                    listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            msgOut("en cambio de pagina");
                            msgOut("pageDate:",pageData);
                           // msgOut(pageData.currentPage);
                          if(!Ext.isEmpty(pageData)){
                          this.fireEvent("recargaPaginaCXP",pageData.currentPage) ;
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


