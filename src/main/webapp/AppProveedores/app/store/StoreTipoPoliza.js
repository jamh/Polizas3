Ext.define('AppProveedores.store.StoreTipoPoliza', {
    extend: 'Ext.data.Store',

    fields: [
     'TIPO_POLIZA', 'NOMBRE', 'NOMBRE1'
    ],
    
    proxy:{
        url:'process/data/TiposPolizas',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});
