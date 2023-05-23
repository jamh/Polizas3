Ext.define('AppClientes.store.StoreClientes', {
    extend: 'Ext.data.Store',
    autoLoad:false,
    autoSync: false,
    pageSize: 30,

    model: 'AppClientes.model.ModeloClientes',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaClientesGrid',
            create:  'process/data2/Clientes',
            update:  'UploadDocumentFE/update',
            destroy: 'UploadDocumentFE/delete'

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

