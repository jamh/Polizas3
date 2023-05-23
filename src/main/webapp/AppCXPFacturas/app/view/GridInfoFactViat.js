Ext.define('AppCXPFacturas.view.GridInfoFactViat', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridinfofactviat',
    itemId: 'gridinfofactviat',
    xtype: 'gridinfofactviat',
    store: 'StoreInfoFactViat',
    autoScroll: true,
    region: 'south',
    collapsed:false,
    split: true,
    collapsible: true,
    title: 'Comprobacion de Viaticos',
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
//                '->',
////                 
//                {
//                   // iconCls: 'see-icon',
//                    iconCls: 'add-icon',
//                    text: 'Agregar Archivo',
//                    itemId: 'btnAddArchivosOtras',
//                    id: 'btnAddArchivosOtras',
//                    name: 'btnAddArchivosOtras',
//                    hidden:false,
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("addArchivoOtras", btn);
//                    }
//
//                }//,


            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_COMP_VIA',
                    name: 'COMPANIA_COMP_VIA',
                    id: 'cxpCOMPANIA_COMP_VIA',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_COMP_VIA',
                   
                    hidden: false,
                     filterable: true,
                 //     xtype:'actioncolumn',
                    filter: {
                        type: 'numeric'
                    },
                    name: 'NUMERO_COMP_VIA',
                    id: 'cxpNUMERO_COMP_VIA',
                    sortable: true,
                    header: 'Numero',
                  //  tdCls: 'x-change-cell',
                    width: 100

                 

                },

                {
                    dataIndex: 'NOMBRE_GASTO_COMP_VIA',
                    name: 'NOMBRE_GASTO_COMP_VIA',
                    id: 'cxpNOMBRE_GASTO_COMP_VIA',
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
                    dataIndex: 'FOLIO_COMP_VIA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    name: 'FOLIO_COMP_VIA',
                    id: 'cxpFOLIO_COMP_VIA',
                    sortable: true,
                    header: 'Folio',
                    width: 50//,

                 
                },
               
                {
                    dataIndex: 'FECHA_COMP_VIA',
                    name: 'FECHA_COMP_VIA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'cxpFECHA_COMP_VIA',
                    sortable: true,
                    header: 'Fecha',
                    width: 100//,

                },
                
                
                
               
                {
                    dataIndex: 'RFC_COMP_VIA',
                    name: 'RFC_COMP_VIA',
                    id: 'cxpRFC_COMP_VIA',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    header: 'Rfc',
                    width: 150
                },
                {
                    dataIndex: 'NOMBRE_COMP_VIA',
                    name: 'NOMBRE_COMP_VIA',
                    id: 'cxpNOMBRE_COMP_VIA',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 700
                },
                {
                    dataIndex: 'SUBTOTAL_COMP_VIA',
                    name: 'SUBTOTAL_COMP_VIA',
                    hidden: false,
                    id: 'cxpSUBTOTAL_COMP_VIA',
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
                    dataIndex: 'TOTAL_COMP_VIA',
                    name: 'TOTAL_COMP_VIA',
                    hidden: false,
                    id: 'cxpTOTAL_COMP_VIA',
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
                    store: 'StoreInfoFactViat',
                     id: 'statusCompXVInfo',
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




