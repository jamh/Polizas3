Ext.define('AppCXPFacturas.view.GridTesoreria', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridtesoreria',
    itemId: 'gridtesoreria',
    xtype: 'gridtesoreria',
    store: 'StoreTesoreria',
    autoScroll: true,
    region: 'center',
    flex:7,

    //height:420,
    
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
        
         var moneda = Ext.create('Ext.data.Store', {
            fields: ['clave', 'moneda'],
                data : [
                    {"clave":"MXN", "moneda":"MXN-Pesos"},
                    {"clave":"USD", "moneda":"USD-Dólar"},
                    {"clave":"EUR", "moneda":"EUR-Euro"}
                 
                ]
            });
            
          var tipoPago = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"PAR", "nombre":"Pago Parcial"},
                    {"clave":"PAG", "nombre":"Pago Total"}
                 
                ]
            });
            
//            var porcentaje = Ext.create('Ext.data.Store', {
//            fields: ['porcentaje', 'nombre'],
//                data : [
//                    {"porcentaje":"10", "nombre":"10%"},
//                    {"porcentaje":"20", "nombre":"20%"},
//                    {"porcentaje":"30", "nombre":"30%"},
//                    {"porcentaje":"40", "nombre":"40%"},
//                    {"porcentaje":"50", "nombre":"50%"},
//                    {"porcentaje":"60", "nombre":"60%"},
//                    {"porcentaje":"70", "nombre":"70%"},
//                    {"porcentaje":"80", "nombre":"80%"},
//                    {"porcentaje":"90", "nombre":"90%"},
//                    {"porcentaje":"100", "nombre":"100%"}
//                 
//                ]
//            });
//            
            var cboTipoPago = Ext.create('Ext.form.field.ComboBox', {
                
                
                    name: 'cboTipoPago',
                    id: 'cboTipoPago',     
                    store: tipoPago,
                    queryMode: 'local',
                    readOnly: false,
                    editable:false,
                    hidden:false,
                    displayField: 'nombre',
                    valueField: 'clave',
                    allowBlank: false,
                    
                    listeners: {
                            scope: this,
                            select: function(value) {
                                
                               if(value.value === 'PAG'){
                                me.fireEvent("setValuesPagos", value);
                               }
                                
                              
                            }
                        }
                    
           

        });
            
            var cboMoneda = Ext.create('Ext.form.field.ComboBox', {
                
                
                    name: 'cboMoneda',
                    id: 'cboMoneda',     
                    store: moneda,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'moneda',
                    valueField: 'clave',
                    allowBlank: false
           

        });
        
//          var porcentajePago = Ext.create('Ext.form.field.ComboBox', {
//                
//                
//                    name: 'cboPorcentaje',
//                    id: 'cboPorcentaje',     
//                    store: porcentaje,
//                    queryMode: 'local',
//                    readOnly: false,
//                    hidden:false,
//                    editable:false,
//                    displayField: 'nombre',
//                    valueField: 'porcentaje',
//                    allowBlank: false,
//                    listeners: {
//                            scope: this,
//                            select: function(value) {
//                                this.fireEvent("calculaImportePagar", value);
//                            }
//                        }
//           
//
//        });
            
             
        
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
//                {
//                        iconCls: 'converter-icon',
//                            text: 'Convertidor...',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("verConvertidor", btn);
//                            }   
//                },
                 '->',
