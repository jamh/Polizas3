Ext.define('AppPortalInsurgentes.view.ContainerCentro', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'griderpfecomprobantes'
        },
        {
            xtype: 'panel',
           
            split: true,
            collapsible: true,
            flex: 1,
            border: false,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                
                {
                xtype:'tabpanel',
                frame:true,
                 
                width: '100%',
                
                flex:3,
                layout:'fit',
                items:[
                    
                    {
                    xtype: 'panel',
                    title: 'Datos de la Factura',
                    id: 'detailPanelCXC',
                    flex: 4,
                    autoScroll: true,
                    html: 'Seleccione un registro para ver sus detalles.'
                   },
                   {
                    xtype: 'panel',
                    title: 'Datos Bancarios',
                    id: 'detailPanelBanc',
                    flex: 4,
                    autoScroll: true,
                    html: 'Seleccione un registro para ver sus detalles.'
                   }
                   
                

                ]

            } , 
                
                
                {
                    xtype:'formarchivos',
                    flex:1
                }
            ]

        }
    ]
});
