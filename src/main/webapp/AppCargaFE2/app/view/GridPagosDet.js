Ext.define('AppCargaFE2.view.GridPagosDet', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpagosdet',
    itemId: 'gridpagosdet',
    xtype: 'gridpagosdet',
    store: 'StorePagosDet',
    poscol: null,   
    title: 'Pagos Detalle',
    autoScroll: true,
    habilitaMenu: false,
    flex:1,
     split: true,
    collapsible: true,
    column: null,
    column2: null,
    initComponent: function() {
        var me = this;
        
         var storeMetPagos = Ext.create('AppCargaFE2.store.StoreMetPagos');  
         var storeBancoPagos = Ext.create('AppCargaFE2.store.StoreBancosPagos');  
         //storeMetPagos.load();
         //storeBancoPagos.load();
         
         
          var dtFechaPago = new Ext.form.field.Date({
            name: 'dtFechaPago',
            submitFormat: 'd/m/Y',
            format: 'd/m/Y',
            allowBlank: true
        });

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

        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
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
              '->',
                  {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarPagosDet',
                    id: 'btnAgregarPagosDet',
                    name: 'btnAgregarPagosDet',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addPagosDet", btn, cellEditing2);
                    }


                }, {
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarPagosDet',
                    id: 'btnGuardarPagosDet',
                    name: 'btnGuardarPagosDet',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardarDetPagos", btn);
                    }

                },
                '-',
                 {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarDetPago',
                    id: 'btnBorrarDetPago',
                    name: 'btnBorrarDetPago',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deteleDetPago", btn);
                    }
                }
         
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIAPagosDet',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'FOLIO_DET',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_DET',
                    id: 'arFOLIOPagosDet',
                    sortable: true,
                    header: 'Folio',
                    width: 70

                },
                 {
                    dataIndex: 'NUMERO_FE_DET',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_FE_DET',
                    id: 'arNUMERO_FE_DETDet',
                    sortable: true,
                    header: 'Num Fe',
                    width: 70

                },
                 {
                    dataIndex: 'SEC_DET',
                    hidden: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'SEC_DET',
                    id: 'arSECDet',
                    sortable: true,
                    header: 'SEC',
                    width: 40

                },
                {
                    dataIndex: 'T_OPERACION_DET',
                    name: 'T_OPERACION_DET',
                    hidden: false,
                    id: 'arT_OPERACION_DETPagos',
                    sortable: true,
                    header: 'Tipo de Pago',
               
                    
                    field: {
                        xtype: 'combobox',
                        id: 'cboMetPagoet',
                        name: 'cboMetPagoet',
                        itemId: 'cboMetPagoet',
                        displayField: 'CONCEPTO',
                        valueField: 'CLAVE',
                        typeAhead: true,
                        minChars: 0,
                        columnWidth:30,
                        width:30,
                        editable: false,
                        store: storeMetPagos,
                        allowBlank: false,
                      
            
                        
                        listeners: {
                            select: function(value) {
                               // me.fireEvent("setConcGastoCXP", value.valueModels[0].data.NO_CASO);
                            }
                        }
                     

                    },
                   renderer: function(value) {
                     
                      
                     var index = storeMetPagos.find('CLAVE', value);
                     msgOut('index'+index);
                        if (index > -1) {
                            msgOut('cta');
                            var record = storeMetPagos.getAt(index);
                            return record.get('CONCEPTO');
                        }else{
                            return value;
                            
                        }
                    },
                    
                  
                    width: 150
                },
                 {
                    dataIndex: 'BANCO_DET',
                    name: 'BANCO_DET',
                    hidden: false,
                    id: 'arBANCO_DETPagos',
                    sortable: true,
                    header: 'Banco de Pago',
               
                    
                    field: {
                          xtype: 'combobox',
                        name: 'cboBancoDet',
                      //  fieldLabel: 'Banco',
                        id: 'cboBancoDet',
                        store: storeBancoPagos,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        columnWidth:30,
                        width:30,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                                this.fireEvent("cuentaBanco", value.valueModels[0].data.CUENTA_BANCO,value.valueModels[0].data.NOMBRE);
                            }
                           
                        
                        
                       
                           
                        }//,
                     

                    },
                   
                  
                    width: 150
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOM_BANCO',
                    name: 'NOM_BANCO_DET',
                    id: 'NOM_BANCO_DETPago',
                    sortable: true,
                    filterable: true,
                    header: 'Nombre Banco',
                    width: 350//,
