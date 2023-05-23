Ext.define('AppIntercos.store.StoreRembolsos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 10,
    remoteSort :true,

    model: 'AppIntercos.model.ModeloRembolso',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'Pagos/dataRembolso/BuscaDatosRembolso',
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

