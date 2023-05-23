Ext.define('AppIntercos.store.StoreFolioTes', {
    extend: 'Ext.data.Store',

    fields: [
     'FOLIO'
    ],
    

     proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data/BuscaFoliosETesoreria'
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

