Ext.define('AppCXPFacturas.view.GridIntercos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridintercos',
    itemId: 'gridintercos',
    id: 'gridintercos',
    xtype: 'gridintercos',
    store: 'StoreIntercos',
    poscol: null,
    autoScroll: true,
    habilitaMenu: false,
    height: 410,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        var storeConCxp = Ext.create('AppCXPFacturas.store.StoreConceptoCXP');
        var storeCto = Ext.create('AppCXPFacturas.store.StoreCto');
      //  var storeCalendario = Ext.create('AppCXPFacturas.store.StoreCalendario'); 
      //  var storePeriodo = Ext.create('AppCXPFacturas.store.StorePeriodo'); 
        
//        var verCXP = Ext.create('Ext.data.Store', {
//            fields: ['clave', 'nombre'],
//                data : [
//                    {"clave":"F", "nombre":"Fecha Factura"},
//                    {"clave":"P", "nombre":"Fecha Pago"}
//                 
//                ]
//            });
        

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
//         var validaSat = Ext.create('Ext.Action', {
//            iconCls: 'icon-sat',
//            text: 'Valida SAT',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("validaSat", widget,me.poscol);
//            }
//        });
         var tesoreria= Ext.create('Ext.Action', {
            iconCls: 'add-icon',
            text: 'Crear a Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("enviaPagosInt", widget,me.poscol);
            }
        });
        
        var cancelaFactura= Ext.create('Ext.Action', {
            iconCls: 'cancel-icon',
            text: 'Cancelar Factura',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("cancelaFacturaInt", widget,me.poscol);
            }
        });
        
        var agregarFactFolio= Ext.create('Ext.Action', {
            iconCls: 'edit-icon',
            text: 'Agregar Folio Pago',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("actualizaFolioInt", widget,me.poscol);
            }
        });
        var agregarFactRembolso= Ext.create('Ext.Action', {
            iconCls: 'dolar-icon',
            text: 'Agregar a Rembolso',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("agregaRembolsoInt", widget,me.poscol);
            }
        });
        
        var agregarRelOtrasXFact= Ext.create('Ext.Action', {
            iconCls: 'icon-relacion',
            text: 'Relacionar Anticipo o Reembolso',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("relacionaOtrasInt", 'F');
            }
        });
        
        var quitarRelOtrasXFact= Ext.create('Ext.Action', {
            iconCls: 'icon-quitarrelacion',
            text: 'Quitar Anticipo o Reembolso',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("quitarRelacionaOtrasInt", 'F');
            }
        });
        
