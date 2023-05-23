Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([

    'Ext.ux.grid.FiltersFeature'

]);

Ext.define('AppProveedores.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout:'fit',

    items: [
        {
             xtype: 'app-main'
         }
//         {
//             xtype:'panelsurprov'
//             
//         }

    ]
});
