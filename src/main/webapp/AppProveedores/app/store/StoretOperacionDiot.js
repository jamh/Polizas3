Ext.define('AppProveedores.store.StoretOperacionDiot', {
    extend: 'Ext.data.Store',

    fields: [
     'TIPO', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscatOperacionDiot',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});