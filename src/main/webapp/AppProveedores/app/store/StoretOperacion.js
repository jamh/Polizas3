Ext.define('AppProveedores.store.StoretOperacion', {
    extend: 'Ext.data.Store',

    fields: [
     'ID', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscatOperacion',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});