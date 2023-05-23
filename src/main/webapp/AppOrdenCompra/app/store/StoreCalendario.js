Ext.define('AppOrdenCompra.store.StoreCalendario', {
    extend: 'Ext.data.Store',    
    fields: [
     'CALENDARIO', 'CALENDARIO_NAME' 
    ],
    
    proxy:{
        url:'process/data/PolizasFovi_Anios',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});