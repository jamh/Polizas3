Ext.define('AppCargaFE2.store.StoreArchivos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppCargaFE2.model.ModeloArchivos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivos',
            create:  'process/data2/cuentas',
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

