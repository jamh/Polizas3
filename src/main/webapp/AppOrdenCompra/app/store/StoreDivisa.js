Ext.define('AppOrdenCompra.store.StoreDivisa', {
    extend: 'Ext.data.Store',

    fields: [
     'CODIGO', 'MONEDA', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaDivisaCXP',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});