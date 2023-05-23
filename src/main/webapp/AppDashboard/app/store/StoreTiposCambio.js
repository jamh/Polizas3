Ext.define('AppDashboard.store.StoreTiposCambio', {
    extend: 'Ext.data.Store',
        alias: 'store.StoreTiposCambio',
    model: 'AppDashboard.model.ModeloTiposCambio',



    proxy: {
        type: 'ajax',
        limitParam: null,
        url: 'paridad/semana',
        reader: {
            type: 'json',
             rootProperty: 'data',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});
