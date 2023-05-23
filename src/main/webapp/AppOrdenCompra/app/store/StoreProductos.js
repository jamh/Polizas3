Ext.define('AppOrdenCompra.store.StoreProductos', {
    extend: 'Ext.data.Store',

    fields: [
     'ID', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaProductos',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});