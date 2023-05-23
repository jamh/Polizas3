Ext.define('AppDashboard.store.StoreVideos', {
    extend: 'Ext.data.Store',
    autoLoad:true,
    model: 'AppAyuda.model.ModeloVideos',
    
    proxy: {
        url: 'process/data/Videos',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }

});