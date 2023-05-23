//Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
//Ext.require([
//
//    'Ext.ux.grid.FiltersFeature'
//
//]);

Ext.define('AppAyuda.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'AppAyuda.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },
    layout:'fit',

    items: [{
        xtype: 'app-main'
    }]
});
