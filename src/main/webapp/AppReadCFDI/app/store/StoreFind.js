Ext.define('AppReadCFDI.store.StoreFind', {
    extend: 'Ext.data.Store',

    fields: [
     'CTO', 'CTO_NAME' 
    ],
    
  proxy: {
        type: 'jsonp',
        api:{
            read    : 'https://portalcfdi.facturaelectronica.sat.gob.mx/ConsultaReceptor.aspx',           
          //  create  : baseURL+'save.jsp?action=insert&sql=InsertaOrdenCompra&SqlId=LeeCuadroComparativoId&IdTime=HORA'+extraParams,
           // update  : baseURL+'process.jsp?action=update&sql=ActualizaCuadroComparativo'+extraParams//,
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
            successProperty	: 'success'
        }        
    }

});