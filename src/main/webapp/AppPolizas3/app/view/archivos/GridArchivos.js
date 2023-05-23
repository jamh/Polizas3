Ext.define('AppPolizas3.view.archivos.GridArchivos', {
    extend:'Ext.grid.Panel',
    alias: 'widget.gridarchivos',
    itemId:'gridarchivos',
    xtype: 'gridarchivos',
    store: 'StoreArchivos',
    title: 'Archivos',
 //   frame:true,        
//     flex: 1,
//    split: true,
//    collapsible: true,

    initComponent:function(){
       

        Ext.apply(this,{

            tbar:[
                 '->',
                
                {
                    iconCls: 'search-icon',
                    text: 'Ver Archivo',
                    itemId: 'btnVerArchivo',
                    id: 'btnVerArchivo',
                    name: 'btnVerArchivo',
                      scope: this,
                            handler: function(btn) {
                                this.fireEvent("verArchivo", btn);
                     }

                },
//                {
//                    iconCls: 'search-icon',
//                    text: 'Ver PDF',
//                    itemId: 'btnverPDF',
//                    id: 'btnverPDF',
//                    name: 'btnverPDF',
//                      scope: this,
//                            handler: function(btn) {
//                                this.fireEvent("verPDF", btn);
//                     }
//
//                },
                
                '-',
                
                {
                    iconCls: 'add-icon',
                    text: 'Agregar Archivo',
                    itemId: 'btnAddArchivo',
                    id: 'btnAddArchivo',
                    name: 'btnAddArchivo',
                       scope: this,
                            handler: function(btn) {
                                this.fireEvent("addArchivo", btn);
                     }
                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Archivo',
                    itemId: 'btnQuitarArchivo',
                    id: 'btnQuitarArchivo',
                    name: 'btnQuitarArchivo',//,
                    scope: this,
                            handler: function(btn) {
                                this.fireEvent("deleteArchivo", btn);
                     }
                }
            
            ],

            columns: [
                
               {
                    dataIndex: 'COMPANIA',
                    name:'COMPANIA',
                    id:'arCOMPANIA',
                    sortable: true,
                    hidden:true,
                    header: 'compania',
                    flex: 1
                },
               {
                    dataIndex: 'FECHA',
                      name:'FECHA',
                      hidden:true,
                    id:'arFECHA',        
                    sortable: true,
                    header: 'fecha',
                    flex: 1
                },
               {
                    dataIndex: 'NUMERO',
                     hidden:true,
                     name:'NUMERO',
                    id:'arNUMERO',
                    sortable: true,
                    header: 'numero',
                    flex: 1
                },
               {
                    dataIndex: 'TIPO_POLIZA',
                      name:'TIPO_POLIZA',
                     hidden:true,
                    id:'arTIPO_POLIZA',
                    sortable: true,
                    header: 'tipo poliza',
                    flex: 1
                },
                        
                 {
                    dataIndex: 'URL',
                      name:'URL',
                     hidden:true,
                    id:'arURL',
                    sortable: true,
                    header: 'url',
                    flex: 1
                },
              {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                        
              {
                    dataIndex: 'TIPO',
                    name:'TIPO',
                    id:'arTIPO',
                    sortable: true,
                    hidden:true,
                    header: 'tipo',
                    flex: 1
                },
                {
                    dataIndex: 'NOMBRE',
                    sortable: true,
                    header: 'NOMBRE',
                    flex: 3
                },
                {
                    dataIndex: 'DESCRIPCION',
                    sortable: true,
                    header: 'DESCRIPCION',
                    flex: 3
                }


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store:'StoreArchivos'
                })
            ]

        });


        this.callParent(arguments);
    }
    

 
});


