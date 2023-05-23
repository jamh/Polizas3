Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppCXPFacturas.view.PanelSurFoliosGe', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurfoliosge',
    itemId: 'panelsurfoliosge',
    xtype: 'panelsurfoliosge',
    region: 'south',
  flex:1,
    initComponent: function() {
         var totalFacturas = Ext.create('Ext.toolbar.TextItem', {id:'totalFacturasFol',text: 'Cargos: 0'});
          var totalAPagar = Ext.create('Ext.toolbar.TextItem', {id:'totalAPagarFol',text: 'Cargos a Pagar: 0'});
         
  
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
                defaultText: 'Totales...',
                id: 'statusbarTotalesCXPFol',
               // statusAlign: 'right', // the magic config
                items: [
                   // estatusOrden,'-',totalRegistros,'-',totalValidos,'-',diferenciaCargosAbonos, '-',totalCargos, totalAbonos
                   totalFacturas, '-', totalAPagar
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

