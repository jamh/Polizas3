Ext.define('AppConvertidor.view.PanelContenido', {
    extend: 'Ext.container.Container',
    alias: 'widget.panelcontenido',
    xtype: 'panelcontenido',
    region: 'center',
 
    layout:'fit',
    autoDestroy :true,
     
    
    initComponent: function() {
        
   
        this.callParent(arguments);
    }
});


