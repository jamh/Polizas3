Ext.define('AppProveedores.store.StoreBancoPago', {
    extend: 'Ext.data.Store',

    fields: [
     'CLAVE', 'NOMBRE', 'NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/BuscaBancoSat',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
