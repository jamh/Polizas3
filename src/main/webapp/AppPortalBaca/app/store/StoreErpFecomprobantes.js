Ext.define('AppPortalBaca.store.StoreErpFecomprobantes', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: false,
    pageSize: 60,
    remoteFilter: true,
    remoteSort: true,
    groupField: 'null',
    model: 'AppPortalBaca.model.ModelErpFecomprobantes',
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'process/data3/PortalFacturasProveedor',
            create: 'control/poliza/ins',
            update: 'control/poliza/upd',
            destroy: 'control/poliza/del'
        },
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json',
            idProperty: 'ID',
            rootProperty: 'data',
            messageProperty: 'message',
            successProperty: 'success'
        },
        writer: {
            encode: true,
            writeAllFields: true,
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    }

});