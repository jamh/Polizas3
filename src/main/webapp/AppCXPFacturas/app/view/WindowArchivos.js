Ext.define('AppCXPFacturas.view.WindowArchivos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowarchivos',
    title: 'Agregar Archivo',
    fieldLabel: 'Agregar Archivo',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formarchivos')
        ];
        this.callParent(arguments);
    }
    
});

