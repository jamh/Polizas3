Ext.define('AppPolizas3.store.StoreCuentaPadre', {
    extend: 'Ext.data.Store',

     model: 'AppPolizas3.model.ModeloCuentaPadre',


      proxy: {
        type: 'ajax',
        api:{
            //read    : baseURL+'busca.jsp?sql=BuscaEmpleados'+extraParams    
            read:'process/data2/PolizasFovi_CuentasPadre'
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

