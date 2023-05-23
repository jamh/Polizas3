Ext.define('AppProveedores.store.StoretTercero', {
    extend: 'Ext.data.Store',

    fields: [
     'TIPO', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscatTercero',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});