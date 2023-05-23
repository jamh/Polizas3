Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppCargaFE2.view.PanelSur', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsur',
    itemId: 'panelsur',
    xtype: 'panelsur',
    region: 'south',
    initComponent: function() {
         var totalCargos = Ext.create('Ext.toolbar.TextItem', {id:'totalCXP',text: 'Total Pagado: 0'}),
         totalAbonos = Ext.create('Ext.toolbar.TextItem', {id:'totalPesosCXP',text: 'Total en Pesos: 0'}),
         totalPagar = Ext.create('Ext.toolbar.TextItem', {id:'totalPagarCXP',text: 'Total a Pagar: 0'});
   
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
              //  defaultText: 'Totales Guardados...',
                id: 'statusbarTotalesCXP',
               // statusAlign: 'right', // the magic config
                items: [
                     totalCargos,'-', totalAbonos, '-' ,totalPagar
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

