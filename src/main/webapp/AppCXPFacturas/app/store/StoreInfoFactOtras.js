Ext.define('AppCXPFacturas.store.StoreInfoFactOtras', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppCXPFacturas.model.ModeloInfoFactOtras',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaFactRelOtrasInfo'//,
//            create:  'process/data2/cuentas',
//            update:  'UploadDocumentFE/update',
//            destroy: 'UploadDocumentFE/delete'

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

