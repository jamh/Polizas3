Ext.define('AppIntercos.store.StoreFoliosGe', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 300,
    remoteSort :true,

    model: 'AppIntercos.model.ModelFoliosGe',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaFoliosGenerados',
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

