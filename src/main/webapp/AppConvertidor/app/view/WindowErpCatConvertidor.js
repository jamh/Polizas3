Ext.define('AppConvertidor.view.WindowErpCatConvertidor', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowerpcatconvertidor',
    title: 'Agregar Convertidor',
    fieldLabel: 'Agregar Convertidor',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formerpcatconvertidor')
        ];
        this.callParent(arguments);
    }
    
});

