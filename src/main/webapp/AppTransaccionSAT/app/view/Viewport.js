Ext.define('AppTransaccionSAT.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'AppTransaccionSAT.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },
    layout:'fit',

    items: [{
        xtype: 'app-main'
    }]
});
