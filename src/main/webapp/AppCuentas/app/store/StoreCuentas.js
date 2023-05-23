Ext.define('AppCuentas.store.StoreCuentas', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppCuentas.model.ModeloCuentas',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaCuentasGrid',
            create:  'process/data2/cuentas',
            update:  'UploadDocumentFE/update'//,
           // destroy: 'UploadDocumentFE/delete'

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

