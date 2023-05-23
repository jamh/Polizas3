Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppIntercos.view.PanelSurViaticArchivos', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurviaticarchivos',
    itemId: 'panelsurviaticarchivos',
    xtype: 'panelsurviaticarchivos',
    region: 'south',
  flex:1,
    initComponent: function() {
         var totalComprobado = Ext.create('Ext.toolbar.TextItem', {id:'totalComprobadoV',text: 'Total: 0'});
  
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
                defaultText: 'Totales...',
                id: 'statusbarTotalesViaticArchivos',
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

