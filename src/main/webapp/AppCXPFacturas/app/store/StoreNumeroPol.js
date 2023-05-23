Ext.define('AppCXPFacturas.store.StoreNumeroPol', {
     extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 10,

    model: 'AppCXPFacturas.model.ModeloNumeroPol',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/numeroPolFe'
//            create:  'process/data2/cuentas',
//            update:  'process/data2/cuentas',
//            destroy: 'process/data2/cuentas'

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


