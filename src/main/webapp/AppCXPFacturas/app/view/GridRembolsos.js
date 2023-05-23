Ext.define('AppCXPFacturas.view.GridRembolsos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridt',
    itemId: 'gridrembolsos',
    xtype: 'gridrembolsos',
    store: 'StoreRembolsos',
    autoScroll: true,

    height:410,
    
    initComponent: function() {
        var me = this;
        
         var encode = true;
        var local = false;
        
        
        var storeEmpleadoRembolso = Ext.create('AppCXPFacturas.store.StoreEmpleadoRem'); 

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
            
            var cboMoneda = Ext.create('Ext.form.field.ComboBox', {
                
                
                    name: 'cboMonedaRem',
                    id: 'cboMonedaRem',     
                    store: moneda,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'moneda',
                    valueField: 'clave',
                    allowBlank: false
           

        });
            
             
        
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
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarRembolso',
                    id: 'btnGuardarRembolso',
                    name: 'btnGuardarRembolso',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaRembolso", btn);
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
                    dataIndex: 'COMPANIA_TES_REM',
                    name: 'COMPANIA_TES_REM',
                    id: 'cxpCOMPANIA_TES_REM',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_TES_REM',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_TES_REM',
                    id: 'cxpNUMERO_TES_REM',
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
                    dataIndex: 'FOLIO_TES_REM',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_TES_REM',
                    id: 'cxpFOLIO_TES_REM',
                    sortable: true,
                    header: 'Folio',
                    width: 50,
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
                    dataIndex: 'FECHA_TES_REM',
                    name: 'FECHA_TES_REM',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_TES_REM',
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
                    dataIndex: 'TOTAL_TES_REM',
                    name: 'TOTAL_TES_REM',
                    hidden: false,
                    id: 'cxpTOTAL_TES_REM',
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
                    dataIndex: 'MONEDA_TES_REM',
                    name: 'MONEDA_TES_REM',
                    id: 'cxpMONEDA_TES_REM',
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
                    dataIndex: 'RFC_EMISOR_TES_REM',
                    name: 'RFC_EMISOR_TES_REM',
                    id: 'cxpRFC_EMISOR_TES_REM',
                    sortable: true,
                    hidden: false,
                    header: 'Rfc',
                    width: 100
                },
                {
                    dataIndex: 'NOMBRE_EMISOR_TES_REM',
                    name: 'NOMBRE_EMISOR_TES_REM',
                    id: 'cxpNOMBRE_EMISOR_TES_REM',
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 100
                },
                                {
                    xtype: 'gridcolumn',
                    dataIndex: 'EMPLEADO_REM',
                    name: 'EMPLEADO_REM',
                    filterable: true,
                    id: 'detEMPLEADO_REM',
                    sortable: true,
                    header: 'Empleado',
                    width: 200,
                    field: {
                        xtype: 'combobox',
                        name: 'cboEmpleadoRembolsoDet',
                        id: 'cboEmpleadoRembolsoDet',
                        store: storeEmpleadoRembolso,
                        minChars: 4,
                        displayField: 'EMPLEADO',
                        valueField: 'ID_CLIENTE',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro cuenta.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{ID_CLIENTE}</span><h3>{EMPLEADO}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                                this.fireEvent("buscaDatosBancarios", value.valueModels[0].data.CUENTA_CLAVE, value.valueModels[0].data.BANCO);
                            }
                        },
                        pageSize: 10
                    },
                     renderer: function(val, meta, record) {
    
                        var index = storeEmpleadoRembolso.find('ID_CLIENTE', val);
                        if (index > -1) {
                            var record = storeEmpleadoRembolso.getAt(index);
                            return record.get('EMPLEADO');
                        }

                    }


                },
                
                {
                    dataIndex: 'BANCO_PROV_REM',
                    name: 'BANCO_PROV_REM',
                    id: 'cxpBANCO_PROV_REM',
                    sortable: true,
                    hidden: false,
                    header: 'Banco Empleado',
                    width: 100,
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '<span style="color:red">Falta valor</span>';
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
                    dataIndex: 'CTA_CLABE_PROV_REM',
                    name: 'CTA_CLABE_PROV_REM',
                    id: 'cxpCTA_CLABE_PROV_REM',
                    sortable: true,
                    hidden: false,
                    header: 'Cuenta Clabe',
                    width: 100,
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '<span style="color:red">Falta valor</span>';
                        } else {
                            
                           if (value === 'N/A'){
                            return '<span style="color:red">Falta valor</span>';
                           }else{
                               
                               return value;
                           }
                            
                          }
                    }
                }
                 
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreRembolsos',
                     id: 'statusRembolso',
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
                        return 'price-fall';
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


