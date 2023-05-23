Ext.define('AppPolizas3.view.general.MenuGeneral', {
    extend: 'Ext.form.Panel',
    alias: 'widget.menugeneral',
    itemId: 'menugeneral',
    xtype: 'menugeneral',
    title: 'Buscar Poliza',
    region: 'west',
//    frame: true,
//    bodyPadding: 5,
//    bodyStyle: 'padding: 5px;',
    collapsed:false,
    split: true,
    collapsible: true,
    
    layout: 'anchor',
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    initComponent: function() {

        var storeCalendario = Ext.create('AppPolizas3.store.StoreCalendario');
        var storeTipoPoliza = Ext.create('AppPolizas3.store.StoreTipoPoliza');
        var storeCtoCto = Ext.create('AppPolizas3.store.StoreCC');



        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    name: 'cboAno',
                    id: 'cboAno22',
                    store: storeCalendario,
                    valueField: 'CALENDARIO',
                    displayField: 'CALENDARIO_NAME',
                    triggerAction: 'all',
                    emptyText: 'Selecciona',
                    fieldLabel: 'Calendario',
                   
//                    width: 200,
//                    colspan: 1,
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'Calendario No encontrado.'
                    },
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo de Poliza',
                    name: 'cboTipoPoliza',
                    id: 'cboTipoPoliza22',
                    store: storeTipoPoliza,
                    valueField: 'TIPO_POLIZA',
                    displayField: 'NOMBRE1',
                    triggerAction: 'all',
                    emptyText: 'Selecciona',
//                    width: 200,
//                    colspan: 1,
                    
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'Tipo Poliza No encontrado.'
                    },
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    store: storeCtoCto,
                    name: 'cboCtoCto',
                    id: 'cboCtoCto22',
                    valueField: 'CTO',
                    displayField: 'CTO_NAME',
                    triggerAction: 'all',
                    //anyMatch:true,
                    queryMode: 'local', 
                    typeAhead: true,
                    emptyText: 'Selecciona',
                    fieldLabel: 'Cto. Costo',
//                    width: 200,
//                    colspan: 1,
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'C Costos No encontrado.'
                    },
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    name: 'dtFechaIni',
                    id: 'dtFechaIni22',
                    fieldLabel: 'Fechas del',
//                //width: 200,
//                    colspan: 1,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y'//,
                    //allowBlank: false
                },
                {
                    xtype: 'datefield',
                    name: 'dtFechaFin',
                    id: 'dtFechaFin22',
                    fieldLabel: '    al',
//                    width: 200,
//                    colspan: 1,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    allowBlank: false

                },
                {
                    xtype: 'textfield',
                    name: 'txtNumIni',
                    id: 'txtNumIni22',
                    fieldLabel: 'Numero Inicial'//,
//                    colspan: 1
                },
                {
                    xtype: 'textfield',
                    name: 'txtNumFin',
                    id: 'txtNumFin22',
                    fieldLabel: '    al'//,
//                    colspan: 1
                }
            ],
            buttons: [
                {
                    text: 'Buscar',
                    action: 'buscar',
                    itemId: 'buscar22',
                    scope: this,
                    handler: function(btn) {

                        var form = this.getForm();
                        if (form.isValid()) {

                     
                            this.fireEvent("buscarMaestro", btn, Ext.getCmp('cboAno22').getValue(), Ext.getCmp('cboTipoPoliza22').getValue());
                        }

                    }
                }
            ]

        });

        this.callParent(arguments);
    }

}
);


