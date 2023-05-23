Ext.define('AppIntercos.store.StoreCto', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO', 'NOMBRE_CTO'
    ],
    
    proxy:{
        url:'process/data/BuscaCXPCto',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});