Ext.define('AppReadCFDI.view.PanelBusqueda', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelbusqueda',
    itemId: 'panelbusqueda',
    xtype: 'panelbusqueda',
    frame: true,
    title: 'Lectura SAT',
    region: 'center',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    split: true,
    
    
    initComponent: function() {
        var me =this;
        Ext.apply(me, {
            tbar:[
                {
                            iconCls: 'find-icon',
                            text: 'Buscar SAT',
                            handler: function(btn) {
                                
                                me.fireEvent("buscaSAT", btn);
                            }
                  }
                
            ],
            items: [
                {
                }
            ]
        });

        this.callParent(arguments);
    }
});

