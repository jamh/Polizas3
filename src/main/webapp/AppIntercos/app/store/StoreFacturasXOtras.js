Ext.define('AppIntercos.store.StoreFacturasXOtras', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppIntercos.model.ModeloFacturasXOtras',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaOtrasRelfact',
            create:  'process/data2/cuentas',
            update:  'UploadDocumentFE/updateCXP'//,
          //  destroy: 'UploadDocumentFE/delete'

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

