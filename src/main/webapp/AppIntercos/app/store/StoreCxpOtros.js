Ext.define('AppIntercos.store.StoreCxpOtros', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppIntercos.model.ModeloCxpOtros',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivosCXPOtros',
            create:  'process/data2/cuentas',
            update:  'Pagos/updateOtros',
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

