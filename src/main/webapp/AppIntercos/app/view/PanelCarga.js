Ext.define('AppIntercos.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    alias: 'widget.panelcarga',
    itemId:'panelcarga',
    title:'Carga de Archivos',
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
        {
            xtype: 'griddirectorios',
              iconCls: 'directory-icon'
        }
    ]
});