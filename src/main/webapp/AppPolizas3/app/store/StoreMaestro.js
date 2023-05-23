Ext.define('AppPolizas3.store.StoreMaestro', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,
    remoteSort :true,

    model: 'AppPolizas3.model.ModeloMaestro',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data3/cuentas',
            create:  'control/poliza/ins',
            update:  'control/poliza/upd',
            destroy: 'control/poliza/del'

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
