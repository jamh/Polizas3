Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppCargaFE2.view.PanelSurCXC', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurcxc',
    itemId: 'panelsurcxc',
    xtype: 'panelsurcxc',
    region: 'south',
    initComponent: function() {
         var totalCargos = Ext.create('Ext.toolbar.TextItem', {id:'totalcxc',text: 'Total Pagado: 0'}),
         totalAbonos = Ext.create('Ext.toolbar.TextItem', {id:'totalPesoscxc',text: 'Total en Pesos: 0'}),
         totalPagar = Ext.create('Ext.toolbar.TextItem', {id:'totalPagarcxc',text: 'Total a Pagar: 0'});
   
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
              //  defaultText: 'Totales Guardados...',
                id: 'statusbarTotalescxc',
               // statusAlign: 'right', // the magic config
                items: [
                     totalCargos,'-', totalAbonos, '-' ,totalPagar
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

