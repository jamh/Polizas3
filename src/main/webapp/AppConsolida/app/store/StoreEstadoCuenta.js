Ext.define('AppConsolida.store.StoreEstadoCuenta', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppConsolida.model.ModeloEstadoCuenta',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/CONC_BuscaEstadoCuenta',
            create:  'process/data2/cuentas',
            update:  'UploadDocumentFE/update',
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

