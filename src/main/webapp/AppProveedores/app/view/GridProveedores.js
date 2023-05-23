Ext.define('AppProveedores.view.GridProveedores', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridproveedores',
    itemId: 'gridproveedores',
    xtype: 'gridproveedores',
    flex: 1,
    title: 'Proveedores',
    store: 'StoreProveedores',
    split: true,
    collapsible: true,
    autoScroll: true,
    region: 'center',

    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';
        var storeCboProveedor = Ext.create('AppProveedores.store.StoreCboProveedor');
      
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
                    store:storeCboProveedor,
                    displayField: 'NOMBRE1_CBO',
                    valueField: 'ID_CLIENTE_CBO',
                    emptyText: 'Proveedor no encontrado',
                    id: 'cboConvertidor',
                    name: 'cboConvertidor',
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
                                    
                              this.fireEvent("buscaProveedor", value.valueModels[0].data.ID_CLIENTE_CBO);
                             //}
                        }
                    },
                    pageSize: 30


                },
                '->',
                 {
                            iconCls: 'clean-filter-icon',
                            text: '',
                            tooltip :'Limpiar Filtro',
                            handler: function(btn) {                                
                                me.fireEvent("cleanFiltersProv", btn);
                            }
                  },
                  '-',
                  {
                    iconCls: 'download-sat',
                    text: '',
                    itemId: 'btnDescargaProv',
                    id: 'btnDescargaProv',
                    tooltip :'Descarga Proveedores',
                    name: 'btnDescargaCta',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("descargaProvPg");
                    }


                },
                '-',
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarProv',
                    id: 'btnAgregarProv',
                    name: 'btnAgregarProv',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("crearProveedor", btn);
                    }


                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarProv',
                    id: 'btnBorrarProv',
                    name: 'btnBorrarProv',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaProveedor", btn);
                    }
                }
            ],
            columns: [

                {
                    xtype: 'gridcolumn',
                    header: 'Compania',
                    name: 'COMPANIA',
                    id: 'colProCOMPANIA',
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
                    itemId:'bienColumnProv',
                    name:'bienColumnProv',
                    id:'bienColumnProv',
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
                    header: 'Id Proveedor',
                    name: 'ID_CLIENTE',
                    id: 'colProID_CLIENTE',
                    dataIndex: 'ID_CLIENTE',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    flex:1
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Origen',
                    name: 'ORIGEN',
                    id: 'colProORIGEN',
                    dataIndex: 'ORIGEN',
                    sortable: true,
                    hidden: true,
                    flex:3
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    name: 'NOMBRE',
                    id: 'colProNOMBRE',
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
                    id: 'colProRFC',
                    dataIndex: 'RFC',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    flex:2
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Razon Social',
                    name: 'RAZON_SOCIAL',
                    id: 'colProRAZON_SOCIAL',
                    dataIndex: 'RAZON_SOCIAL',
                    sortable: true,
                    hidden: true,
                    flex:3
                }
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreProveedores',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
                            if(!Ext.isEmpty(pageData)){
                                 this.fireEvent("recargaPagina",pageData.currentPage) ;
                            }
                        }
                     },
                    id: 'statusDetalleProv',
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



