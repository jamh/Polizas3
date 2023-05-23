Ext.define('AppPolizas3.view.general.WindowCopy', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcopy',
    title: 'Copia Poliza',
    fieldLabel: 'Fecha Poliza',
    width: 400,
    height: 200,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formcopy')
        ];
        this.callParent(arguments);
    }
    
});


