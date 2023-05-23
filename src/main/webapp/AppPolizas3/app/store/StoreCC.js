Ext.define('AppPolizas3.store.StoreCC', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO', 'CTO_NAME' 
    ],
    
    proxy:{
        url:'process/data/PolizasFovi_CCostos',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});