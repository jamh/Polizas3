Ext.define('AppOrdenCompra.store.StoreProveedor', {
    extend: 'Ext.data.Store',

    fields: [
     'RFC', 'NOMBRE','ID_CLIENTE'
    ],
    
    proxy:{
        url:'process/data/BuscaProveedorOrden',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});