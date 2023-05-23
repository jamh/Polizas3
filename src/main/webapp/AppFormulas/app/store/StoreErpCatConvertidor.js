Ext.define('AppFormulas.store.StoreErpCatConvertidor', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppFormulas.model.ModeloErpCatConvertidor',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaErpCatConvertidor',
            create:  'process/data2/create',
            update:  'convertidor/update',
            destroy: 'convertidor/delete'

        },
        actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        },
        reader: {
            type: 'json',
            idProperty: 'ID',
            root:'data', 
            messageProperty: 'message',
            successProperty: 'success'
                 

        },
        writer:{
            encode: true,
            writeAllFields: true,
            type: 'json',
            root: 'data',
            successProperty	: 'success'
        }
    }

});

