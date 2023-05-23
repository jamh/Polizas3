Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([  
  'Ext.ux.statusbar.StatusBar'  
]);
Ext.define('AppProveedores.view.PanelSurProv', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelsurprov',
    itemId: 'panelsurprov',
    xtype: 'panelsurprov',
    region: 'south',
    initComponent: function() {
         var totalCargos = Ext.create('Ext.toolbar.TextItem', {id:'totalCargos',text: 'Cargos: 0'}),
          totalRegistros= Ext.create('Ext.toolbar.TextItem', {id:'totalRegistros',text: 'Total Registros: 0'}),
          totalValidos= Ext.create('Ext.toolbar.TextItem', {id:'totalRegistrosValidos',text: 'Registros Validos: 0'}),
          diferenciaCargosAbonos= Ext.create('Ext.toolbar.TextItem', {id:'diferenciaRegistros',text: 'Diferencia: 0'}),
        msgErr = Ext.create('Ext.toolbar.TextItem', {id:'msgErr',text: ''}),
        estatusOrden = Ext.create('Ext.toolbar.TextItem', {id:'estatusOrden',text: ''}),
        totalLabel = Ext.create('Ext.toolbar.TextItem', {id:'totalLabel',text: 'Total Registros'});
   
        Ext.apply(this, {
            bbar: Ext.create('Ext.ux.StatusBar', {
                defaultText: 'Totales Guardados...',
                id: 'statusbarTotales',
               // statusAlign: 'right', // the magic config
                items: [
                    estatusOrden,'-',msgErr
                ]
            })
        });//fin apply
        this.callParent(arguments);
    }//fin function
});

