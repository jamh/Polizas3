Ext.define('AppOrdenCompra.view.WindowArchivos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowarchivos',
    title: 'Carga Archivos',
  //  fieldLabel: 'Agregar Concepto',
     width: 440,
    height: 340,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        
        this.items = [
            Ext.widget('formarchivos')
        ];
        this.callParent(arguments);
    }
    
});

