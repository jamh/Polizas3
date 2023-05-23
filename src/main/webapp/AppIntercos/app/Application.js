Ext.define('AppIntercos.Application', {
    name: 'AppIntercos',
    extend: 'Ext.app.Application',
    appFolder: 'AppIntercos/app',
    
    views: [
        'Main',
        'FormArchivos',
        'GridArchivos',
        'WindowArchivos'
//        ,
//        'Viewport'
    ],
    

    controllers: [
        'Main'
    ],

    stores: [
        'StoreArchivos'
    ],
    
    models:[
        'ModeloArchivos'
    ]
});
