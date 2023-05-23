Ext.define('AppProveedores.store.StoreConceptoD', {
    extend: 'Ext.data.Store',

    fields: [
     'CONCEPTO', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaConceptoD',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});