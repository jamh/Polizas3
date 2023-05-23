Ext.define('AppCargaFE.Application', {
    name: 'AppCargaFE',
    extend: 'Ext.app.Application',
    appFolder: 'AppCargaFE/app',
    
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
