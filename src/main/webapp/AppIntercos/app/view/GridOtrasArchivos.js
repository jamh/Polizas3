Ext.define('AppIntercos.view.GridOtrasArchivos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridotrasarchivos',
    itemId: 'gridotrasarchivos',
    xtype: 'gridotrasarchivos',
    store: 'StoreOtrasArchivos',
    autoScroll: true,
    region: 'south',
    collapsed:false,
    split: true,
    collapsible: true,
    title: 'Archivos',
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
//                 
               
                {
                    iconCls: 'see-icon',
                   // iconCls: 'add-icon',
                    text: 'Ver Archivo',
                    itemId: 'btnVerArchivosOtras',
                    id: 'btnVerArchivosOtras',
                    name: 'btnVerArchivosOtras',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("verArchivo", btn);
                    }

                },
                 {
                   // iconCls: 'see-icon',
                    iconCls: 'add-icon',
                    text: 'Agregar Archivo',
                    itemId: 'btnAddArchivosOtras',
                    id: 'btnAddArchivosOtras',
                    name: 'btnAddArchivosOtras',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("addArchivoOtras", btn);
                    }

                },
                 {
                   // iconCls: 'see-icon',
                    iconCls: 'delete-icon',
                    text: 'Eliminar Archivo',
                    itemId: 'btnDelArchivosOtras',
                    id: 'btnDelArchivosOtras',
                    name: 'btnDelArchivosOtras',
                    hidden:false,
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deleteArchivoOtras", btn);
                    }

                }
                


            ],
            columns: [
                {
                    dataIndex: 'COMPANIA_OTR_ARC',
                    name: 'COMPANIA_OTR_ARC',
                    id: 'cxpCOMPANIA_OTR_ARC',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                {
                    dataIndex: 'SEC_OTR_ARC',
                    name: 'SEC_OTR_ARC',
                    id: 'cxpSEC_OTR_ARC',
                    sortable: true,
                    hidden: false,
                    header: 'Sec',
                    width: 100
                },
                {
                    dataIndex: 'NOMBRE_OTR_ARC',
                    name: 'NOMBRE_OTR_ARC',
                    id: 'cxpNOMBRE_OTR_ARC',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 500
                },
                {
                    dataIndex: 'DESCRIPCION_OTR_ARC',
                    name: 'DESCRIPCION_OTR_ARC',
                    id: 'cxpDESCRIPCION_OTR_ARC',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Descripcion',
                    width: 700
                }
                
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreInfoFactOtras',
                     id: 'StoreOtrosArchivos',
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




