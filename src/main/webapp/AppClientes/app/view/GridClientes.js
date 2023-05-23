Ext.define('AppClientes.view.GridClientes', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridclientes',
    itemId: 'gridclientes',
    xtype: 'gridclientes',
    flex: 1,
    title: 'Clientes',
    store: 'StoreClientes',
    split: true,
    collapsible: true,
    autoScroll: true,
    
    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';
        
         var storeCboClientes = Ext.create('AppClientes.store.StoreCboClientes');
      
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
                    store:storeCboClientes,
                    displayField: 'NOMBRE1_CBO',
                    valueField: 'ID_CLIENTE_CBO',
                    emptyText: 'Cliente no encontrado',
                    id: 'cboCliente',
                    name: 'cboCliente',
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
                                    
                              this.fireEvent("buscaCliente", value.valueModels[0].data.ID_CLIENTE_CBO);
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
                        me.fireEvent("cleanFiltersCliente", btn);
                    }
                },
   
                  {
                    iconCls: 'download-sat',
                    text: '',
                    itemId: 'btnDescargaClien',
                    id: 'btnDescargaClien',
                    name: 'btnDescargaClien',
                    scope: this,
                    handler: function(btn) {

                       // this.fireEvent("decargaClientes", btn, cellEditing);
                    }


                },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarCliente',
                    id: 'btnAgregarCliente',
                    name: 'btnAgregarCliente',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("crearCliente", btn);
                    }


                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarCliente',
                    id: 'btnBorrarCliente',
                    name: 'btnBorrarCliente',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaCliente", btn);
                    }
                }
            ],
            columns: [

                {
                    xtype: 'gridcolumn',
                    header: 'Compania',
                    name: 'COMPANIA',
                    id: 'colClieCOMPANIA',
                    dataIndex: 'COMPANIA',
                    sortable: true,
                    hidden: true,
                    flex:1
                },
                 {
                    menuDisabled: true,
                    sortable: false,
                    xtype:'actioncolumn',
                    text: 'Validacion',
                    itemId:'bienColumnCli',
                    name:'bienColumnCli',
                    id:'bienColumnCli',
                    width: 50,
                    tdCls: 'x-change-cell',
                    items: [

                    {
                    getClass: function(v, meta, rec) {          
                        if (rec.get('MGS_ERR') === 'Datos Correctos') {
                            return 'exito';
                        } else {
                            return 'error';
                        }

                    },                    
                    getTip: function(v, meta, rec) {
                        
                         var estatus = rec.get('MGS_ERR');
                        
            
                           return rec.get('ID_CLIENTE') + ' ' + estatus;
                          
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec =  grid.getStore().getAt(rowIndex);
                        
                    }
                }]
             } ,
                {
                    xtype: 'gridcolumn',
                    header: 'Id Cliente',
                    name: 'ID_CLIENTE',
                    filterable: true,
                    id: 'colClieID_CLIENTE',
                    dataIndex: 'ID_CLIENTE',
                    sortable: true,
                    hidden: false,
                    flex:1
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Origen',
                    name: 'ORIGEN',
                    id: 'colClieORIGEN',
                    dataIndex: 'ORIGEN',
                    sortable: true,
                    hidden: true,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    name: 'NOMBRE',
                    id: 'colClieNOMBRE',
                    filterable: true,
                    dataIndex: 'NOMBRE',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'RFC',
                    name: 'RFC',
                    id: 'colClieRFC',
                    filterable: true,
                    dataIndex: 'RFC',
                    sortable: true,
                    hidden: false,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Razon Social',
                    name: 'RAZON_SOCIAL',
                    filterable: true,
                    id: 'colClieRAZON_SOCIAL',
                    dataIndex: 'RAZON_SOCIAL',
                    sortable: true,
                    hidden: false,
                    flex:3
                }
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreClientes',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            if(!Ext.isEmpty(pageData)){
                                 this.fireEvent("recargaPagina",pageData.currentPage) ;
                            }
                        }
                     },
                    id: 'statusDetalleCliente',
                    items: [
                    //    '->',
                     //   bandera

                    ]
                })

            ],
            
            viewConfig: {
                
                   getRowClass: function(record) {
                    var c = record.get('MGS_ERR');
              //      msgOut("cell:"+c);
                     if (c === 'Datos Correctos') {
                         // msgOut("ENTRO"+c);
                        return 'price-rise';
                    }else{
                        
                         return 'price-fall';
                        
                    } 
                  
                }
                  
                
            }



        });


        this.callParent(arguments);
    }



}
);



