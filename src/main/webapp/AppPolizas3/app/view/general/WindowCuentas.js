Ext.define('AppPolizas3.view.general.WindowCuentas', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcuentas',
    title: 'Crear Cuenta',
    //fieldLabel: 'Fecha Poliza',
     width: 440,
    height: 450,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formcuentas')
        ];
        this.callParent(arguments);
    }
    
});




