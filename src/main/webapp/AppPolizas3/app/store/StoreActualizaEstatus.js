Ext.define('AppPolizas3.store.StoreActualizaEstatus', {
    extend: 'Ext.data.Store',

    
    fields: [
     'ESTATUS' 
    ],
    
    proxy:{
        url:'process/data/ActualizaEstatus',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
