Ext.define('AppCargaFE2.store.StorePolRelPagosCXP', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppCargaFE2.model.ModeloPolRelPagosCXP',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaPolRelPagosCFDI',
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

