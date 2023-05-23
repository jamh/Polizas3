Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppCXPFacturas.view.PanelSurOtrasArchivos', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurotrasarchivos',
    itemId: 'panelsurotrasarchivos',
    xtype: 'panelsurotrasarchivos',
    region: 'south',
  flex:1,
    initComponent: function() {
         var totalComprobado = Ext.create('Ext.toolbar.TextItem', {id:'totalComprobado',text: 'Total: 0'});
  
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
                defaultText: 'Totales...',
                id: 'statusbarTotalesOtrasArchivos',
               // statusAlign: 'right', // the magic config
                items: [
                   // estatusOrden,'-',totalRegistros,'-',totalValidos,'-',diferenciaCargosAbonos, '-',totalCargos, totalAbonos
                   totalComprobado
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

