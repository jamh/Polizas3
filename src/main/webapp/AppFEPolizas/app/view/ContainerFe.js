Ext.define('AppFEPolizas.view.ContainerFe', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.*'
    ],
    xtype: 'app-container',
    layout: {
        type: 'border'
    },
    items: [{
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            items: [
                {
                    xtype: 'panelfe'
                  
                }

            ]
        }]
});