//        var reutilzarFolio= Ext.create('Ext.Action', {
//            iconCls: 'dolar-icon',
//            text: 'Copiar Folio',
//            disabled: false,
//            handler: function(widget, view, rec, node, index) {
//                me.fireEvent("copiaFolio", widget,me.poscol);
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



        var combo = new Ext.form.ComboBox({
            displayField: 'NOMBRE_CONCEPTO',
            valueField: 'CONCEPTO',
            id:'cxpConceptoCboId',
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

                    this.fireEvent("actIdConceptoInt", value, me.column);
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

                    this.fireEvent("actIdCCInt", value, me.column3);
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
   
                this.fireEvent("actFechaCxpInt", date, me.column2);

            }

        });


     

        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [

                {
                    text: 'Concepto',
                    menu: {
                        showSeparator: false,
                        items: [
                            combo
                        ]
                    }
                },
                {
                    text: 'Centro de Costos',
                    menu: {
                        showSeparator: false,
                        items: [
                            comboCC
                        ]
                    }
                },
                {
                    text: 'Fecha Venc',                   
                    iconCls: 'fecha-icon',
                    menu: dateMenu 
                },
            
                '-',
                tesoreria,
                '-',
                agregarFactFolio,
               
                '-',
                cancelaFactura//,
//           
//                '-',
//                agregarRelOtrasXFact,
//                '-',
//                quitarRelOtrasXFact
           

            ]
        });
        Ext.apply(me, {
            features: [
                filters,
                {
                    ftype: 'groupingsummary',
                    groupHeaderTpl: '{name}-( {rows.length} Factura{[values.rows.length > 1 ? "s" : ""]})',
                    hideGroupedHeader: false,
                    enableGroupingMenu: false,
                    startCollapsed: true
                }, {
                    ftype: 'summary',
                    dock: 'bottom'
                 
                }
            ],
            plugins: [
                cellEditing2
            ],
            multiSelect: true,
            tbar: [
//                 {
//                    xtype: 'combobox',
//                    id: 'cboCalendarioFeCxp',
//                    fieldLabel: 'Calendario',
//                    name: 'cboCalendarioFeCxp',
//                    itemId: 'cboCalendarioFeCxp',
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
//                            Ext.getCmp('cboPeriodoFeCxp').clearValue();
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
//                    id: 'cboPeriodoFeCxp',
//                    fieldLabel: 'Periodo',
//                    name: 'cboPeriodoFeCxp',
//                    itemId: 'cboPeriodoFeCxp',
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
//                           me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
//                            
//                        },
//                          beforequery: function(queryEvent, eOpts) {
//                              
//                               storePeriodo.proxy.extraParams.calendario = Ext.getCmp('cboCalendarioFeCxp').getValue();
//                
//                    }
//                     }
//                },
//                
//                 {
//                    xtype: 'combobox',
//                    fieldLabel: 'Ver por...',
//                    name: 'cboverCXP',
//                    id: 'cboverCXP',
//                    labelWidth:50,
//                    width:200,
//                    store: verCXP,
//                    queryMode: 'local',
//                    readOnly: false,
//                    hidden:false,
//                    displayField: 'nombre',
//                    valueField: 'clave',
//                    allowBlank: false,
//                    listeners: {
//                        scope: this,
//                        'select': function(valor) {
//                           
//                           me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
//                            
//                        }
//                         
//                     }
//                },

              
                '->',
                
//                {
//                    iconCls: 'icon-grafico',
//                    text: '',
//                    tooltip :'C. Costos',
//                    handler: function(btn) {
//                        // msgOut('Excel');
//                        me.fireEvent("buscaCCostos", btn);
//                    }
//                },
//                {
//                    iconCls: 'icon-lista',
//                    text: '',
//                    tooltip :'Conceptos',
//                    handler: function(btn) {
//                        // msgOut('Excel');
//                        me.fireEvent("buscaConceptos", btn);
//                    }
//                },
                
                {
                    iconCls: 'clean-filter-icon',
                    text: '',
                    tooltip :'Limpiar Filtro',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersArchInt", btn);
                    }
                },
        

                {
                    xtype: 'splitbutton',
                    text: 'Ver...',
                    iconCls: 'see-icon',
                    menu: [

                        {
                            iconCls: 'xml-icon',
                            text: 'Ver XML',
                            itemId: 'btnVerXMLInt',
                            id: 'cxpbtnVerXMLInt',
                            name: 'btnVerXML',
                            handler: function(btn) {
                                me.fireEvent("verXMLInt", btn);
                            }

                        },
                        {
                            iconCls: 'pdf-icon',
                            text: 'Ver PDF',
                            itemId: 'btnVerPDFInt',
                            id: 'cxpbtnVerPDFInt',
                            name: 'btnVerPDFInt',
                            handler: function(btn) {
                                me.fireEvent("verPDFInt", btn);
                            }
                            

                        },
//                        {
//                            iconCls: 'add-icon',
//                            text: 'Agregar CXP',
//                            itemId: 'addCXP',
//                            id: 'addCXP',
//                            name: 'addCXP',
//                            handler: function(btn) {
//                                me.fireEvent("addCXP", btn);
//                            }                            
//                        },
                        {
                            iconCls: 'xml-icon',
                            text: 'Relacionar Nota C.',
                            itemId: 'ralacionarCXPInt',
                            id: 'ralacionarCXPInt',
                            name: 'ralacionarCXPInt',
                            handler: function(btn) {
                                me.fireEvent("relacionarCxpInt", btn);
                            }                            
                        }
//                 
                   
                    
                    ]
                },
//             
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Borrar XML',
//                    itemId: 'btndelArchivoInt',
//                    id: 'cxpbtndelArchivoInt',
//                    name: 'btndelArchivoInt',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("deleteArchivoInt", btn);
//                    }
//                },

                '-',
                {
                    iconCls: 'reload-icon',
                    text: '',
                    itemId: 'btnRecargaCxpInt',
                    id: 'btnRecargaCxpInt',
                    tooltip :'Recargar Datos',
                    name: 'btnRecargaCxpInt',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargaCXPInt", btn);
                    }

                },
                '-',
                {
                    iconCls: 'save-icon',
                    text: 'Guardar Cambios',
                    itemId: 'btnGuardarArchivosInt',
                    id: 'cxpbtnGuardarArchivosInt',
                    name: 'btnGuardarArchivosInt',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardarCXPInt", btn);
                    }

                }



            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'cxpCOMPANIAInt',
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
                    id: 'cxpNUMEROInt',
                    sortable: true,
                    header: 'Numero',
                    width: 40,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                       var numerorel = record.data.NUM_REL_OTRAS;
                        
                      
                            
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
                    itemId:'bienColumn',
                    name:'bienColumn',
                    id:'bienColumnInt',
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
                         msgOut('estatusSat'+estatusSat);
                        
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
                            if(estatusSat === '3'){
                                
                                return rec.get('NUMERO') +' Valida. Esta no es una factura Electronica';
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
                             if(estatusSat === '3'){
                                
                                 return 'La factura:'+ rec.get('NUMERO') +' Tiene RFCs no coinciden con el rfc de la compania. Esta no es una factura Electronica';
                            }
                            
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
             
             {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'NC',
                    itemId:'bienColumnNC',
                    name:'bienColumnNC',
                    id:'bienColumnNCInt',
                    width: 40,
                   // tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if ( rec.get('TIPO_DE_COMPROBANTE') === 'egreso' || rec.get('TIPO_DE_COMPROBANTE') === 'E') {
                            return 'icon-credito';
                        } else {
                            return '';
                        }

                    },                    
                    getTip: function(v, meta, rec) {
                        
                        if (rec.get('TIPO_DE_COMPROBANTE') === 'egreso' || rec.get('TIPO_DE_COMPROBANTE') === 'E') {
                            return 'Nota de Credito';
                        } else {
                            return '';
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
//                    filter: {
//                        type: 'numeric'
//                    },
                    name: 'FOLIO',
                    id: 'cxpFOLIOInt',
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
                    id: 'cxpNO_CASOInt',
                    sortable: true,
                    header: 'No Caso',
                    width: 50
                },
                {
                    dataIndex: 'SERIE',
                    filterable: true,
                    name: 'SERIE',
                    hidden: false,
                    id: 'cxpSERIEInt',
                    sortable: true,
                    header: 'Serie',
                    width: 60
                },
                {
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_FACInt',
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
                    dataIndex: 'RFC_RECEPTOR',
                    name: 'RFC_RECEPTOR',
                    filterable: true,
                    hidden: false,
                    id: 'cxpRFC_RECEPTORInt',
                    sortable: true,
                    header: 'RFC Receptor',
                    width: 100
                },
                {
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                    text:'name',
                    filterable: true,
                    hidden: false,
                    id: 'cxpRFC_EMISORInt',
                    sortable: true,
                    header: 'RFC Emisor',
                    width: 100
                },
                {
                    dataIndex: 'PDF',
                    name: 'PDF',
                    filterable: true,
                    hidden: true,
                    id: 'cxpPDFInt',
                    sortable: true,
                    header: 'PDF',
                    width: 100

                },
                {
                    dataIndex: 'XML',
                    name: 'XML',
                    filterable: true,
                    hidden: true,
                    id: 'cxpXMLInt',
                    sortable: true,
                    header: 'XML',
                    width: 100

                },
                {
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                    text:'name2',
                    filterable: true,
                    hidden: false,
                    id: 'cxpNOMBRE_EMISORInt',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180
                    
                    
                    
                },
                {
                    dataIndex: 'DESCRIPCION',
                    name: 'colDescripcion',
                    filterable: true,
                    hidden: true,
                    id: 'cxpDescripcionInt',
                    sortable: true,
                    header: 'Descripcion',
                    width: 280

                },
                
                {
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    hidden: false,
                    id: 'cxpSUBTOTALInt',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Subtotal',
                    align: 'right',
                    summaryRenderer: function(value, summaryData, field) {
                         if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:green;font-weight: bold">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    groupable: false,
                    summaryType: 'sum',
                    summaryFormatter: 'usMoney',
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
                    id: 'cxpIVAInt',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Iva',
                    align: 'right',
                    summaryRenderer: function(value, summaryData, field) {
                         if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:green;font-weight: bold">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    groupable: false,
                    summaryType: 'sum',
                    summaryFormatter: 'usMoney',
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
                    id: 'cxpTOTALInt',
                    sortable: true,
                    filterable: true,
                    groupable: false,
                    summaryType: 'sum',
                    summaryRenderer: function(value, summaryData, field) {
                         if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:green;font-weight: bold">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    },
                    summaryFormatter: 'usMoney',
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
                    dataIndex: 'CONCEPTO',
                    name: 'CONCEPTO',
                    hidden: false,
                    id: 'cxpCONCEPTOInt',
                    sortable: true,
                    header: 'Concepto',
                    field: {
                        xtype: 'combobox',
                        id: 'cboCxpConcepto',
                        name: 'cboCxpConcepto',
                        itemId: 'cboCxpConcepto',
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
                    dataIndex: 'NOMCC',
                    name: 'NOMCC',
                    hidden: false,
                    id: 'cxpCCInt',
                    sortable: true,
                    header: 'Centro Costo',
                    field: {
                        xtype: 'combobox',
                        id: 'cboCxpCC',
                        name: 'cboCxpCC',
                        itemId: 'cboCxpCC',
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
                    dataIndex: 'CXP_FECHA',
                    name: 'CXP_FECHA',
                    id: 'cxpFECHAInt',
                    itemId: 'cxpFECHA',
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
                    dataIndex: 'ESTATUS_CXP',
                    name: 'ESTATUS_CXP',
                    filterable: true,
                    hidden: true,
                    id: 'cxpEstatusInt',
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
                            
                         } else if (value === 'ANT') {
                            return '<span style="color:#04B4AE;font-weight: bold">Anticipo</span>';
                            
                         } else if (value === 'FG') {
                            return '<span style="color:#380B61;font-weight: bold">Folio Generado</span>';
                         

                        } else {
                            return value;
                        }

                    }

                },
                 {
                    dataIndex: 'NOM_ESTATUS_CXP',
                    name: 'NOM_ESTATUS_CXP',
                    filterable: true,
                    hidden: false,
                    id: 'cxpEstatusNomInt',
                    sortable: true,
                    header: 'Estatus',
                    width: 100,
                    renderer: function(value) {
                        if (value === 'Pago Total') {
                            return '<span style="color:green;font-weight: bold">Pago Total</span>';
                        } else if (value === 'Pago Parcial') {
                            return '<span style="color:gold;font-weight: bold">Pago Parcial</span>';
                        } else if (value === 'Sin Pagar') {
                            return '<span style="color:red;font-weight: bold">Sin Pagar</span>';
                         } else if (value === 'Enviado a Pagar') {
                            return '<span style="color:blue;font-weight: bold">Enviado a Pagar</span>';
                         } else if (value === 'Impreso') {
                            return '<span style="color:gold;font-weight: bold">Impreso</span>';
                         } else if (value === 'Factura Cancelada') {
                            return '<span style="color:red;font-weight: bold">Factura Cancelada</span>';
                         } else if (value === 'Cancelada') {
                            return '<span style="color:brown;font-weight: bold">Cancelada</span>';
                            
                         } else if (value === 'Rembolso') {
                            return '<span style="color:#04B4AE;font-weight: bold">Rembolso</span>';
                            
                         } else if (value === 'Anticipo') {
                            return '<span style="color:#04B4AE;font-weight: bold">Anticipo</span>';
                            
                         } else if (value === 'Folio Generado') {
                            return '<span style="color:#380B61;font-weight: bold">Folio Generado</span>';
                         

                        } else {
                            return value;
                        }

                    }

                },
                
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA_CAP',
                    name: 'FECHA_CAP',
                    id: 'cxpFECHA_CAPInt',
                    itemId: 'cxpFECHA_CAPInt',
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
                   // msgOut("cell:"+c);
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


