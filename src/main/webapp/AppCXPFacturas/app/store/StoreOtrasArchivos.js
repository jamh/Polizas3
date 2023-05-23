Ext.define('AppCXPFacturas.store.StoreOtrasArchivos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppCXPFacturas.model.ModeloOtrasArchivos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaOtrasArchivos',
//            create:  'process/data2/cuentas',
//            update:  'UploadDocumentFE/update',
            destroy: 'UploadDocument/deleteOtras'

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

