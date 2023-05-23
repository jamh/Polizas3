Ext.define('AppPortalFolio.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias: 'widget.app-main',
    itemId: 'app-main',
  //  title: 'Carga de XML CxP',
    layout: 'fit',
    items: [
            
         
                    
                      {
                        xtype: 'panel',

                        split: true,
                        collapsible: true,
                        flex: 1,
                        title: 'Facturas Nacionales',
                        border: false,
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
                        ]},
                    
                        {
                        xtype: 'panel',

                        split: true,
                        collapsible: true,
                        flex: 1,
                        title: 'Facturas Extranjeras',
                        border: false,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [

        
                            {
                                xtype: 'gridcxpotros'
                            },
                             {
                                        xtype: 'panel',
                                        title: 'Datos del Gasto',
                                        id: 'detailPanelCXCOtras',
                                            flex:2,
                                        autoScroll: true,
                                        html: 'Seleccione un registro para ver sus detalles.'
                                       }
                          
                        ]}
        
                
    ]
});