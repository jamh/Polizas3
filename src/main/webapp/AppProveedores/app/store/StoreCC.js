Ext.define('AppProveedores.store.StoreCC', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO', 'CTO_NAME' 
    ],
    
    proxy:{
        url:'process/data/PolizasFovi_CCostos2',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});