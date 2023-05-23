Ext.define('AppCargaFE2.store.StoreCXP', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppCargaFE2.model.ModeloCXP',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivosCXP2',
            create:  'process/data2/cuentas',
            update:  'UploadDocumentFE/updateMult',
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

