Ext.define('AppPolizas3.store.StoreRegistros', {
    extend: 'Ext.data.Store',

     model: 'AppPolizas3.model.ModeloRegistros',

   
    
    proxy:{
        url:'process/data/CuentaRegistros',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});

