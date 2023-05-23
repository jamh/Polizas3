Ext.define('AppPortalAereo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias: 'widget.app-main',
    itemId: 'app-main',
    hidden:true,
  //  title: 'Carga de XML CxP',
    layout: 'fit',
    items: [
            
         
                    
                      {
                        xtype: 'panel',

                        split: true,
                        collapsible: true,
                        flex: 1,
                        title: translations.titleFactNac,
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
                                        title: translations.datosFactura,
                                        id: 'detailPanelCXC',
                                        flex: 4,
                                        autoScroll: true,
                                        html: translations.descFactNac
                                       },
                                       {
                                        xtype: 'panel',
                                        title: translations.bancosFactNac,
                                        id: 'detailPanelBanc',
                                        flex: 4,
                                        autoScroll: true,
                                        html: translations.descBanFactNac
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
                        title: translations.titleFactExt,
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
                                        title: translations.datGasto,
                                        id: 'detailPanelCXCOtras',
                                            flex:2,
                                        autoScroll: true,
                                        html: translations.detDatGasto
                                       }
                          
                        ]}
        
                
    ]
});