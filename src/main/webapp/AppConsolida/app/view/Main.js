Ext.define('AppConsolida.view.Main', {
    extend:  'Ext.panel.Panel',
    xtype: 'app-main',
    layout: 'border',
    items: [
        {
            xtype:'formmaestro'
        },
        {
            xtype:'container',
            region:'center',
            layout: {
                type: 'hbox',
                align: 'stretch'
             },
            items:[
                {
                    xtype:'gridauxiliar',
                    title:'Contabilidad',
                    flex:1

                },
                {
                    xtype:'gridestadocuenta',
                    title:'Banco',
                    flex:1
                }
            ]
         },
         {
             xtype:'panel',
             region:'south',
             title:'Total',
             html:'<h3> Data</h3>'
         }
    ]
});
