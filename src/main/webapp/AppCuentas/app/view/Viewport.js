Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([

    'Ext.ux.grid.FiltersFeature'

]);

Ext.define('AppCuentas.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'AppCuentas.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },
    layout:'fit',

    items: [{
        xtype: 'app-main'
    }]
});
