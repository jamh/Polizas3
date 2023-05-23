Ext.define('AppConvertidor.store.StoreConceptoDiot', {
    extend: 'Ext.data.Store',

    fields: [
     'NOMBRE', 'CONCEPTO'
    ],
    
    proxy:{
        url:'process/data/FindConceptosDiot',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});