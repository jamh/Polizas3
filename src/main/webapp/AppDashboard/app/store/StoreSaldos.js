Ext.define('AppDashboard.store.StoreSaldos', {
    extend: 'Ext.data.Store',
    alias: 'store.StorePolizasDescuadradas',
    model: 'AppDashboard.model.ModeloSaldos',
    remoteFilter: true,
    proxy: {
        type: 'ajax',

        url:'process/data3/SaldosPeriodo',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
        actionMethods: {
           
            read    : 'POST',
          
          
        }
    },
    autoLoad: false
});
