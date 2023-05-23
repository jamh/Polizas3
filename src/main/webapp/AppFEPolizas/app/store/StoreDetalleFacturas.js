Ext.define('AppFEPolizas.store.StoreDetalleFacturas', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,
   
    model: 'AppFEPolizas.model.ModeloDetFe',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:   'process/data2/BuscaImportesFacturas',
           create:  'facturas/electronica/poliza'
//            update:  'controlDet/polizaDet/uptDet',
//            destroy: 'controlDet/polizaDet/delDet'


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
            writeAllFields: false,
             idProperty: 'SEC',
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});


