Ext.define('AppFormulas.view.WindowCopiaFormula', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcopiaformula',
    title: 'Copia Cedula',
   // fieldLabel: 'Fecha Poliza',
    width: 400,
    height: 200,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('formcopiaformula')
        ];
        this.callParent(arguments);
    }
    
});


