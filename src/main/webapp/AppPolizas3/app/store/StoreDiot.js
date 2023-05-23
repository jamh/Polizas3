Ext.define('AppPolizas3.store.StoreDiot', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppPolizas3.model.ModeloDiot',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaConceptosDiot',
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
