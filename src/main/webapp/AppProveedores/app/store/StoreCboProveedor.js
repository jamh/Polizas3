Ext.define('AppProveedores.store.StoreCboProveedor', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: false,
    pageSize: 30,

     fields: [
       'ID_CLIENTE_CBO', 'NOMBRE_CBO', 'NOMBRE1_CBO','RFC_CBO'
    ],

    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaCboProveedor'

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