//                    field: {
//                        xtype: 'textfield',
//                        name: 'txtNombreBanDetPago',
//                        id: 'txtNombreBanDetPago',
//                        readOnly:true,
//                        allowBlank: true,
//                        maxLength: 200
//
//                    }

                },
                
                   {
                    xtype: 'gridcolumn',
                    dataIndex: 'CUENTA_BANCO',
                    name: 'CUENTA_BANCO',
                    id: 'detCUENTA_BANCOPago',
                    sortable: true,
                    filterable: true,
                    header: 'Cuenta Banco',
                    width: 150,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCuentaBancoDetPago',
                        id: 'txtCuentaBancoDetPago',
                        allowBlank: true,
                        maxLength: 50

                    }

                },
               // 
              //  
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'OBSERVACIONES_DET',
                    name: 'OBSERVACIONES_DET',
                    id: 'detOBSERVACIONES_DETPago',
                    sortable: true,
                    filterable: true,
                    header: 'Observaciones',
                    width: 350,
                    field: {
                        xtype: 'textfield',
                        name: 'txtObservacionesDetPago',
                        id: 'txtObservacionesDetPago',
                        allowBlank: true,
                        maxLength: 200

                    }

                },
              
                        {
                    dataIndex: 'FECHA_PAGO_CXP_FE_DET',
                    sortable: true,
                    header: 'Fecha Pago',
                      filterable: true,
                    filter: {
                        type: 'date'
                    },
                    //renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                    renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
                            function(value) {
                                if(Ext.isDate(value)){
                                    return   Ext.Date.format(value, 'd/m/Y');
                                }else {
                            return  value;
                        }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                    },
                    field: dtFechaPago,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    name: 'dtFechaDet',
                    itemId: 'dtFechaPagoDet',
                    id: 'dtFechaPagoDet',
                    width: 100
                },
                
                
                   {
                    xtype: 'gridcolumn',
                    dataIndex: 'PARIDAD_DET',
                    header: 'Tipo Cambio',
                    name: 'PARIDAD_DET',
                    id: 'txtPARIDAD_DETPago',
                    //summaryType: 'sum',
                    //summaryRenderer: Ext.util.Format.usMoney,
                    width: 120,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.',
                        name: 'dtParidaDetPag',
                        itemId: 'dtParidaDetPag',
                        id: 'dtParidaDetPag',
                         listeners: {
                            scope: this,
                            change: function(newValue, oldValue) {
                               // 
                               msgOut('value cambiando'+oldValue);
                             //  var pag = Ext.getCmp('dtImporteOpePag').getValue();
                               
                             //  var to_pesos = pag * value;
                              
                               this.fireEvent("sumaImporte",oldValue);
                            }
                           
                        
                        
                       
                           
                        }//,
                       
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
                    dataIndex: 'IMPORTE_OPERACION_DET',
                    header: 'Pago',
                    name: 'IMPORTE_OPERACION_DET',
                    id: 'txtIMPORTE_OPERACION_DETPago',
                    //summaryType: 'sum',
                    //summaryRenderer: Ext.util.Format.usMoney,
                    width: 120,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        decimalPrecision : 4,
                        allowDecimals: true,
                        decimalSeparator: '.',
                         name: 'dtImporteOpePag',
                        itemId: 'dtImporteOpePag',
                        id: 'dtImporteOpePag',
                            listeners: {
                            scope: this,
                            change: function( newValue, oldValue) {
                               // 
                               msgOut('value cambiando'+oldValue);
                             //  var pag = Ext.getCmp('dtImporteOpePag').getValue();
                               
                             //  var to_pesos = pag * value;
                              
                               this.fireEvent("sumaImporte2",oldValue);
                            }
                           
                        
                        
                       
                           
                        }//,
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
                    dataIndex: 'TOT_PESOS_DET',
                    header: 'Pago en Pesos',
                    name: 'TOT_PESOS_DET',
                    id: 'txtTOT_PESOS_DETPago',
                    //summaryType: 'sum',
                    //summaryRenderer: Ext.util.Format.usMoney,
                    width: 120,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        decimalPrecision : 4,
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
                    id: 'statusDetallePagos',
                    store: 'StorePagosDet'
               
                })
            ]
    

        });


        this.callParent(arguments);
    },
     money: function(val) {
        if (val > 0) {
            var render = Ext.util.Format.currency(val, '$', 4);
            return '<span style="color:green;font-weight: bold">' + render + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;font-weight: bold">' + render + '</span>';
        }
        return val;
    }



});


