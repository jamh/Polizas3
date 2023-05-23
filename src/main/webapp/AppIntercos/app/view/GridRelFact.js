Ext.define('AppIntercos.view.GridRelFact', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridrelfact',
    itemId: 'gridrelfact',
    xtype: 'gridrelfact',
    store: 'StoreRelFact',
    autoScroll: true,

    height:410,
    
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
        
        var saldos = Ext.create('Ext.toolbar.TextItem', {id: 'idSaldo', text: ''});
        
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
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("cleanFiltersCXP", btn);
                            }
                  },

                 
                '-',
                {
                    iconCls: 'save-icon',
                    text: 'Guardar Relacion CXP',
                    itemId: 'btnGuardarRelacionCxp',
                    id: 'btnGuardarRelacionCxp',
                    name: 'btnGuardarRelacionCxp',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardarCXPRelacion", btn);
                    }

                },
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Relacion',
                    itemId: 'btnQuitarRelacionCxp',
                    id: 'btnQuitarRelacionCxp',
                    name: 'btnQuitarRelacionCxp',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraCXPRelacion", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_FACT',
                    name: 'COMPANIA_FACT',
                    id: 'cxpRelCOMPANIA_FACT',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_FACT',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_FACT',
                    id: 'cxpRelFENUMERO_FACT',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 40,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                
                        var numFactReal = record.data.NUM_FACTURA_REL;
                        var docSecRel = record.data.DOC_SEC_REL;
                        var numDocReal = record.data.NUM_DOCUMENTO_REL;
                        var factSecRel = record.data.FACT_SEC_REL;
        
                            
                             if (!Ext.isEmpty(numFactReal)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
                                  return value;
                                 
                             }else{
                            
                                  if (!Ext.isEmpty(numDocReal)) {
                                 
                                        // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                         metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
                                          return value;

                                     }else{


                                        return value;
                                     }
                               
                             }

                        

                      }
                 

                },
                {
                    dataIndex: 'FOLIO_FACT',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_FACT',
                    id: 'cxpRelFOLIO_FACT',
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
                    dataIndex: 'FECHA_FACT',
                    name: 'FECHA_FACT',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpRelFECHA_FACT',
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
                    dataIndex: 'SERIE_FACT',
                     filterable: true,
                    name: 'SERIE_FACT',
                    hidden: false,
                    id: 'cxpRelSERIE_FACT',
                    sortable: true,
                    header: 'Serie',
                    width: 60,
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
                    dataIndex: 'RFC_EMISOR_FACT',
                    name: 'RFC_EMISOR_FACT',
                     filterable: true,
                    hidden: false,
                    id: 'cxpRelRFC_EMISOR_FACT',
                    sortable: true,
                    header: 'RFC Emisor',
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
                    dataIndex: 'NOMBRE_EMISOR_FACT',
                    name: 'NOMBRE_EMISOR_FACT',
                     filterable: true,
                    hidden: false,
                    id: 'cxpRelNOMBRE_EMISOR_FACT',
                    sortable: true,
                    header: 'Nombre Emisor',
                    width: 180,
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
                    dataIndex: 'SUBTOTAL_FACT',
                    name: 'SUBTOTAL_FACT',
                    hidden: false,
                    id: 'cxpRelSUBTOTAL_FACT',
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
                    dataIndex: 'TOTAL_SIN_MOV',
                    name: 'TOTAL_SIN_MOV',
                    hidden: false,
                    id: 'cxpRelTOTAL_SIN_MOV',
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
                    dataIndex: 'TOTAL_FACT',
                    name: 'TOTAL_FACT',
                    hidden: false,
                    id: 'cxpRelTOTAL_FACT',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Total a Pagar',
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
                    dataIndex: 'SALDOS_CXP_FACT',
                    name: 'SALDOS_CXP_FACT',
                    hidden: false,
                    id: 'cxpRelSALDOS_CXP_FACT',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'Saldo',
                    align: 'right',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                
                       if (!Ext.isEmpty(value)){
                           return '<span style="color:green">' + Ext.util.Format.usMoney(value) + '</span>';
                       }else{
                           
                           return '<span style="color:green">' + Ext.util.Format.usMoney(record.data.TOTAL_FACT) + '</span>';
                       }
                
//                        var importeFact = record.data.IMPORTE_FACT;
//                        var importeDoc = record.data.IMPORTE_DOC;
//                        var totalFact = record.data.TOTAL_FACT;
//                        var tipoComprbante = record.data.TIPO_DE_COMPROBANTE_FACT;
//                        
//                        if (Ext.isEmpty(importeFact)){
//                            
//                            if (Ext.isEmpty(importeDoc)){
//                                
//                                return '<span style="color:blue">' + Ext.util.Format.usMoney(totalFact) + '</span>';
//                            }else{
//                                
//                                 if (tipoComprbante === 'egreso' && importeDoc >= 0 ){
//                                
//                                  return '<span style="color:blue">' + Ext.util.Format.usMoney(importeDoc) + '</span>';
//                                
//                            }
//                                
//                             if (tipoComprbante === 'egreso' && importeDoc <= 0 ){
//                                    
//                                  return '<span style="color:blue">' + Ext.util.Format.usMoney(0) + '</span>';
//                                    
//                             }
//                             
//                             if (tipoComprbante === 'ingreso' && importeDoc >= 0 ){
//                                 
//                                 var totalFact = totalFact * -1;
//                                 
//                                 return '<span style="color:blue">' + Ext.util.Format.usMoney(totalFact) + '</span>';
//                             }
//                             if (tipoComprbante === 'ingreso' && importeDoc <= 0 ){
//     
//                                 return '<span style="color:blue">' + Ext.util.Format.usMoney(importeDoc) + '</span>';
//                             }
//                                
//                                
//                                
//                               return '<span style="color:blue">' + Ext.util.Format.usMoney() + '</span>';
//                               
//                                
//                            }
//                            
//                            
//                            
//                        }else{
//                            
//                             if (tipoComprbante === 'egreso' && importeFact >= 0 ){
//                                
//                                  return '<span style="color:blue">' + Ext.util.Format.usMoney(importeFact) + '</span>';
//                                
//                            }
//                                
//                             if (tipoComprbante === 'egreso' && importeFact <= 0 ){
//                                    
//                                  return '<span style="color:blue">' + Ext.util.Format.usMoney(0) + '</span>';
//                                    
//                             }
//                             
//                             if (tipoComprbante === 'ingreso' && importeFact >= 0 ){
//                                 
//                                 var totalFact = totalFact * -1;
//                                 
//                                 return '<span style="color:blue">' + Ext.util.Format.usMoney(totalFact) + '</span>';
//                             }
//                             if (tipoComprbante === 'ingreso' && importeFact <= 0 ){
//     
//                                 return '<span style="color:blue">' + Ext.util.Format.usMoney(importeFact) + '</span>';
//                             }
//                                
//                             
//                                
//                                
//                                
//                            
//                            
//                           
//                            
//                            
//                            
//                        }
//                        
       
                        

                      },
//                    renderer: function(value) {
//                        if (Ext.isEmpty(value)) {
//                            return '0';
//                        } else {
//                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
//                        }
//                    },
                    width: 100
                }
                        
                 


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreRelFact',
                     id: 'statusRelacion',
                    items: [
                        '->',
                        saldos

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


