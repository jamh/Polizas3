Ext.define('AppConvertidor.store.StoreErpDetConvertidor', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 20,

    model: 'AppConvertidor.model.ModeloErpDetConvertidor',


     proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/ErpDetConvertidor',
          
           create:  'controlDet/convDet/insDet',
            update:  'controlDet/converDet/uptDet',
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

