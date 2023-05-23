//Ext.Loader.setPath('Ext.ux', 'resources/extjs5/ux');
Ext.define('AppAyuda.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    alias: 'widget.app-main',
    itemId:'app-main',
//    title:'Ayuda Feraz',
    layout:'fit',
    items: [
        {
            xtype: 'panelvideos'//,
//            title:'Ayuda Conta'
        }
    ]
});