Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([

    'Ext.ux.grid.FiltersFeature'

]);

Ext.define('AppOrdenCompra.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout:'fit',

    items: [{
        xtype: 'app-main'
    }]
});
