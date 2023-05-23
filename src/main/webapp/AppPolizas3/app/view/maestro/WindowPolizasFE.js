Ext.define('AppPolizas3.view.maestro.WindowPolizasFE', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowpolizasfe',
    itemId: 'windowpolizasfe',
    xtype: 'windowpolizasfe',
    title: 'Carga XML',
   // fieldLabel: 'Agregar Archivo',
     width: 800,
    height: 600,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
//        this.items = [
//          //  Ext.widget('formarchivos')
//        ];
        this.callParent(arguments);
    }
    
});

