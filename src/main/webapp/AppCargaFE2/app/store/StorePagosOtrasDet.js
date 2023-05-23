Ext.define('AppCargaFE2.store.StorePagosOtrasDet', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 30,
    remoteSort :true,

    model: 'AppCargaFE2.model.ModeloPagosOtrasDet',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/BuscaPagosOtrasDet',
            create:  'Pagos/savePagoOtras',
            update:  'Pagos/updatePagoOtras',
            destroy: 'Pagos/deletePagoOtras'

        },
        actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        },
        reader: {
            type: 'json',
            idProperty: 'ID',
            root:'data', 
            messageProperty: 'message',
            successProperty: 'success'
                 

        },
        writer:{
            encode: true,
            writeAllFields: true,
            type: 'json',
            root: 'data',
            successProperty	: 'success'
        }
    }

});

