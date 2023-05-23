Ext.define('AppIntercos.store.StoreCboFolioGeCan', {
    extend: 'Ext.data.Store',

    fields: [
     'FOLIO','FOLIO_NOM'
     
     
    ],
    

     proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data/BuscaFoliosGenCxpCan'
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

