//Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
//Ext.require([
//
//    'Ext.ux.grid.FiltersFeature'
//
//]);

Ext.define('AppDashboard.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'AppDashboard.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },
    layout:'fit',

    items: [{
        xtype: 'appmain'
    }]
});
