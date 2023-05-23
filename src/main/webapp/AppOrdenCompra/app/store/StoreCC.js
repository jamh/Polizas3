Ext.define('AppOrdenCompra.store.StoreCC', {
    extend: 'Ext.data.Store',

    fields: [
     'COMPANIA_CC', 'CTO_CTO_CC','NOMBRE_CC'
    ],
    
    proxy:{
        url:'process/data/BuscaCCCxp',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});