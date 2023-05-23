Ext.define('AppPolizas3.store.StoreBuscaFactura', {
    extend: 'Ext.data.Store',
    
    model: 'AppPolizas3.model.ModeloBuscaFactura',
    
    pageSize: 10,
    
    proxy: {
        url: 'process/data2/BuscaConvertidor',
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