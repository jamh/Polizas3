Ext.define('AppCargaFE2.view.WindowSatCXC', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowsatcxc',
    title: 'CXC',
   // fieldLabel: 'Relacionar Poliza',
     width: 440,
    height: 400,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formsatcxc')
        ];
        this.callParent(arguments);
    }
    
});



