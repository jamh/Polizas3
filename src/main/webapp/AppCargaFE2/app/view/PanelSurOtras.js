Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppCargaFE2.view.PanelSurOtras', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurotras',
    itemId: 'panelsurotras',
    xtype: 'panelsurotras',
    region: 'south',
    initComponent: function() {
         var totalCargos = Ext.create('Ext.toolbar.TextItem', {id:'totalOtras',text: 'Total Pagado: 0'}),
         totalAbonos = Ext.create('Ext.toolbar.TextItem', {id:'totalPesosOtras',text: 'Total en Pesos: 0'}),
         totalPagar = Ext.create('Ext.toolbar.TextItem', {id:'totalPagarOtras',text: 'Total a Pagar: 0'});
   
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
              //  defaultText: 'Totales Guardados...',
                id: 'statusbarTotalesOtras',
               // statusAlign: 'right', // the magic config
                items: [
                     totalCargos,'-', totalAbonos, '-' ,totalPagar
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

