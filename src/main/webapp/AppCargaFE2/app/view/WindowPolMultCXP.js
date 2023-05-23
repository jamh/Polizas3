Ext.define('AppCargaFE2.view.WindowPolMultCXP', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowpolmultcxp',
    title: 'Polizas Multiples Facturas',
    //fieldLabel: 'Relacionar Poliza',
     width: 300,
    height: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formpolmultcxp')
        ];
        this.callParent(arguments);
    }
    
});



