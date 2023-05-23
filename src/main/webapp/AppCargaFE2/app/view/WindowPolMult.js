Ext.define('AppCargaFE2.view.WindowPolMult', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowpolmult',
    title: 'Polizas Multiples Facturas',
    //fieldLabel: 'Relacionar Poliza',
     width: 300,
    height: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formpolmult')
        ];
        this.callParent(arguments);
    }
    
});



