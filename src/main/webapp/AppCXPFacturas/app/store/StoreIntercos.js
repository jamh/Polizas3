Ext.define('AppCXPFacturas.store.StoreIntercos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 150,
    remoteSort :true,
    groupField: 'NOMBRE_EMISOR',

    model: 'AppCXPFacturas.model.ModeloIntercos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivosCXPIntercosP',
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

