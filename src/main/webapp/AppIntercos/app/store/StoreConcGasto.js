Ext.define('AppIntercos.store.StoreConcGasto', {
    extend: 'Ext.data.Store',

    fields: [
     'COMPANIA', 'ORIGEN', 'IDCONCGASTO', 'NO_CASO', 'T_POLIZA','GNOMBRE'
    ],
    
    proxy:{
        url:'process/data/FindCongGastos',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});