Ext.define('AppPolizas3.store.StoreSumDet', {
    extend: 'Ext.data.Store',

    model: 'AppPolizas3.model.ModeloSum',
    
    proxy:{
        url:'process/data/SumCargosAbonos',
        type:'ajax',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }

});




