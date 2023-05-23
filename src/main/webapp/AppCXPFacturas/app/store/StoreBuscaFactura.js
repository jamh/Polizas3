Ext.define('AppCXPFacturas.store.StoreBuscaFactura', {
    extend: 'Ext.data.Store',
    
    model: 'AppCXPFacturas.model.ModeloBuscaFactura',
    
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