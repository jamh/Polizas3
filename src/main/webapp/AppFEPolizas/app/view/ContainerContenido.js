Ext.define('AppFEPolizas.view.ContainerContenido', {
    extend: 'Ext.container.Container',
   // extend: '  Ext.panel.Panel',
 
    alias: 'widget.containercontenido',
    xtype: 'containercontenido',
    region: 'center',
    title:'Contenido',  
    layout:'fit',
    
    
    initComponent: function() {
        
       Ext.apply(this,{
         
       });

        this.callParent(arguments);
    }
});


