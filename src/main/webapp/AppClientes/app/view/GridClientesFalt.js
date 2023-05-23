Ext.define('AppClientes.view.GridClientesFalt', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridclientesfalt',
    itemId: 'gridclientesfalt',
    xtype: 'gridclientesfalt',
    flex: 1,
    title: 'Clientes Faltantes del Sistema de Facturacion',
    store: 'StoreClientesFalt',
    split: true,
    collapsible: true,
    autoScroll: true,
    
    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';
        
         var storeCboClientesFalt = Ext.create('AppClientes.store.StoreCboClientesFalt');
      
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
     
        Ext.apply(this, {
            features: [
                filters,
                {
                    ftype: 'summary',
                    dock: 'bottom'
                }
            ],
            multiSelect: true,

            listeners: {
                columnresize: function(ct, column, width, eOpts) {
                    me.fireEvent("changeColumn", ct, column, width, eOpts);
                },
                viewready: function(grid) {
                    

                }
            },
            tbar: [
                
                {
                    width: 420,
                    fieldLabel: 'Buscar',
                    xtype: 'combobox',
                    //store: 'StoreBuscaConvertidor',
                    store:storeCboClientesFalt,
                    displayField: 'NOMBRE1_CBO',
                    valueField: 'ID_CLIENTE_CBO',
                    emptyText: 'Cliente no encontrado',
                    id: 'cboClienteFalt',
                    name: 'cboClienteFalt',
                    minChars : 0,
                    typeAhead: false,
                    anchor: '100%',
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'No se encontraron datos.',
                        getInnerTpl: function() {
                            return '<a class="banner-title">{NOMBRE_CBO}</a>' +
                                    '<br /> <a class="banner-text">{RFC_CBO}</a>' 
                                    ;
                        }
                    },
                    listeners: {
                        scope:this,
                                
                    beforequery: function(queryEvent, eOpts) {
                
                 //      storeBuscaConvertidor.proxy.extraParams.condicion = Ext.getCmp('txtPARAMETROConv').getValue();

                    },
      
                        select: function(value){
                                    
                              this.fireEvent("buscaClienteFalt", value.valueModels[0].data.ID_CLIENTE_CBO);
                             //}
                        }
                    },
                    pageSize: 30


                },
                
                '->',
                

                {
                    iconCls: 'clean-filter-icon',
                    text: '',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersClienteFalt", btn);
                    }
                },
   
//                  {
//                    iconCls: 'download-sat',
//                    text: '',
//                    itemId: 'btnDescargaCtaFalt',
//                    id: 'btnDescargaCtaFalt',
//                    name: 'btnDescargaCtaFalt',
//                    scope: this,
//                    handler: function(btn) {
//
//                       // this.fireEvent("decargaClientes", btn, cellEditing);
//                    }
//
//
//                },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar a Contabilidad',
                    itemId: 'btnAgregarClienteFalt',
                    id: 'btnAgregarClienteFalt',
                    name: 'btnAgregarClienteFalt',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("crearClienteFalt", btn);
                    }


                }//,
//                '-',
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Borrar',
//                    itemId: 'btnBorrarClienteFalt',
//                    id: 'btnBorrarClienteFalt',
//                    name: 'btnBorrarClienteFalt',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("cancelaClienteFalt", btn);
//                    }
//                }
            ],
            columns: [

                {
                    xtype: 'gridcolumn',
                    header: 'Compania',
                    name: 'COMPANIA_FALT',
                    id: 'colClieCOMPANIA_FALT',
                    dataIndex: 'COMPANIA_FALT',
                    sortable: true,
                    hidden: true,
                    flex:1
                },
//                 {
//                    menuDisabled: true,
//                    sortable: false,
//                    xtype:'actioncolumn',
//                    text: 'Validacion',
//                    itemId:'bienColumnCli_FALT',
//                    name:'bienColumnCli_FALT',
//                    id:'bienColumnCli_FALT',
//                    width: 50,
//                    tdCls: 'x-change-cell',
//                    items: [
//
//                    {
//                    getClass: function(v, meta, rec) {          
//                        if (rec.get('MGS_ERR') === 'Datos Correctos') {
//                            return 'exito';
//                        } else {
//                            return 'error';
//                        }
//
//                    },                    
//                    getTip: function(v, meta, rec) {
//                        
//                         var estatus = rec.get('MGS_ERR');
//                        
//            
//                           return rec.get('ID_CLIENTE_FALT') + ' ' + estatus;
//                          
//                    },
//                    handler: function(grid, rowIndex, colIndex) {
//                        var rec =  grid.getStore().getAt(rowIndex);
//                        
//                    }
//                }]
//             } ,
                {
                    xtype: 'gridcolumn',
                    header: 'Id Cliente',
                    name: 'ID_CLIENTE_FALT',
                    filterable: true,
                    id: 'colClieID_CLIENTE_FALT',
                    dataIndex: 'ID_CLIENTE_FALT',
                    sortable: true,
                    hidden: false,
                    flex:1
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Origen',
                    name: 'ORIGEN_FALT',
                    id: 'colClieORIGEN_FALT',
                    dataIndex: 'ORIGEN_FALT',
                    sortable: true,
                    hidden: true,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    name: 'NOMBRE_FALT',
                    id: 'colClieNOMBRE_FALT',
                    filterable: true,
                    dataIndex: 'NOMBRE_FALT',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'RFC',
                    name: 'RFC_FALT',
                    id: 'colClieRFC_FALT',
                    filterable: true,
                    dataIndex: 'RFC_FALT',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Razon Social',
                    name: 'RAZON_SOCIAL_FALT',
                    filterable: true,
                    id: 'colClieRAZON_SOCIAL_FALT',
                    dataIndex: 'RAZON_SOCIAL_FALT',
                    sortable: true,
                    hidden: false,
                    flex:3
                }
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreClientesFalt',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            if(!Ext.isEmpty(pageData)){
                                 this.fireEvent("recargaPagina",pageData.currentPage) ;
                            }
                        }
                     },
                    id: 'statusDetalleFalt',
                    items: [
                    //    '->',
                     //   bandera

                    ]
                })

            ]//,
            
//            viewConfig: {
//                
//                   getRowClass: function(record) {
//                    var c = record.get('MGS_ERR');
//              //      msgOut("cell:"+c);
//                     if (c === 'Datos Correctos') {
//                         // msgOut("ENTRO"+c);
//                        return 'price-rise';
//                    }else{
//                        
//                         return 'price-fall';
//                        
//                    } 
//                  
//                }
//                  
//                
//            }



        });


        this.callParent(arguments);
    }



}
);



