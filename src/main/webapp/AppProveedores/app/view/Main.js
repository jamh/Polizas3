Ext.define('AppProveedores.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
       type: 'vbox',
        align: 'stretch'
    },
    items: [
        
        {
            xtype:'gridproveedores'
        },
         {
             xtype:'panelsurprov'
             
         }

    ]
});