Ext.define('AppCXPFacturas.view.Main', {
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
            title: 'Archivos',
            items: [
                {
                    xtype: 'gridarchivos',
                    region: 'center'
                  


                },
                {
                            xtype: 'panel',
                            id: 'detailPanel',  
                             region: 'south',
                            title:'Datos de la Factura',
                            height: 200,
                            split: true,
                            collapsible: true,
                            autoScroll: true
               },
               {
                   
                   xtype:'menugeneral'
               }



            ]


        },
        {
            xtype: 'panel',
            iconCls: 'xml-icon',
            frame: true,     
            layout: 'border',
            title: 'Intercos',
            items: [
                {
                    xtype: 'gridintercos',
                    region: 'center'
                  


                },
                {
                            xtype: 'panel',
                            id: 'detailPanelIntercos',  
                             region: 'south',
                            title:'Datos de la Factura',
                            height: 200,
                            split: true,
                            collapsible: true,
                            autoScroll: true
               },
                {
                   
                   xtype:'menugeneralintercos'
               }



            ]


        },
        
        {
            xtype: 'panel',
            iconCls: 'icon-rembolso',
            frame: true,     
            layout: 'border',
            title: 'CXP Otros',
            flex:3,
            items: [
                {
                    xtype: 'gridcxpotros',
                     region: 'center',
                     flex:7
                      

                },
                
               {
                   
                   xtype:'menugeneralotros'
               },
               {
                   xtype: 'tabpanel',
                        id:'tab',
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
                                   flex:1,
                                   xtype:'gridinfofactotras'

                               },
                               {
                                   flex:1,
                                   xtype:'gridotrasarchivos'

                               }
                               
                    ]
                },
                ,{
                                   
                                   flex:1,
                                   xtype:'panelsurotrasarchivos'
                                   
                                   
                               }


            ]


        },
         {
            xtype: 'panel',
            iconCls: 'icon-rembolso',
            frame: true,     
            layout: 'border',
            flex:3,
            title: 'Viaticos',
            items: [
                {
                    xtype: 'gridviaticos',
                    flex:7,
                     region: 'center'
                    

                },
                {
                   xtype: 'tabpanel',
                        id:'tabViat',
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
                                   flex:1,
                                   xtype:'gridinfofactviat'

                               },
                                {
                                                xtype: 'panel',
                                                id: 'detailPanelViatic',  
                                                 region: 'south',
                                                title:'Datos del Viatico',
                                                height: 200,
                                                split: true,
                                                collapsible: true,
                                                autoScroll: true
                                   }
                
                               
                    ]
                },
                {
                                   
                                   flex:1,
                                   xtype:'panelsurviaticarchivos'
                                   
                                   
                               },

                
               
               {
                   
                   xtype:'menugeneralviaticos'
               }



            ]


        },
        
        //{
        //    xtype: 'griddirectorios',
        //    iconCls: 'directory-icon'
        //},
        {
            xtype: 'panel',
            id:'cargaXml',
            title: 'Carga Archivos',
            html: '<iframe src="/Polizas3/uploadCe?origen=CP" width="100%" height="100%" ></iframe>'
        }
       
        


    ]
});