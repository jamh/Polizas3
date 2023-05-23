Ext.define('AppDashboard.store.StoreFe', {
    extend: 'Ext.data.Store',
    alias: 'store.StoreFe',
    model: 'AppDashboard.model.ModeloFe',
    pageSize: 20,
   
    remoteFilter: true,
    proxy: {
        type: 'ajax',

       
          limitParam: null,
        url: 'process2/data/FeFeraz',
        reader: {
            type: 'json',
             rootProperty: 'data',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});
