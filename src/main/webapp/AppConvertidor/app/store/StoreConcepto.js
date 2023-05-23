Ext.define('AppConvertidor.store.StoreConcepto', {
    extend: 'Ext.data.Store',
    
    fields: [
        'COMPANIA', 'ORIGEN', 'IDCONCGASTO', 'NOMBRE', 'GNOMBRE'
    ],
      proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/FindCGasto'
//            create:  'process/data2/cuentas',
//            update:  'process/data2/cuentas',
//            destroy: 'UploadDocument/delete'

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



