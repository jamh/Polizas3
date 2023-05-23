Ext.define('AppCargaFE.store.StoreArchivos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 100,
    remoteSort :true,
    

    model: 'AppCargaFE.model.ModeloArchivos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivos',
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

