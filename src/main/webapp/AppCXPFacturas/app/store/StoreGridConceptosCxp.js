Ext.define('AppCXPFacturas.store.StoreGridConceptosCxp', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
   // pageSize: 300,
    remoteSort :true,

    model: 'AppCXPFacturas.model.ModelGridConceptosCxp',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaGridConceptoCxp',
            create:  'Pagos/generaConceptosPagos',
            update:  'UploadDocumentFE/updateCXP',
            destroy: 'Pagos/quitarConceptosPagos'

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

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


