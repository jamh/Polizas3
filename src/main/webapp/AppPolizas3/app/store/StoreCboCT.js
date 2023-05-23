Ext.define('AppPolizas3.store.StoreCboCT', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO_TRABAJO', 'NOMBRE', 'NOMBRE_CT'
    ],

      proxy: {
        type: 'ajax',
        api:{
            //read    : baseURL+'busca.jsp?sql=BuscaEmpleados'+extraParams    
            read:'process/data2/BuscaCT'
  //          create  : baseURL+'save.jsp?action=insert&sql=InsertaEntradaAlmacen&SqlId=LeeEntradaAlmacenId&IdTime=HORA'+extraParams,
    //        update  : baseURL+'process.jsp?action=update&sql=ActualizaEntradaAlmacen'+extraParams//,
            //destroy : baseURL+'process.jsp?action=delete&sql=DeleteUsuarios'+extraParams
        },//fin api
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
            successProperty : 'success'
        }

       
    }
    
});



