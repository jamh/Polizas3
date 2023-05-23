Ext.define('AppTransaccionSAT.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
       type: 'vbox',
        align: 'stretch'
    },
    items: [
        {

            //xtype: 'formtransaccion'
            xtype:'gridtransaccion'
        }
        

    ]
});
