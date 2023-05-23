Ext.define('AppOrdenCompra.store.StoreAlmacen', {
    extend: 'Ext.data.Store',

    fields: [
     'ID', 'NOMBRE','NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/BuscaAlamcen',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});