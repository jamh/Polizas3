Ext.define('AppDashboard.store.StorePolizasDescuadradas', {
    extend: 'Ext.data.Store',
        alias: 'store.StorePolizasDescuadradas',
    model: 'AppDashboard.model.ModeloPolizasDescuadradas',



    proxy: {
        type: 'ajax',
        limitParam: null,
        url: 'process/data/PolizasDescuadradas',
        reader: {
            type: 'json',
             rootProperty: 'data',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});
