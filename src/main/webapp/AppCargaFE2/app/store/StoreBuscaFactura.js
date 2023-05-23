Ext.define('AppCargaFE2.store.StoreBuscaFactura', {
    extend: 'Ext.data.Store',
    
    model: 'AppCargaFE2.model.ModeloBuscaFactura',
    
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