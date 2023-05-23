Ext.define('AppTransaccionSAT.view.WindowTransaccion', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowtransaccion',
    title: 'Crear Transaccion',
    //fieldLabel: 'Fecha Poliza',
     width: 440,
    height: 450,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formtransaccion')
        ];
        this.callParent(arguments);
    }
    
});




