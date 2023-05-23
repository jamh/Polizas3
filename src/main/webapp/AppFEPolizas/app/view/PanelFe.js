Ext.define('AppFEPolizas.view.PanelFe', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelfe',
    itemId: 'panelfe',
    xtype: 'panelfe',
    frame: true,
//    title: 'Carga Fe',
    region: 'center',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    split: true,
    
    
    initComponent: function() {
        
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    width: '100%',
//                    layout: {
//                        type: 'vbox',
//                        align: 'stretch'
//                    },
                   layout: 'fit',
                    items: [
                     
                         {
                           xtype:'formfe'  
                         }
                       
                   ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    width: '100%',
//                    layout: {
//                        type: 'vbox',
//                        align: 'stretch'
//                    },
                     layout: 'fit',
                    items: [
                     
                         {
                            xtype:'griddetfe'
                        }
                       
                   ]
                }//,
//                {
//                    xtype: 'panel',
//                    flex: 1,
//                    width: '50%',
//                    layout: {
//                        type: 'vbox',
//                        align: 'stretch'
//                    },
//                    items: [
//                        {
//                            xtype:'griddetfe'
//                        }
//                    
//                     ]
//                }
            ]
        });

        this.callParent(arguments);
    }
});

