Ext.define('AppDashboard.store.StorePeriodo', {
    extend: 'Ext.data.Store',    
    fields: [
     'COMPANIA', 'TIPO', 'CALENDARIO', 'PERIODO', 'FECHA_INI', 'FECHA_FIN', 'ESTATUS'
    ],
    
    proxy:{
        url:'process/data/BuscaPeriodos',
        type:'ajax',
        reader:{
            type:'json',
            rootProperty:'data',
            totalProperty:'total'
        }
    }

});