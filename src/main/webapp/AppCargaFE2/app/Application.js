Ext.define('AppCargaFE2.Application', {
    name: 'AppCargaFE2',
    extend: 'Ext.app.Application',
    appFolder: 'AppCargaFE2/app',
    
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
