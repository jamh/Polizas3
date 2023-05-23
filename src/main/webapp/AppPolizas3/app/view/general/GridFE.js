Ext.define('AppPolizas3.view.general.GridFE', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfe',
    itemId: 'gridfe',
    xtype: 'gridfe',
    store: 'StoreFE',
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
                                me.fireEvent("cleanFiltersFE", btn);
                            }
                  },

                 
                '-',
                {
                    iconCls: 'save-icon',
                    text: 'Guardar Relacion',
                    itemId: 'btnGuardarRelacion',
                    id: 'btnGuardarRelacion',
                    name: 'btnGuardarRelacion',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardarFERelacion", btn);
                    }

                },
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Relacion',
                    itemId: 'btnQuitarRelacion',
                    id: 'btnQuitarRelacion',
                    name: 'btnQuitarRelacion',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borraFERelacion", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'masFECOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_FE',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_FE',
                    id: 'masFENUMERO_FE',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 40,
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
                    dataIndex: 'FOLIO',
                    hidden: false,
                    filterable: true,
                   
                    name: 'FOLIO',
                    id: 'masFEFOLIO',
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
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'masFEFECHA',
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
                    dataIndex: 'SERIE',
                     filterable: true,
                    name: 'SERIE',
                    hidden: false,
                    id: 'masFESERIE',
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
                    dataIndex: 'RFC_EMISOR',
                    name: 'RFC_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'masFERFC_EMISOR',
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
                    dataIndex: 'NOMBRE_EMISOR',
                    name: 'NOMBRE_EMISOR',
                     filterable: true,
                    hidden: false,
                    id: 'masFENOMBRE_EMISOR',
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
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    hidden: false,
                    id: 'masFESUBTOTAL',
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
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    hidden: false,
                    id: 'masFETOTAL',
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
                    dataIndex: 'NUMERO_POL',
                    name: 'NUMERO_POL',
                     filterable: true,
                    hidden: true,
                    id: 'masFENUMERO_POL',
                    sortable: true,
                    header: 'Numero Poliza',
                    width: 180
                }
                       


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFE'
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


