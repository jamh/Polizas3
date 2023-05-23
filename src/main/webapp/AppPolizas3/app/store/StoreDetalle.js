Ext.define('AppPolizas3.store.StoreDetalle', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,
   
    model: 'AppPolizas3.model.ModeloDetalle',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:   'process/data3/PolizasFovi_DetPolizas_datos',
           create:  'controlDet/polizaDet/insDet',
            update:  'controlDet/polizaDet/uptDet',
            destroy: 'controlDet/polizaDet/delDet'


        },
        actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        },
        reader: {
            type: 'json',
            idProperty: 'SEC',
            root:'data', 
            messageProperty: 'message',
            successProperty: 'success'
                 

        },
        writer:{
            encode: true,
            writeAllFields: true,
             idProperty: 'SEC',
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});