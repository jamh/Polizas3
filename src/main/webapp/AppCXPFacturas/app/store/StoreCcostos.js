Ext.define('AppCXPFacturas.store.StoreCcostos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
   // pageSize: 300,
    remoteSort :true,

    model: 'AppCXPFacturas.model.ModelCcostos',


    proxy: {
        type: 'ajax',
        api: { 
            
            read:    'process/data2/BuscaCCCxp'

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


