Ext.define('AppCargaFE2.store.StoreMetPagos', {
    extend: 'Ext.data.Store',

    fields: [
     'CLAVE', 'CONCEPTO'
    ],
    
    proxy:{
        url:'process/data/FindMetPagosDet',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});