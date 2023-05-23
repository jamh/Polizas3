Ext.define('AppProveedores.store.StoreBanco', {
    extend: 'Ext.data.Store',

    fields: [
     'CLAVE', 'NOMBRE', 'NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/BuscaBancoSatProv',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
