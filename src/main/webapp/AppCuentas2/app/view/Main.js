Ext.define('AppCuentas2.view.Main', {
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