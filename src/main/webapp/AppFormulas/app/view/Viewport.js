Ext.define('AppFormulas.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'AppFormulas.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },
    layout:'fit',

    items: [{
        xtype: 'app-main'
    }]
});
