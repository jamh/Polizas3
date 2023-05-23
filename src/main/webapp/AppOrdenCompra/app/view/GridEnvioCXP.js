Ext.define('AppOrdenCompra.view.GridEnvioCXP', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridenviocxp',
    itemId: 'gridenviocxp',
    xtype: 'gridenviocxp',
    flex: 1,
     title: 'Facturas Relacionadas',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StoreFacturasOrdenCXP',
    initComponent: function () {
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



       // var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
     
       
       
   
//       var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
//       
//            clicksToEdit: 1
//        });


//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 2
//
//        });

        Ext.apply(me, {
            features: [filters],
            plugins: [
           //     cellEditing2
            ],
            tbar: [
                {
                            iconCls: 'pdf-icon',
                            text: 'Ver Factura',
                            itemId: 'imprimirFactOrdenCXP',
                            id: 'imprimirFactOrdenCXP',
                            name: 'imprimirFactOrdenCXP',
                            handler: function(btn) {
                                me.fireEvent("verFacturaCXP", btn);
                            }                            
                        },
                        
                 {
                            iconCls: 'pdf-icon',
                            text: 'Ver Orden de Compra',
                            itemId: 'imprimirFactOrdenCompCXP',
                            id: 'imprimirFactOrdenCompCXP',
                            name: 'imprimirFactOrdenCompCXP',
                            handler: function(btn) {
                                me.fireEvent("verArchivoOrdenCXP", btn);
                            }                            
                        },
  
                '->',
                
                {
                           // iconCls: 'pdf-icon',
                            text: 'Enviar a CXP',
                            itemId: 'sendCXP',
                            id: 'sendCXP',
                            name: 'sendCXP',
                            handler: function(btn) {
                                me.fireEvent("enviarFactCXP", btn);
                            }                            
                        }
//                {
//                    iconCls: 'save-icon',
//                    text: 'Guardar Relacion',
//                    itemId: 'btnGuardarRel',
//                    id: 'btnGuardarRel',
//                    name: 'btnGuardarRel',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("saveRel", btn);
//                    }
//
//                }
            
                //
                ////,
//                {
//                    iconCls: 'clean-filter-icon',
//                    text: 'Limpiar Filtros',
//                    handler: function (btn) {
//                        // msgOut('Excel');
//                        me.fireEvent("cleanFiltersMst", btn);
//                    }
//                },
//                 {
//                    iconCls: 'add-icon',
//                    text: 'Agregar',
//                    itemId: 'btnAgregarOrden',
//                    id: 'btnAgregarOrden',
//                    name: 'btnAgregarOrden',
//                    scope: this,
//                    handler: function(btn) {
//
//                        this.fireEvent("addOrden", btn, cellEditing2);
//                    }
//
//
//                }
//                  {
//                    xtype: 'checkboxfield',
//                    boxLabel: 'Buscar Remotamente',
//                    name: 'copiBuscar',
//                   // dock: 'bottom',
//                    inputValue: '0',
//                    id: 'copiBuscar',
//                    itemId: 'copiBuscar'                    
//                },

             
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUMERO_FE',
                    name: 'NUMERO_FE',
                    id: 'facturaNUMERO_FE_CXP',
                    sortable: true,
                    header: 'Id',
                    hidden: false,
                    flex: 1,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                       var numerorel = record.data.ID_ORDEN_DET;
                        
                      
                            
                       if (!Ext.isEmpty(numerorel)) { 
                  
                        
                          metaData.tdAttr = 'style="background-color:#04B4AE;color:black;"';
                          return value;
                                 
                        }else{
                            return value;
        
                        }
                        

                      }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ORDEN',
                    name: 'ID_ORDEN',
                    id: 'facturaID_ORDEN_CXP',
                    sortable: true,
                    header: 'ID_ORDEN',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID_ORDEN_DET',
                    name: 'ID_ORDEN_DET',
                    id: 'facturaID_ORDEN_DET_CXP',
                    sortable: true,
                    header: 'ID_ORDEN_DET',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ORIGEN',
                    name: 'ORIGEN',
                    id: 'facturaORIGEN_CXP',
                    sortable: true,
                    header: 'ORIGEN',
                    hidden: false,
                    flex: 1,
                    renderer: function(value) {
                        if (value === 'FE') {
                            return '<span style="color:green;font-weight: bold">NACIONAL</span>';
                         } else if (value === 'OTR') {
                            return '<span style="color:blue;font-weight: bold">EXTRANJERO</span>';
                        } else {
                            return value;
                        }

                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    id: 'facturaFECHA_CXP',
                    sortable: true,
                    header: 'FECHA',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOM_PROVEEDOR',
                    name: 'NOM_PROVEEDOR',
                    id: 'facturaNOM_PROVEEDOR_CXP',
                    sortable: true,
                    header: 'NOM_PROVEEDOR',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MONEDA',
                    name: 'MONEDA',
                    id: 'facturaMONEDA_CXP',
                    sortable: true,
                    header: 'MONEDA',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    id: 'facturaSUBTOTAL_CXP',
                    sortable: true,
                    header: 'SUBTOTAL',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'IVA',
                    name: 'IVA',
                    id: 'facturaIVA_CXP',
                    sortable: true,
                    header: 'IVA',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    id: 'facturaTOTAL_CXP',
                    sortable: true,
                    header: 'TOTAL',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CONCEPTO',
                    name: 'CONCEPTO',
                    id: 'facturaCONCEPTO_CXP',
                    sortable: true,
                    header: 'CONCEPTO',
                    hidden: false,
                    flex: 1
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Seleccionar',
                    sortable: false,
                    dataIndex: 'ESTATUS_CXP',
                    name:'ESTATUS_CXP',
                    id: 'FLAG_ESTATUS_CXP',
                    
                      listeners: {
                        scope: this,
                        beforecheckchange: function(col, index, checked) { 
                            
                        
                        }
                     }
                  
                    
                }
                
              
               




            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFacturasOrdenCXP'
                })

            ]

        });


        this.callParent(arguments);
    }
    


});
