Ext.define('AppCXPFacturas.store.StoreTipoGasto', {
    extend: 'Ext.data.Store',

    fields: [
     'TIPO', 'NOMBRE', 'NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/BuscaTipoGasto',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});