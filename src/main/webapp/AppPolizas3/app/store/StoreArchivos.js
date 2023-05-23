Ext.define('AppPolizas3.store.StoreArchivos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppPolizas3.model.ModeloArchivos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaArchivos2',
            create:  'process/data2/cuentas',
            update:  'process/data2/cuentas',
            destroy: 'UploadDocument/delete'

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

