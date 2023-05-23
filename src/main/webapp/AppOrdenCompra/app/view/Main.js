
Ext.define('AppOrdenCompra.view.Main', {
    extend: 'Ext.container.Container',
   xtype: 'app-main',
    alias: 'widget.app-main',
    itemId: 'app-main',
    // bodyPadding: 5,
    frame: true,
    //split: true,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    //bodyStyle: 'padding: 5px;',

    initComponent: function() {






        Ext.apply(this, {
            items: [
                {
                    xtype: 'gridordencompra'
                },
                {
                   xtype: 'tabpanel',
                        id:'tab',
                     //   title: 'Relaciones',
                      //  region:'south',
                        collapsed:false,
                        split: true,
                        collapsible: true,
                        flex:1,
                        plain: true,
                        layout:'fit',
                            items: [
                               {
                                   flex:1,
                                   xtype:'griddetordencompra'

                               },
                               {
                                   flex:1,
                                   xtype:'gridarchivospedidoslinea'

                               }
                               
                    ]
                }//,
//                {
//                    xtype: 'griddetordencompra'
//                }
            ]


        });

        this.callParent(arguments);

    }
}

);