//                 {
//                            iconCls: 'clean-filter-icon',
//                            text: 'Limpiar Filtros',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("cleanFiltersTesoreria", btn);
//                            }
//                  },
//
//                 
//                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Facturas',
                    itemId: 'btnBorrarTesoreria',
                    id: 'btnBorrarTesoreria',
                    name: 'btnBorrarTesoreria',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraFactTes", btn);
                    }

                },
                '-',
                 
                {
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarTesoreria',
                    id: 'btnGuardarTesoreria',
                    name: 'btnGuardarTesoreria',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaTesoreria", btn);
                    }

                }//,
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Quitar',
//                    itemId: 'btnQuitarTesoreria',
//                    id: 'btnQuitarTesoreria',
//                    name: 'btnQuitarTesoreria',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("borraTesoreia", btn);
//                    }
//
//                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_TES',
                    name: 'COMPANIA_TES',
                    id: 'cxpCOMPANIA_TES',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_TES',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_TES',
                    id: 'cxpNUMERO_TES',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 40,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                
                        var referencia = record.data.REFERENCIA_CIE;
                        var cie = record.data.CIE;
                       
        
                            
                             if (cie === '1') {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
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
                    text: 'Tipo',
                    itemId:'bienColumnTesoreria',
                    name:'bienColumnTesoreria',
                    id:'bienColumnTesoreria',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (rec.get('ORIGEN') === 'O') {
                       //       meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
                            return 'rembolso-icon';
                            
                        } else {
                       //     meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
                            return 'xmlGe-icon';
                        }

                    }, 
                    
                      getTip: function(v, meta, rec) {
                        
                        
                        if (rec.get('ORIGEN') === 'O') {
                            
                            return 'Anticipo o Reembolso';
                        }  
                        if (rec.get('ORIGEN') === 'F') {
                            
                            return 'Factura Electronica';
                        }  
                   
                    },
                  
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
                {
                    dataIndex: 'FOLIO_TES',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_TES',
                    id: 'cxpFOLIO_TES',
                    sortable: true,
                    header: 'Folio',
                    width: 50,
                     renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                         
//                          metaData.tdAttr = 'data-qtip="' + value + '"';
//                          return value;
//                
                        var numeroPoliza = record.data.NUMERO_POL;
                        
                      
                            
                             if (!Ext.isEmpty(numeroPoliza)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
                                  return value;
                                 
                             }else{
                            
                          
                                return value;
                             }

                        

                      }
                 
                },
               
                {
                    dataIndex: 'FECHA_TES',
                    name: 'FECHA_TES',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_TES',
                    sortable: true,
                    header: 'Fecha',
                    width: 100,
                     renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                
                        var numeroPoliza = record.data.NUMERO_POL;
                        
                      
                            
                             if (!Ext.isEmpty(numeroPoliza)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
                                  return value;
                                 
                             }else{
                            
                          
                                return value;
                             }

                        

                      }
                 
                },
                
                {
                    dataIndex: 'TIPO_PAGO_TES',
                    name: 'TIPO_PAGO_TES',
                    id: 'cxpTIPO_PAGO_TES',
                    sortable: true,
                    hidden: false,
                    header: 'Tipo Pago',
                    width: 100,
                    field:cboTipoPago,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        
                    //    var monedaPago = record.data.MONEDA_PAGO_TES;
                        
//                         if (Ext.isEmpty(value)) {
//                            return 'N/A';
//                        } else {
                            
                           if (value === 'PAG'){
                               
                                   
                                    return '<b><span style="color:green">Pago Total</span></b>';
              
                           }else{
                               
                               if (value === 'PAR'){
                               
                                   
                                    return '<b><span style="color:blue">Pago Parcial</span></b>';
              
                               }else{
                               
                               
                                return value;

                                }
                               
                              
                           }
                            
                       //   }
                    }
                    
                },
                
                {
                    dataIndex: 'PORCENTAJE_PAGO_TES',
                    name: 'PORCENTAJE_PAGO_TES',
                    id: 'cxpPORCENTAJE_PAGO_TES',
                    sortable: true,
                    hidden: false,
                    header: 'Porcentaje Pago',
                    width: 100,
               //     field:porcentajePago,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        
                    //    var monedaPago = record.data.MONEDA_PAGO_TES;
                        
                         if (Ext.isEmpty(value)) {
                            return value;
                        } else {
                            
                        
                               return value+'%';

                                
                               
                              
                           }
                            
                       //   }
                    }
                    
                },
                
                
                {
                    dataIndex: 'TOTAL_TES',
                    name: 'TOTAL_TES',
                    hidden: false,
                    id: 'cxpTOTAL_TES',
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
                           if (value === 0){
                               
                                return '<span style="color:red">' + Ext.util.Format.usMoney(value) + '</span>';
                               
                           }else{
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                            
                        }
                    },
                    width: 100
                },
                
                {
                    dataIndex: 'TOTAL_PAGAR_TES',
                    name: 'TOTAL_PAGAR_TES',
                    hidden: false,
                    id: 'cxpTOTAL_PAGAR_TES',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    
//                    field: {
//                        xtype: 'numberfield',
//                        allowNegative: true,
//                        allowDecimals: true,
//                        decimalSeparator: '.'
//                    },
                    
                    header: 'Total a Pagar',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                           if (value === 0){
                               
                                return '<span style="color:red">' + Ext.util.Format.usMoney(value) + '</span>';
                               
                           }else{
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                            
                        }
                    },
                    width: 100
                },
                
                
                
                {
                    dataIndex: 'MONEDA_TES',
                    name: 'MONEDA_TES',
                    id: 'cxpMONEDA_TES',
                    sortable: true,
                    hidden: false,
                    header: 'Moneda',
                    width: 100,
                    field:cboMoneda,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        
                        var monedaPago = record.data.MONEDA_PAGO_TES;
                        
                         if (Ext.isEmpty(value)) {
                            return 'N/A';
                        } else {
                            
                           if (value === 'N/A'){
                               
                               if (monedaPago === 'N/A' || Ext.isEmpty(monedaPago)){
                                   
                                    return '<span style="color:red">Falta moneda</span>';
                                   
                               }else{
                                   
                                    return monedaPago;
                                   
                                   
                               }
                               
                               
                           
                           }else{
                               
                               return value;
                               
                              
                           }
                            
                          }
                    }
                    
                },
                {
                    dataIndex: 'RFC_EMISOR_TES',
                    name: 'RFC_EMISOR_TES',
                    id: 'cxpRFC_EMISOR_TES',
                    sortable: true,
                    hidden: false,
                    header: 'Rfc',
                    width: 100
                },
                {
                    dataIndex: 'NOMBRE_EMISOR_TES',
                    name: 'NOMBRE_EMISOR_TES',
                    id: 'cxpNOMBRE_EMISOR_TES',
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 100
                },
                {
                    dataIndex: 'BANCO_PROV',
                    name: 'BANCO_PROV',
                    id: 'cxpBANCO_PROV',
                    sortable: true,
                    hidden: false,
                    header: 'Banco Proveedor',
                    width: 100,
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return 'N/A';
                        } else {
                            
                           if (value === 'N/A'){
                            return '<span style="color:red">Falta valor</span>';
                           }else{
                               
                               return value;
                           }
                            
                          }
                    }
                },
                {
                    dataIndex: 'CTA_CLABE_PROV',
                    name: 'CTA_CLABE_PROV',
                    id: 'cxpCTA_CLABE_PROV',
                    sortable: true,
                    hidden: false,
                    header: 'Cuenta Clabe',
                    width: 100,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        
                       
                        
                        if (Ext.isEmpty(value)) {
                            return 'N/A';
                        } else {
                          if( record.data.CIE !== '1'){  
                           if (value === 'N/A'){
                            return '<span style="color:red">Falta valor</span>';
                           }else{
                               
                               return value;
                           }
                       }
                            
                          }
                    }
                },
                {
                    dataIndex: 'NUMERO_CUENTA_PROV',
                    name: 'NUMERO_CUENTA_PROV',
                    id: 'cxpNUMERO_CUENTA_PROV',
                    sortable: true,
                    hidden: false,
                    header: 'Numero Cuenta',
                    width: 100,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        
                       
                        
                        if (Ext.isEmpty(value)) {
                            return 'N/A';
                        } else {
                          if( record.data.CIE !== '1'){  
                           if (value === 'N/A'){
                            return '<span style="color:red">Falta valor</span>';
                           }else{
                               
                               return value;
                           }
                       }
                            
                          }
                    }
                },
                
                 {
                    dataIndex: 'PAGO_CIE',
                    name: 'PAGO_CIE',
                    id: 'cxpPAGO_CIE',
                    sortable: true,
                    hidden: false,
                    header: 'Pago CIE',
                    width: 100,
                    field: {
                        xtype: 'numberfield',
                        allowBlank: true
                    }
                   
                },
                 {
                    dataIndex: 'REFERENCIA_CIE',
                    name: 'REFERENCIA_CIE',
                    id: 'cxpREFERENCIA_CIE',
                    sortable: true,
                    hidden: false,
                    header: 'Referencia CIE',
                    width: 100,
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 20,
                        enforceMaxLength: true
                    }
                },
                {
                    dataIndex: 'CONCEPTO_CIE',
                    name: 'CONCEPTO_CIE',
                    id: 'cxpCONCEPTO_CIE',
                    sortable: true,
                    hidden: false,
                    header: 'Concepto CIE',
                    width: 100,
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 30,
                        enforceMaxLength: true
                    }
                }
                
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreTesoreria',
                     id: 'statusTesoreia',
                    items: [
                      
                    ]
                })
            ],
            
              viewConfig: {
                  getRowClass: function(record) {
//                    var c = record.get('ESTATUSV');
                    msgOut("cell:");
//                    if (c === '2') {
                         // msgOut("ENTRO"+c);
                    //    return 'price-fall';
//                    } 
//                    if (c === '1') {
//                        return 'price-rise';
//                    }
//                    if(c === '0'){
//                         return 'price-fall';
//                    }
                },
                
                stripeRows: true
              }

        });


        this.callParent(arguments);
    }



});


