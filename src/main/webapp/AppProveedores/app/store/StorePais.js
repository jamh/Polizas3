Ext.define('AppProveedores.store.StorePais', {
    extend: 'Ext.data.Store',

    fields: [
     'PAIS', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaPaisProv',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});