Ext.define('AppCargaFE2.store.StoreMonedaPagos', {
    extend: 'Ext.data.Store',

    fields: [
     'CODIGO', 'MONEDA', 'NOMBRE'
    ],
    
    proxy:{
        url:'process/data/BuscaMonedaPagos',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});