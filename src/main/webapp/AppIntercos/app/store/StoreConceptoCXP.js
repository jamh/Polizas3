Ext.define('AppIntercos.store.StoreConceptoCXP', {
    extend: 'Ext.data.Store',

    fields: [
     'CONCEPTO', 'NOMBRE_CONCEPTO'
    ],
    
    proxy:{
        url:'process/data/BuscaConceptoCXP',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});

