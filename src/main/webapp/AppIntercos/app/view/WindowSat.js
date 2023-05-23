Ext.define('AppIntercos.view.WindowSat', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowsat',
    title: 'Descarga Sat',
   // fieldLabel: 'Relacionar Poliza',
     width: 440,
    height: 400,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formsat')
        ];
        this.callParent(arguments);
    }
    
});



