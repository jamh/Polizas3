Ext.define('AppCargaFE2.view.WindowDatosPagosCXC', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowdatospagoscxc',
    title: 'Pago Total',
    fieldLabel: 'Pago',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formdatospagocxc')
        ];
        this.callParent(arguments);
    }
    
});



