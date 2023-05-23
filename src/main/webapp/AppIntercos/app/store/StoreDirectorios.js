Ext.define('AppIntercos.store.StoreDirectorios', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppIntercos.model.ModeloDirectorios',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'dirdatacxp/read',
            create:  'dirdatacxp/create',
            update:  'dirdatacxp/update',
            destroy: 'dirdatacxp/destroy'

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

