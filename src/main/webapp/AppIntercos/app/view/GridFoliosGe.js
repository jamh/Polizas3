Ext.define('AppIntercos.view.GridFoliosGe', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfoliosge',
    itemId: 'gridfoliosge',
    xtype: 'gridfoliosge',
    store: 'StoreFoliosGe',
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
        

            
       var storecboFolioGe = Ext.create('AppIntercos.store.StoreCboFolioGe'); 
              
        
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
                    name: 'cboFolioGe',
                    itemId: 'cboFolioGe',
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
                            
                            this.fireEvent("buscaFolios", valor.value);
                          
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
                    iconCls: 'delete-icon',
                    text: 'Quitar Facturas',
                    itemId: 'btnBorrarTesoreria',
                    id: 'btnBorrarTesoreria',
                    name: 'btnBorrarTesoreria',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("eliminarFactFol", btn);
                    }

                },
                '-',
                 
                {
                    iconCls: 'checkall-icon',
                    text: 'Liberar a Tesoreria',
                    itemId: 'btnEnviaTesoreria',
                    id: 'btnEnviaTesoreria',
                    name: 'btnEnviaTesoreria',
                    hidden:true,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("enviaTesoreria", btn);
                    }

                },
                {
                    iconCls: 'pdf-icon',
                    text: 'Imprimir PDF',
                    itemId: 'btnPdfFolio',
                    id: 'btnPdfFolio',
                    name: 'btnPdfFolio',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("imprimirPdfFolio", btn);
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
                    dataIndex: 'COMPANIA_FOL',
                    name: 'COMPANIA_FOL',
                    id: 'cxpCOMPANIA_FOL',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'FOLIO_FOL',
                    name: 'FOLIO_FOL',
                    id: 'cxpFOLIO_FOL',
                    sortable: true,
                    hidden: true,
                    header: 'folio',
                    width: 100
                },
                {
                    dataIndex: 'NUMERO_FOL',
                    name: 'NUMERO_FOL',
                    id: 'cxpNUMERO_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Numero',
                    width: 100
                },
                 {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'Tipo',
                    itemId:'bienColumnGe',
                    name:'bienColumnGe',
                    id:'bienColumnGe',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (rec.get('ORIGEN_FOL') === 'O' || rec.get('ORIGEN_FOL') === 'V' ) {
                       //       meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
                            return 'rembolso-icon';
                            
                        } else {
                       //     meta.tdAttr = 'style="background-color:#FFFFFF;color:black;"';
                            return 'xmlGe-icon';
                        }

                    }, 
                    
                      getTip: function(v, meta, rec) {
                        
                        
                        if (rec.get('ORIGEN_FOL') === 'O') {
                            
                            return 'Anticipo o Reembolso';
                        }  
                        if (rec.get('ORIGEN_FOL') === 'F') {
                            
                            return 'Factura Electronica';
                        } 
                        if (rec.get('ORIGEN_FOL') === 'V') {
                            
                            return 'Viaticos';
                        } 
                   
                    },
                  
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
                
                {
                    dataIndex: 'FOLIO_FACT_FOL',
                    name: 'FOLIO_FACT_FOL',
                    id: 'cxpFOLIO_FACT_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Folio Fact.',
                    width: 100
                },
                {
                    dataIndex: 'FECHA_FACT_FOL',
                    name: 'FECHA_FACT_FOL',
                    id: 'cxpFECHA_FACT_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Fecha Fact.',
                    width: 100
                },
                {
                    dataIndex: 'TOTAL_FACT_FOL',
                    name: 'TOTAL_FACT_FOL',
                    id: 'cxpTOTAL_FACT_FOL',
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
                    dataIndex: 'TOTAL_A_PAGAR_FOL',
                    name: 'TOTAL_A_PAGAR_FOL',
                    id: 'cxpTOTAL_A_PAGAR_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Total A Pagar.',
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
                    dataIndex: 'NOMBRE_FOL',
                    name: 'NOMBRE_FOL',
                    id: 'cxpNOMBRE_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Nombre Provedor',
                    width: 250
                },
                {
                    dataIndex: 'RFC_FOL',
                    name: 'RFC_FOL',
                    id: 'cxpRFC_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Rfc Proveedor',
                    width: 100
                },
                {
                    dataIndex: 'CUENTA_CLABE_FOL',
                    name: 'CUENTA_CLABE_FOL',
                    id: 'cxpCUENTA_CLABE_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Cuenta Clabe',
                    width: 100
                },
                {
                    dataIndex: 'BANCO_FOL',
                    name: 'BANCO_FOL',
                    id: 'cxpBANCO_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Banco',
                    width: 100
                },
                {
                    dataIndex: 'PAGO_CIE_FOL',
                    name: 'PAGO_CIE_FOL',
                    id: 'cxpPAGO_CIE_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Pago Cie',
                    width: 100
                },
                {
                    dataIndex: 'REFERENCIA_CIE_FOL',
                    name: 'REFERENCIA_CIE_FOL',
                    id: 'cxpREFERENCIA_CIE_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Referencia Cie',
                    width: 100
                },
                {
                    dataIndex: 'CONCEPTO_CIE_FOL',
                    name: 'CONCEPTO_CIE_FOL',
                    id: 'cxpCONCEPTO_CIE_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Concepto Cie',
                    width: 100
                },
                {
                    dataIndex: 'ESTATUS_FOL',
                    name: 'ESTATUS_FOL',
                    id: 'cxpESTATUS_FOL',
                    sortable: true,
                    hidden: false,
                    header: 'Estatus Folio',
                    width: 100,
                    renderer: function(value) {
                        if (value === 'PAG') {
                            return '<span style="color:green;font-weight: bold">Pago Total</span>';
                        
                        } else if (Ext.isEmpty(value)) {
                            return '<span style="color:red;font-weight: bold">Sin Pagar</span>';
                         } else if (value === 'ET') {
                            return '<span style="color:blue;font-weight: bold">Enviado a Tesoreria</span>';
                         } else if (value === 'GE') {
                            return '<span style="color:gold;font-weight: bold">Impreso</span>';
                       
                         } else if (value === 'CAN') {
                            return '<span style="color:brown;font-weight: bold">Cancelada</span>';
                            
                         } else if (value === 'FG') {
                            return '<span style="color:#380B61;font-weight: bold">Folio Generado</span>';
                         

                        } else {
                            return value;
                        }

                    }
                }
                
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFoliosGe',
                     id: 'statusFolioGE',
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


