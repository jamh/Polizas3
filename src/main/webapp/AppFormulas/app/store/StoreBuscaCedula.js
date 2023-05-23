Ext.define('AppFormulas.store.StoreBuscaCedula', {
    extend: 'Ext.data.Store',
    
    model: 'AppFormulas.model.ModeloBuscaCedula',
    
    pageSize: 10,
    
    proxy: {
        url: 'process/data2/BuscaCedula',
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