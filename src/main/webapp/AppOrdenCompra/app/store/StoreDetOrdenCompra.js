Ext.define('AppOrdenCompra.store.StoreDetOrdenCompra', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 150,
    remoteSort :true,
  //  groupField: 'NOMBRE_EMISOR',

    model: 'AppOrdenCompra.model.ModeloDetOrdenCompra',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaDetOrdenCompra',
            create:  'detOrden/insert',
            update:  'detOrden/update',
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

