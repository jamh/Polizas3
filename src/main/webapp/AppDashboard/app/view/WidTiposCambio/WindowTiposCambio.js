Ext.define('AppDashboard.view.WidTiposCambio.WindowTiposCambio', {
    extend: 'Ext.window.Window',
  //  xtype:'windowtiposcambio',
    alias: 'widget.windowtiposcambio',
    title: 'Paridad Dolares',
    fieldLabel: 'Paridad Dolares',
    x:1,
    y:1,
    maximizable : true,
    shadow :true,
    width: '50%',
    height: 350,
    layout: 'fit',
    autoShow: true,
//    modal: true,
    
    
    initComponent: function() {
        this.items = [
            Ext.widget('charttiposcambio')
        ];
        this.callParent(arguments);
    }
    
});

