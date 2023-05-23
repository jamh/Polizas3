Ext.define('AppCXPFacturas.store.StoreEmpleados', {
    extend: 'Ext.data.Store',
    pageSize: 10,
    
    fields: [
       // 'EMPLEADO', 'NOMBRE'
       'NOMBRE', 'RFC'
    ],
      proxy: {
        type: 'ajax',
        api: { 
            
         //   read:    'process/data2/FindEmpleados'
              read:    'process/data2/buscaEmpleadosTes'
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



