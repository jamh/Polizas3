Ext.define('AppClientes.view.MainPanel', {
    
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    alias: 'widget.mainpanel',
    itemId: 'mainpanel',
    title: 'Clientes',
    layout: 'fit',
    items: [
        
         {
            xtype:'gridclientes'
        },
        {
            
            xtype:'gridclientesfalt'
        }

 
    ]
});
