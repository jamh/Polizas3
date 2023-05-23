Ext.define('AppCXPFacturas.view.GridInfoFactOtras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridinfofactotras',
    itemId: 'gridinfofactotras',
    xtype: 'gridinfofactotras',
    store: 'StoreInfoFactOtras',
    autoScroll: true,
    region: 'south',
    collapsed:false,
    split: true,
    collapsible: true,
    title: 'Comprobacion de Gasto',
   // flex:7,

   // height:420,
    
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
//
//                 '->',
//
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Quitar Relacion',
//                    itemId: 'btnBorrarRelFactOtr',
//                    id: 'btnBorrarRelFactOtr',
//                    name: 'btnBorrarRelFactOtr',
//                    hidden:true,
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("eliminaRelFactOtras", btn);
//                    }
//
//                },
                '->',
////                 
                {
                    iconCls: 'see-icon',
                  //  iconCls: 'add-icon',
                    text: 'Ver Comprobante',
                    itemId: 'btnVerArchivosOtrasInfo',
                    id: 'btnVerArchivosOtrasInfo',
                    name: 'btnVerArchivosOtrasInfo',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("verArchivoOtrasInfo", btn);
                    }

                }//,


            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_REL_INFO',
                    name: 'COMPANIA_REL_INFO',
                    id: 'cxpCOMPANIA_REL_INFO',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_REL_INFO',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_REL_INFO',
                    id: 'cxpNUMERO_REL_INFO',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 100

                 

                },

                {
                    dataIndex: 'NOMBRE_GASTO_REL_INFO',
                    name: 'NOMBRE_GASTO_REL_INFO',
                    id: 'cxpNOMBRE_GASTO_REL_INFO',
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
                    dataIndex: 'FOLIO_REL_INFO',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_REL_INFO',
                    id: 'cxpFOLIO_REL_INFO',
                    sortable: true,
                    header: 'Folio',
                    width: 50//,

                 
                },
               
                {
                    dataIndex: 'FECHA_REL_INFO',
                    name: 'FECHA_REL_INFO',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_REL_INFO',
                    sortable: true,
                    header: 'Fecha',
                    width: 100//,

                },
                
                
                
               
                {
                    dataIndex: 'RFC_REL_INFO',
                    name: 'RFC_REL_INFO',
                    id: 'cxpRFC_REL_INFO',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    header: 'Rfc',
                    width: 150
                },
                {
                    dataIndex: 'NOMBRE_REL_INFO',
                    name: 'NOMBRE_REL_INFO',
                    id: 'cxpNOMBRE_REL_INFO',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 700
                },
                {
                    dataIndex: 'SUBTOTAL_REL_INFO',
                    name: 'SUBTOTAL_REL_INFO',
                    hidden: false,
                    id: 'cxpSUBTOTAL_REL_INFO',
                    sortable: true,
                     filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'SubTotal',
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
                    dataIndex: 'TOTAL_REL_INFO',
                    name: 'TOTAL_REL_INFO',
                    hidden: false,
                    id: 'cxpTOTAL_REL_INFO',
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
                }
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreInfoFactOtras',
                     id: 'statusFXOInfo',
                    items: [
                      
                    ]
                })
            ],
            
              viewConfig: {
                  getRowClass: function(record) {

                },
                
                stripeRows: true
              }

        });


        this.callParent(arguments);
    }



});




