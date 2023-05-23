Ext.define('AppConvertidor.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
       type: 'vbox',
        align: 'stretch'
    },
    items: [
        {

            xtype: 'formerpcatconvertidor'
        }
        ,
        {
            xtype:'griderpdetconvertidor'
        }

    ]
});