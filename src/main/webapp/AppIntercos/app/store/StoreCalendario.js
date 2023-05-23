
Ext.define('AppIntercos.store.StoreCalendario', {
     extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 10,

    model: 'AppIntercos.model.ModeloCalendario',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/CalendarioFe'
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




