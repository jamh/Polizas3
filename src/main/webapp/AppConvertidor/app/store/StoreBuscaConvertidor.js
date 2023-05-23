Ext.define('AppConvertidor.store.StoreBuscaConvertidor', {
    extend: 'Ext.data.Store',
    
    model: 'AppConvertidor.model.ModeloBuscaConvertidor',
    
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