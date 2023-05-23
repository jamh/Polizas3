Ext.define('AppIntercos.view.GridFactCan', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfactcan',
    itemId: 'gridfactcan',
    xtype: 'gridfactcan',
    store: 'StoreFactCan',
    autoScroll: true,
    region: 'center',
    flex:7,

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
        

            
       var storecboFolioGe = Ext.create('AppIntercos.store.StoreCboFolioGeCan'); 
              
        
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
                
                   {
                    xtype: 'combobox',
                    id: 'cboFolioGe',
                    fieldLabel: 'Folio',
                    name: 'cboFolioGeCxp',
                    itemId: 'cboFolioGeCxp',
                    displayField: 'FOLIO_NOM',
                    valueField: 'FOLIO',              
                    typeAhead: true,
                    minChars: 0,
                   // size:2,
                   width:300,
                   labelWidth:60,
                    editable:false,
                    store: storecboFolioGe,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            
                            this.fireEvent("buscaFoliosCan", valor.value);
                          
                        }
                     }
                },
                
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
                    iconCls: 'search-icon',
                    text: 'Ver Archivo Adjunto',
                    itemId: 'btnDetalleCanTesoreria',
                    id: 'btnDetalleCanTesoreria',
                    name: 'btnDetalleCanTesoreria',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("imprimirArchivoCan", btn);
                    }

                }
                
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
                    dataIndex: 'COMPANIA_FOL_CAN',
                    name: 'COMPANIA_FOL_CAN',
                    id: 'cxpCOMPANIA_FOL_CAN',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'FOLIO_FOL_CAN',
                    name: 'FOLIO_FOL_CAN',
                    id: 'cxpFOLIO_FOL_CAN',
                    sortable: true,
                    hidden: true,
                    header: 'folio',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_FOL_CAN',
                    name: 'NUMERO_FOL_CAN',
                    id: 'cxpNUMERO_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Numero',
                    width: 100
                },
//                 {
//                    menuDisabled: true,
//                    sortable: false,
//                    xtype:'actioncolumn',
//                    text: 'Tipo',
//                    itemId:'bienColumnGeCan',
//                    name:'bienColumnGeCan',
//                    id:'bienColumnGeCan',
//                    width: 50,
//                    tdCls: 'x-change-cell',
//                    items: [
//
//                    {
//                    getClass: function(v, meta, rec) {          
//                        if (rec.get('ORIGEN_FOL') === 'O' || rec.get('ORIGEN_FOL') === 'V' ) {
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
//                        if (rec.get('ORIGEN_FOL') === 'O') {
//                            
//                            return 'Anticipo o Reembolso';
//                        }  
//                        if (rec.get('ORIGEN_FOL') === 'F') {
//                            
//                            return 'Factura Electronica';
//                        } 
//                        if (rec.get('ORIGEN_FOL') === 'V') {
//                            
//                            return 'Viaticos';
//                        } 
//                   
//                    },
//                  
//                    handler: function(grid, rowIndex, colIndex) {
//                        var rec =  grid.getStore().getAt(rowIndex);
//                        
//                    }
//                }]
//             } 

                 {
                    dataIndex: 'FOLIO_FACT_FOL_CAN',
                    name: 'FOLIO_FACT_FOL_CAN',
                    id: 'cxpFOLIO_FACT_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Folio Fact.',
                    width: 100
                },
                {
                    dataIndex: 'FECHA_FACT_FOL_CAN',
                    name: 'FECHA_FACT_FOL_CAN',
                    id: 'cxpFECHA_FACT_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Fecha Fact.',
                    width: 100
                },
                {
                    dataIndex: 'TOTAL_FACT_FOL_CAN',
                    name: 'TOTAL_FACT_FOL_CAN',
                    id: 'cxpTOTAL_FACT_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Total Fact.',
                    width: 120,
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
                    }
                    
                },
                {
                    dataIndex: 'NOMBRE_FOL_CAN',
                    name: 'NOMBRE_FOL_CAN',
                    id: 'cxpNOMBRE_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Nombre Provedor',
                    width: 250
                },
                {
                    dataIndex: 'RFC_FOL_CAN',
                    name: 'RFC_FOL_CAN',
                    id: 'cxpRFC_FOL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Rfc Proveedor',
                    width: 100
                },
                {
                    dataIndex: 'MOT_CAN',
                    name: 'MOT_CAN',
                    id: 'cxpMOT_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'Motivo Cancelacion',
                    
                    width: 300
                },
                {
                    dataIndex: 'URL_CAN',
                    name: 'URL_CAN',
                    id: 'cxpURL_CAN',
                    sortable: true,
                    hidden: false,
                    header: 'URL',
                    
                    width: 300
                }
                
                
                
                
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFactCan',
                     id: 'statusFactCan',
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


