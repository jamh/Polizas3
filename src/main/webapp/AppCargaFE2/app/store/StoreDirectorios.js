Ext.define('AppCargaFE2.store.StoreDirectorios', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppCargaFE2.model.ModeloDirectorios',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'dirdata/read',
            create:  'dirdata/create',
            update:  'dirdata/update',
            destroy: 'dirdata/destroy'

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

