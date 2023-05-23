Ext.define('AppCXPFacturas.view.WindowAddArchivo', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowaddarchivo',
    title: 'Agregar Archivo',
    fieldLabel: 'Agregar Archivo',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formaddarchivo')
        ];
        this.callParent(arguments);
    }
    
});

