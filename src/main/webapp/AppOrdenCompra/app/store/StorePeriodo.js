Ext.define('AppOrdenCompra.store.StorePeriodo', {
     extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppOrdenCompra.model.ModeloPeriodo',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/PeriodoFe'
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


