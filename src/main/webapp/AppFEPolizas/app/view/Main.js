Ext.define('AppFEPolizas.view.Main', {
    extend: 'Ext.container.Container',
   
    requires:[
//        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'AppFEPolizas.view.ContainerContenido'        
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
       {
            region: 'center',
            xtype: 'containercontenido'    
       }
    ]
});