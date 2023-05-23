Ext.define('AppProveedores.store.StoreProducto', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,

    model: 'AppProveedores.model.ModeloProductos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaProductosProv',
            create:  'process/data2/Proveedores',
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

