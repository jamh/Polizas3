Ext.define('AppPolizas3.view.detalle.WindowDiot', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowdiot',
    title: 'Diot',
    //fieldLabel: 'Fecha Poliza',
     width: 440,
    height: 450,
    minHeight: 200,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('griddiot')
        ];
        this.callParent(arguments);
    }
    
});
