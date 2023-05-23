Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppIntercos.view.PanelSurTesoreria', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurtesoreria',
    itemId: 'panelsurtesoreria',
    xtype: 'panelsurtesoreria',
    region: 'south',
  flex:1,
    initComponent: function() {
         var totalFacturas = Ext.create('Ext.toolbar.TextItem', {id:'totalFacturas',text: 'Cargos: 0'});
  
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
                defaultText: 'Totales...',
                id: 'statusbarTotalesCXP',
               // statusAlign: 'right', // the magic config
                items: [
                   // estatusOrden,'-',totalRegistros,'-',totalValidos,'-',diferenciaCargosAbonos, '-',totalCargos, totalAbonos
                   totalFacturas
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

