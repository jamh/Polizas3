Ext.define('AppCXPFacturas.Application', {
    name: 'AppCXPFacturas',
    extend: 'Ext.app.Application',
    appFolder: 'AppCXPFacturas/app',
    
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
