Ext.define('AppCargaFE.view.WindowRelacionPol', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowrelacionpol',
    title: 'Relacionar Poliza',
    fieldLabel: 'Relacionar Poliza',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formrelacionpol')
        ];
        this.callParent(arguments);
    }
    
});



