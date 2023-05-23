Ext.define('AppCargaFE2.view.WindowDatosPagos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowdatospagos',
    title: 'Pago Total',
    fieldLabel: 'Pago',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formdatospago')
        ];
        this.callParent(arguments);
    }
    
});



