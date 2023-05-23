Ext.define('AppCargaFE2.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias: 'widget.app-main',
    itemId: 'app-main',
    title: 'Carga de XML CxP',
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'Ingresos',
            items: [
                {
                    xtype: 'gridcxc',
                    flex:9,
                    region: 'center'


                },
                {
                   xtype: 'tabpanel',
                        id:'tabCXC',
                        title: 'Relaciones',
                        region:'south',
                        collapsed:false,
                        split: true,
                        collapsible: true,
                        flex:7,
                        plain: true,
                        layout:'fit',
                            items: [
                               {
                                    xtype: 'panel',
                                    id: 'detailPanelCXC',
                                    title: 'Datos de la Factura',
                                    split: true,
                                    collapsible: true,
                                    autoScroll: true,
                                    //height: 200,
                                    flex:1,
                                    html: 'Seleccione un registro para ver sus detalles.'
                                },
                                {
                                    xtype: 'panel',
                                    id: 'detailPanelCXCNomina',
                                    title: 'Datos de Nomina',
                                    split: true,
                                    collapsible: true,
                                    autoScroll: true,
                                    //height: 200,
                                    flex:1,
                                    html: 'Seleccione un registro para ver sus detalles.'
                                }
                               
                    ]
                }
                



            ]


        },
        {
            xtype: 'panel', // TabPanel itself has no title
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'Egresos',
            items: [
                {
                    xtype: 'gridcxp',
                    flex:9,
                    region: 'center'
                },
                {
                   xtype: 'tabpanel',
                        id:'tabCXP',
                        title: 'Relaciones',
                        region:'south',
                        collapsed:false,
                        split: true,
                        collapsible: true,
                        flex:7,
                        plain: true,
                        layout:'fit',
                            items: [
                               {
                                    xtype: 'panel',
                                    id: 'detailPanelCXP',
                                    title: 'Datos de la Factura',
                                    
                                    split: true,
                                    collapsible: true,
                                    autoScroll: true,
                                    flex:1,
                                    html: 'Seleccione un registro para ver sus detalles.'
                                },
                                {
                                    xtype: 'panel',
                                    id: 'detailPanelCXPNomina',
                                    title: 'Datos de Nomina',
                                    
                                    split: true,
                                    collapsible: true,
                                    autoScroll: true,
                                    flex:1,
                                    html: 'Seleccione un registro para ver sus detalles.'
                                }
                               
                    ]
                }
                
                



            ]


                    //  iconCls: 'xml-icon'
        },
        
        
        {
            xtype: 'panel',
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'XML Complementos',
            items: [
                {
                    xtype: 'gridcomplpagos',
                    flex:1,
                    region: 'center'


                },
                 {
                    xtype: 'gridcomplpagosdet',
                    region: 'south'
                }
                ////,
//                {
//                   xtype: 'tabpanel',
//                        id:'tabCXC',
//                        title: 'Relaciones',
//                        region:'south',
//                        collapsed:false,
//                        split: true,
//                        collapsible: true,
//                        flex:7,
//                        plain: true,
//                        layout:'fit',
//                            items: [
//                               {
//                                    xtype: 'panel',
//                                    id: 'detailPanelCXC',
//                                    title: 'Datos de la Factura',
//                                    split: true,
//                                    collapsible: true,
//                                    autoScroll: true,
//                                    //height: 200,
//                                    flex:1,
//                                    html: 'Seleccione un registro para ver sus detalles.'
//                                },
//                                {
//                                    xtype: 'panel',
//                                    id: 'detailPanelCXCNomina',
//                                    title: 'Datos de Nomina',
//                                    split: true,
//                                    collapsible: true,
//                                    autoScroll: true,
//                                    //height: 200,
//                                    flex:1,
//                                    html: 'Seleccione un registro para ver sus detalles.'
//                                }
//                               
//                    ]
//                }
                



            ]


        },
        
        {
            xtype: 'panel', // TabPanel itself has no title
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'Pagos Egresos',
            items: [
                {
                    xtype: 'gridpagos',
                    region: 'center'


                },
                {
                    xtype: 'gridpagosdet',
                    region: 'south'
                },
                {
                    xtype: 'panelsur',
                    region: 'south'

                }



            ]


                    //  iconCls: 'xml-icon'
        },
        {
            xtype: 'panel', // TabPanel itself has no title
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'Cobranza Ingresos',
            items: [
                {
                    xtype: 'gridpagoscxc',
                    region: 'center'


                },
                {
                    xtype: 'gridpagosdetcxc',
                    region: 'south'
                },
                {
                    xtype: 'panelsurcxc',
                    region: 'south'

                }



            ]


        },
          {
            xtype: 'panel', // TabPanel itself has no title
            iconCls: 'xml-icon',
            frame: true,
            layout: 'border',
            title: 'Pagos CXP Otras',
            items: [
                {
                    xtype: 'gridpagosotras',
                    region: 'center'


                },
                {
                    xtype: 'gridpagosotrasdet',
                    region: 'south'
                },
                {
                    xtype: 'panelsurotras',
                    region: 'south'

                }



            ]


                    //  iconCls: 'xml-icon'
        },
   
        {
            xtype: 'panel',
            title: 'Carga De CFDI',
            html: '<iframe src="/Polizas3/uploadCe?origen=cfdi" width="100%" height="100%" ></iframe>'
        }
    ]
});