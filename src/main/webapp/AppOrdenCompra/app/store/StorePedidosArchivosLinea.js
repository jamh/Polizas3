Ext.define('AppOrdenCompra.store.StorePedidosArchivosLinea', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 150,
    remoteSort :true,
  //  groupField: 'NOMBRE_EMISOR',

    model: 'AppOrdenCompra.model.ModeloPedidosArchivosLinea',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaArchivosPedidos',
            create:  'detOrden/insert',
            update:  'detOrden/saveRel',
            destroy: 'detOrden/delete'

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

