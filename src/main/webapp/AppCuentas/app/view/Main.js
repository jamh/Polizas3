Ext.define('AppCuentas.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
       type: 'vbox',
        align: 'stretch'
    },
    items: [
        
        {
            xtype:'gridcuentas'
        }

    ]
});