Ext.define('AppFormulas.store.StoreCedulaDet', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppFormulas.model.ModeloCedulaDet',


     proxy: {
        type: 'ajax',
        api: { 
            
            read:    'processFormula/dataFormula/BuscaDetCedula',
          
           create:  'controlDet/convDet/insDet',
            update:  'processFormula/uptDet',
            destroy: 'controlDet/convDet/delDet'

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

