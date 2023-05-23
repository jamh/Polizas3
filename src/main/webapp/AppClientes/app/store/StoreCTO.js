Ext.define('AppClientes.store.StoreCTO', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO_CTO', 'NOMBRE', 'NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/BuscaCTOClie',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
