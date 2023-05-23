Ext.define('AppProveedores.store.StoreEstado', {
    extend: 'Ext.data.Store',

    fields: [
     'ESTADO', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaEstadoProv',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});