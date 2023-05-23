Ext.define('AppClientes.view.WindowClientes', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowclientes',
    title: 'Crear Clientes',
    //fieldLabel: 'Fecha Poliza',
     width: 600,
    height: 450,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formclientes')
        ];
        this.callParent(arguments);
    }
    
});




