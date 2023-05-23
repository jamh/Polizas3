Ext.define('AppProveedores.store.StoreCuenta', {
    extend: 'Ext.data.Store',

    fields: [
     'CUENTA', 'NOMBRE', 'CUENTA_ALIAS'
    ],
    
    proxy:{
        url:'process/data/buscaCtaProv',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
