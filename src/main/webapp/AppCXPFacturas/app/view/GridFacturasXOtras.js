Ext.define('AppCXPFacturas.view.GridFacturasXOtras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfacturasxotras',
    itemId: 'gridfacturasxotras',
    xtype: 'gridfacturasxotras',
    store: 'StoreFacturasXOtras',
    autoScroll: true,
    region: 'center',
   // flex:7,

    height:420,
    
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
                    text: 'Quitar Relacion',
                    itemId: 'btnBorrarRelFactOtr',
                    id: 'btnBorrarRelFactOtr',
                    name: 'btnBorrarRelFactOtr',
                    hidden:true,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("eliminaRelFactOtras", btn);
                    }

                },
                '-',
                 
                {
                    iconCls: 'save-icon',
                    text: 'Guardar Relacion',
                    itemId: 'btnGuardarFactOtras',
                    id: 'btnGuardarFactOtras',
                    name: 'btnGuardarFactOtras',
                    hidden:true,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaRelFactOtras", btn);
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
                    dataIndex: 'COMPANIA_REL',
                    name: 'COMPANIA_REL',
                    id: 'cxpCOMPANIA_REL',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_REL',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_REL',
                    id: 'cxpNUMERO_REL',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 40
//                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
//                
//                        var referencia = record.data.REFERENCIA_CIE;
//                        var cie = record.data.CIE;
//                       
//        
//                            
//                             if (cie === '1') {
//                                 
//                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
//                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
//                                  return value;
//                                 
//                             }else{
//                            
//                        
//                                        return value;
//                                     
//                               
//                             }
//
//                        
//
//                      }
                 

                },
//                   {
//                    menuDisabled: true,
//                    sortable: false,
//                    xtype:'actioncolumn',
//                    text: 'Tipo',
//                    itemId:'bienColumnRelacion',
//                    name:'bienColumnRelacion',
//                    id:'bienColumnRelacion',
//                    width: 50,
//                    tdCls: 'x-change-cell',
//                    items: [
//
//                    {
//                    getClass: function(v, meta, rec) {          
//                        if (rec.get('ORIGEN_REL') === 'O') {
//                       //       meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
//                            return 'rembolso-icon';
//                            
//                        } else {
//                       //     meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
//                            return 'xmlGe-icon';
//                        }
//
//                    }, 
//                    
//                      getTip: function(v, meta, rec) {
//                        
//                        
//                        if (rec.get('ORIGEN_REL') === 'O') {
//                            
//                            return 'Anticipo o Reembolso';
//                        }  
//                        if (rec.get('ORIGEN_REL') === 'F') {
//                            
//                            return 'Factura Electronica';
//                        }  
//                   
//                    },
//                  
//                    handler: function(grid, rowIndex, colIndex) {
//                        var rec =  grid.getStore().getAt(rowIndex);
//                        
//                    }
//                }]
//             } ,
                {
                    dataIndex: 'NOMBRE_GASTO_REL',
                    name: 'NOMBRE_GASTO_REL',
                    id: 'cxpNOMBRE_GASTO_REL',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    header: 'Tipo',
                    width: 150,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                       var numerorel = record.data.NUM_RELACION_FE;
                        
                      
                            
                       if (!Ext.isEmpty(numerorel)) { 
                  
                        
                          metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
                          return value;
                                 
                        }else{
                            return value;
        
                        }
                        

                      }
                },
                
                
             
                {
                    dataIndex: 'FOLIO_REL',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_REL',
                    id: 'cxpFOLIO_REL',
                    sortable: true,
                    header: 'Folio',
                    width: 50//,
//                     renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
//                
//                        var numeroPoliza = record.data.NUMERO_POL;
//                        
//                      
//                            
//                             if (!Ext.isEmpty(numeroPoliza)) {
//                                 
//                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
//                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
//                                  return value;
//                                 
//                             }else{
//                            
//                          
//                                return value;
//                             }
//
//                        
//
//                      }
                 
                },
               
                {
                    dataIndex: 'FECHA_REL',
                    name: 'FECHA_REL',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_REL',
                    sortable: true,
                    header: 'Fecha',
                    width: 100//,
//                     renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
//                
//                        var numeroPoliza = record.data.NUMERO_POL;
//                        
//                      
//                            
//                             if (!Ext.isEmpty(numeroPoliza)) {
//                                 
//                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
//                                 metaData.tdAttr = 'style="background-color:#b0e987;color:black;"';
//                                  return value;
//                                 
//                             }else{
//                            
//                          
//                                return value;
//                             }
//
//                        
//
//                      }
                 
                },
                
                {
                    dataIndex: 'TOTAL_REL',
                    name: 'TOTAL_REL',
                    hidden: false,
                    id: 'cxpTOTAL_REL',
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
                    dataIndex: 'RFC_REL',
                    name: 'RFC_REL',
                    id: 'cxpRFC_REL',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    header: 'Rfc',
                    width: 150
                },
                {
                    dataIndex: 'NOMBRE_REL',
                    name: 'NOMBRE_REL',
                    id: 'cxpNOMBRE_REL',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 400
                }
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFacturasXOtras',
                     id: 'statusFXO',
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


