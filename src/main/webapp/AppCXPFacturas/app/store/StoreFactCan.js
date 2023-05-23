Ext.define('AppCXPFacturas.store.StoreFactCan', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 300,
    remoteSort :true,

    model: 'AppCXPFacturas.model.ModelFactCan',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaFoliosGeneradosCan',
            create:  'process/data2/cuentas',
            update:  'UploadDocumentFE/updateCXP',
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

