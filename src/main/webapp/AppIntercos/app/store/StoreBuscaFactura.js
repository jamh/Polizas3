Ext.define('AppIntercos.store.StoreBuscaFactura', {
    extend: 'Ext.data.Store',
    
    model: 'AppIntercos.model.ModeloBuscaFactura',
    
    pageSize: 10,
    
    proxy: {
        url: 'process/data2/BuscaFactura',
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
         actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        }
    }

});