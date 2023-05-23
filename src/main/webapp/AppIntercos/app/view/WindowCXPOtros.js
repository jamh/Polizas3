Ext.define('AppIntercos.view.WindowCXPOtros', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcxpotros',
    title: 'Otro Concepto',
    fieldLabel: 'Agregar Concepto',
     width: 440,
    height: 600,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        
        this.items = [
            Ext.widget('formcxpotros')
        ];
        this.callParent(arguments);
    }
    
});

