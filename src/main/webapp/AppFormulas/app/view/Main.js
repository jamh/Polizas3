Ext.define('AppFormulas.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: {
       type: 'vbox',
        align: 'stretch'
    },
    items: [
        {

            xtype: 'formcedula'
        }
        ,
        {
            xtype:'gridceduladet'
        }

    ]
});