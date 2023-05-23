Ext.define('AppPortalAereo.view.GridCxpOtros', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcxpotros',
    itemId: 'gridcxpotros',
    xtype: 'gridcxpotros',
    store: 'StoreCxpOtros',
    poscol: null,
    autoScroll: true,
    habilitaMenu: false,
    flex:4,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
       // var storeConCxp = Ext.create('AppCXPFacturas.store.StoreConceptoCXP');
       // var storeCto = Ext.create('AppCXPFacturas.store.StoreCto');
       // var storeCalendario = Ext.create('AppCXPFacturas.store.StoreCalendario'); 
       // var storePeriodo = Ext.create('AppCXPFacturas.store.StorePeriodo'); 



    
        Ext.apply(me, {
              plugins: 'gridfilters',
     
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
                
                {
                    iconCls: 'clean-filter-icon',
                    text: '',
                    tooltip :translations.btnFiltroOtros,
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersOtro", btn);
                    }
                },
                

            

                    
                      '->',
                      {
                            iconCls: 'add-icon',
                            text: translations.btnAddOtros,
                            itemId: 'addCXPOtrosPortal',
                            id: 'addCXPOtrosPortal',
                            name: 'addCXPOtrosPortal',
                            handler: function(btn) {
                                me.fireEvent("addCXP", btn);
                            }                            
                        },
                          {
                            iconCls: 'delete-icon',
                            text: translations.btnBorraOtros,
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
                 //   iconCls: 'delete-icon',
                    text: translations.btnEditBancOtros,
                    itemId: 'btnEditBancExt',
                    id: 'btnEditBancExt',
                    hidden:false,
                    name: 'btnEditBancExt',
                    scope: this,
                    handler: function (btn) {
                        this.fireEvent("addDatBancExt", btn);
                    }
                },
                
                        
                        {
                            iconCls: 'pdf-icon',
                            text: translations.btnVerArchivoOtros,
                            itemId: 'imprimirRemAntFol',
                            id: 'imprimirRemAntFol',
                            name: 'imprimirRemAntFol',
                            handler: function(btn) {
                                me.fireEvent("verArchivo", btn);
                            }                            
                        },
                        
                        '-',
                         {
                    iconCls: 'delete-icon',
                    text: translations.btnSalirOtros,
                    itemId: 'btnBorrarProvOtr',
                    id: 'btnBorrarProvOtr',
                    name: 'btnBorrarProvOtr',
                    scope: this,
                    handler: function (btn) {
                        this.fireEvent("exitApp", btn);
                    }
                }
                        
                 
                
       


            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_OTROS',
                    name: 'COMPANIA_OTROS',
                    id: 'cxpCOMPANIA_OTROSPortal',
                    sortable: true,
                    hidden: true,
                    header: translations.columnCompaniaOtros,
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
                    id: 'cxpNUMERO_OTROSPortal',
                    sortable: true,
                    header: translations.columnNumeroOtros,
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
                    dataIndex: 'FECHA_OTROS',
                    name: 'FECHA_OTROS',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_OTROSPortal',
                    sortable: true,
                    header: translations.columnFechaOtros,
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
                    id: 'cxpRFC_EMISOR_OTROSPortal',
                    sortable: true,
                    header: translations.columnRfcOtros,
                    width: 200
                },
               
                {
                    dataIndex: 'NOMBRE_EMISOR_OTROS',
                    name: 'NOMBRE_EMISOR_OTROS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpNOMBRE_EMISOR_OTROSPortal',
                    sortable: true,
                    header: translations.columnNombreOtros,
                    width: 300
                    
                    
                    
                    
                },
                {
                    dataIndex: 'DESCRIPCION_OTROS',
                    name: 'DESCRIPCION_OTROS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpDESCRIPCION_OTROSPortal',
                    sortable: true,
                    header: translations.columnDescripcionOtros,
                    width: 400

                },
                                 {
                    menuDisabled: true,
                    sortable: false,
                    xtype: 'actioncolumn',
                    text: '',
                    id: 'bloqueoColumnCXP',
                    width: 30,
                    tdCls: 'x-change-cell',
                    items: [
                        {
                            getClass: function (v, meta, rec) {
                                
                                
                           
                                if (rec.get('ESTATUS_CXP_OTROS')==='PAG') {
                                    return 'img-green';
                                }  else if (rec.get('ESTATUS_CXP_OTROS') === 'PAR') {
                                    return 'img-wait';
                                } else if (Ext.isEmpty(rec.get('ESTATUS_CXP'))) {
                                    return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'TES') {
                                     return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'IMP') {
                                     return 'img-wait';
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'CANF') {
                                     return 'img-red';
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'CAN') {
                                   return 'img-red';

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'REMB') {
                                     return 'img-wait';

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'ANT') {
                                    return 'img-wait';

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'FG') {
                                    return 'img-wait';
    
                                        }else{
                                            
                                             return 'img-wait';
                                           
                                        }

                            },
                            getTip: function (v, meta, rec) {
                                
                                 if (rec.get('ESTATUS_CXP_OTROS')==='PAG') {
                                    return translations.estatusGastoPag;
                                }  else if (rec.get('ESTATUS_CXP_OTROS') === 'PAR') {
                                    return translations.estatusGastoEspera;
                                } else if (Ext.isEmpty(rec.get('ESTATUS_CXP_OTROS'))) {
                                    return translations.estatusGastoEspera;
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'TES') {
                                     return translations.estatusGastoEspera;
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'IMP') {
                                     return translations.estatusGastoEspera;
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'CANF') {
                                     return translations.estatusGastoCan;
                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'CAN') {
                                   return translations.estatusGastoCan;

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'REMB') {
                                     return translations.estatusGastoEspera;

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'ANT') {
                                    return translations.estatusGastoEspera;

                                 } else if (rec.get('ESTATUS_CXP_OTROS') === 'FG') {
                                    return translations.estatusGastoEspera;
    
                                        }else{
                                            
                                             return translations.estatusGastoEspera;
                                           
                                        }
                                

                                
                            },
                            handler: function (grid, rowIndex, colIndex) {
                                var rec = grid.getStore().getAt(rowIndex);

                            }
                        }]
                },
                
                {
                    dataIndex: 'SUBTOTAL_OTROS',
                    name: 'SUBTOTAL_OTROS',
                    hidden: false,
                    id: 'cxpSUBTOTAL_OTROSPortal',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: translations.columnSubtotalOtros,
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
                    id: 'cxpTOTAL_OTROSPortal',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: translations.columnTotalOtros,
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
            ]
        
        });


        this.callParent(arguments);
    }



});


