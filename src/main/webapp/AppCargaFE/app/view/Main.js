Ext.define('AppCargaFE.view.Main', {
    extend: 'Ext.tab.Panel',
//    requires: [
//        'Ext.tab.Panel',
//        'Ext.layout.container.Border'
//    ],
    xtype: 'app-main',
    alias: 'widget.app-main',
    itemId:'app-main',
    title:'Carga de XML CxP',
    layout:'fit',
    items: [
        {
         
             xtype: 'panel', // TabPanel itself has no title
             iconCls: 'xml-icon',
              frame: true,
                //split: true,
                //layout: 'fit',
        
             layout: 'border',
             title: 'Archivos',
         
                items: [
                    
                        
                          {
                        xtype: 'gridarchivos',
                        region: 'center'
                        //split: true,
                       // collapsible: true
                       //autoScroll: true
                        
                },
                 {
                        xtype: 'panel',
                        id: 'detailPanel',
                        title: 'Datos de la Factura',
                        region: 'south',
                        split: true,
                        collapsible: true,
                        autoScroll: true,
                       // bodyPadding: 7,
                         height:200,
      
                        //bodyStyle: "background: #ffffff;",
                        html: 'Seleccione un registro para ver sus detalles.'
                }

                   
                
                ]
                
                
            //  iconCls: 'xml-icon'
        },
        //{
        //    xtype: 'griddirectorios',
        //      iconCls: 'directory-icon'
        //},
        {
            xtype: 'panel',
            title: 'Carga Archivos',
            html: '<iframe src="/Polizas3/uploadCe?origen=FE" width="100%" height="100%" ></iframe>'
        }
    ]
});