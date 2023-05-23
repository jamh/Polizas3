Ext.define('AppCXPFacturas.store.StoreArchivosTesor', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 150,
    remoteSort :true,

    model: 'AppCXPFacturas.model.ModelArchivosTesor',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/GetArchivosTesoreria',
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

